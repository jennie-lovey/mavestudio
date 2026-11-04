import { useEffect, useState } from "react";
import logoMark from "../assets/figma/logo-mark.svg";
import RevealOnScroll from "./RevealOnScroll";

const PROJECT_TYPES = [
  "Redesign my app or website",
  "Design a new product",
  "Ongoing design help",
  "Not sure yet",
];

const FIELD =
  "w-full rounded-[16px] border border-white/10 bg-white/[0.04] px-5 py-4 font-urbanist text-[16px] text-white placeholder:text-white/35 outline-none transition focus:border-white/30 focus:bg-white/[0.07]";

function ContactForm() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center gap-4 rounded-[30px] border border-white/10 bg-[linear-gradient(170.8deg,rgb(27,34,56)_5.5%,rgb(10,10,12)_83.1%)] p-8 md:p-10">
        <p className="font-manrope text-[32px] leading-tight font-medium text-white">Thank you. We got it.</p>
        <p className="font-urbanist text-[18px] text-white/65">
          We read every message ourselves and will reply by email soon. If it&rsquo;s urgent, you can also book a call
          below.
        </p>
        <a
          href="https://cal.com/mavestudio-hk0kyt/30min?overlayCalendar=true"
          target="_blank"
          rel="noreferrer"
          className="mt-2 rounded-[58px] bg-[#1e1e1e] px-8 py-4 font-urbanist text-[18px] font-semibold text-white transition hover:bg-[#3a3a3a]"
        >
          Book a call
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-[30px] border border-white/10 bg-[linear-gradient(170.8deg,rgb(27,34,56)_5.5%,rgb(10,10,12)_83.1%)] p-6 md:p-10"
    >
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label className="flex flex-col gap-2">
        <span className="font-urbanist text-[14px] text-white/60">Your name</span>
        <input required name="name" type="text" autoComplete="name" placeholder="Jane Doe" className={FIELD} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-urbanist text-[14px] text-white/60">Email</span>
        <input required name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={FIELD} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-urbanist text-[14px] text-white/60">What do you need?</span>
        <select name="project" defaultValue={PROJECT_TYPES[0]} className={`${FIELD} appearance-none`}>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type} className="bg-[#0a0a0c] text-white">
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-urbanist text-[14px] text-white/60">Tell us about your project</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="What are you building, and what feels off right now?"
          className={`${FIELD} resize-none`}
        />
      </label>

      {status === "error" && (
        <p className="font-urbanist text-[15px] text-[#ff9b9b]">
          Something went wrong sending that. Please try again, or email us at{" "}
          <a href="mailto:hello@mavestudios.com" className="underline underline-offset-4">
            hello@mavestudios.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 rounded-[58px] bg-[#1e1e1e] py-4 font-urbanist text-[18px] font-semibold text-white transition hover:bg-[#3a3a3a] disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Start a project — mavestudios";
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0c] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          top: "55%",
          background:
            "linear-gradient(to bottom, rgba(42,52,94,0) 0%, rgba(42,52,94,0.3) 55%, rgba(58,72,120,0.5) 100%)",
        }}
      />

      <header className="relative mx-auto flex max-w-[1240px] items-center justify-between px-6 pt-8 md:px-10 md:pt-10">
        <a href="/" className="flex items-start gap-[6px] transition hover:opacity-80">
          <span className="font-manrope text-[24px] font-normal whitespace-nowrap text-white md:text-[28px]">
            mavestudios
          </span>
          <img src={logoMark} alt="" className="block size-[18px] md:size-[22px]" />
        </a>
        <a
          href="/"
          className="font-urbanist text-[16px] text-white/60 transition hover:text-white"
        >
          &larr; Back to home
        </a>
      </header>

      <div className="relative mx-auto grid max-w-[1240px] gap-12 px-6 pt-14 pb-16 md:px-10 md:pt-20 lg:grid-cols-[1fr_560px] lg:gap-20">
        <div className="flex flex-col items-start gap-6">
          <RevealOnScroll immediate className="font-aeonik text-[20px] text-white/60">
            Start a project
          </RevealOnScroll>

          <RevealOnScroll
            as="h1"
            immediate
            className="font-manrope text-[40px] leading-[1.1] font-medium text-white md:text-[64px]"
            style={{ animationDelay: "0.08s" }}
          >
            Tell us what
            <br />
            you&rsquo;re building.
          </RevealOnScroll>

          <RevealOnScroll
            as="p"
            immediate
            className="max-w-[460px] font-urbanist text-[18px] leading-relaxed text-white/65"
            style={{ animationDelay: "0.16s" }}
          >
            Share a few details and we&rsquo;ll reply by email. Prefer to talk it through? Pick a time and we&rsquo;ll
            go over it together.
          </RevealOnScroll>

          <RevealOnScroll immediate className="flex flex-col items-start gap-5" style={{ animationDelay: "0.24s" }}>
            <a
              href="https://cal.com/mavestudio-hk0kyt/30min?overlayCalendar=true"
              target="_blank"
              rel="noreferrer"
              className="rounded-[58px] border border-white/15 bg-[rgba(13,13,13,0.1)] px-8 py-4 font-manrope text-[18px] font-semibold text-white transition hover:bg-white/10"
            >
              Book a call
            </a>
            <p className="font-urbanist text-[16px] text-white/55">
              Or email{" "}
              <a
                href="mailto:hello@mavestudios.com"
                className="text-white underline underline-offset-4 transition hover:opacity-80"
              >
                hello@mavestudios.com
              </a>
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll immediate style={{ animationDelay: "0.2s" }}>
          <ContactForm />
        </RevealOnScroll>
      </div>

      <footer className="relative mx-auto max-w-[1240px] px-6 pb-10 md:px-10">
        <p className="font-urbanist text-[14px] font-medium text-white/70">
          &copy;mavestudio 2026 | All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
