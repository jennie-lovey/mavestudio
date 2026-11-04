// Receives the contact form and emails it to the studio through Resend.
//
// Environment variables (set in the Netlify dashboard, never in the code):
//   RESEND_API_KEY       your Resend API key
//   CONTACT_TO_EMAIL     where messages should be delivered (your inbox)
//   CONTACT_FROM_EMAIL   optional sender, e.g. "mavestudios <hello@mavestudio.site>"
//                        (defaults to Resend's shared test sender)

const DEFAULT_FROM = "mavestudios <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export default async (req) => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  // Hidden spam-trap field: real visitors leave it empty. Pretend success for bots.
  if (clean(data["bot-field"], 200)) {
    return json({ ok: true });
  }

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const project = clean(data.project, 120);
  const message = clean(data.message, 5000);

  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return json({ error: "Please fill in your name, a valid email and a message." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return json({ error: "Email is not set up yet." }, 500);
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Needs: ${project || "Not specified"}`,
    "",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 12px">New message from your site</h2>
      <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 16px"><strong>Needs:</strong> ${escapeHtml(project || "Not specified")}</p>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
      to: [to],
      reply_to: email,
      subject: `New project enquiry from ${name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected the email", response.status, await response.text());
    return json({ error: "Could not send the email." }, 502);
  }

  return json({ ok: true });
};
