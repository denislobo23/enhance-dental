"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Image from "next/image";
import {
  CalendarDays,
  ScanFace,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-2 pt-2 lg:pb-4 lg:pt-4">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Premium Dental Care
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight md:text-6xl">
              A confident smile can change everything.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Enhance Dental connects patients with premium cosmetic, implant,
              and restorative dentistry pathways delivered with clarity,
              comfort, and natural-looking results.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#0b376d] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#082b55]"
              >
                Book a Smile Consultation
              </a>

              <a
                href="#treatments"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-semibold transition hover:bg-slate-50"
              >
                View Treatments
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative hidden aspect-[16/8] w-full md:block">
              <Image
                src="/images/enhance-dental/hero-desktop1.jpg"
                alt="Premium cosmetic dental consultation"
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
            </div>

            <div className="relative aspect-[4/5] w-full md:hidden">
              <Image
                src="/images/enhance-dental/hero-mobile1.jpg"
                alt="Premium cosmetic dental consultation"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section
        id="treatments"
        className="mx-auto max-w-7xl px-6 py-12 lg:py-16"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Treatments
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            High-value dental treatments patients actively search for.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
  {
    title: "Veneers",
    href: "/veneers",
    text: "For patients wanting a whiter, straighter, more polished smile without looking artificial.",
  },
  {
    title: "Dental Implants",
    href: "/dental-implants",
    text: "For replacing missing teeth with a long-term solution that restores confidence and function.",
  },
  {
    title: "Invisalign",
    href: "/invisalign",
    text: "For adults who want straighter teeth without traditional braces.",
  },
  {
    title: "Smile Makeovers",
    href: "/costs-finance",
    text: "For patients who want a complete plan across whitening, veneers, crowns, or alignment.",
  },
  {
    title: "Teeth Whitening",
    href: "/costs-finance",
    text: "For patients wanting a brighter smile before weddings, events, or professional moments.",
  },
  {
    title: "Crowns & Restorations",
    href: "/costs-finance",
    text: "For rebuilding damaged, worn, cracked, or heavily filled teeth.",
  },
].map((card) => (
  <a
    key={card.title}
    href={card.href}
    className="rounded-3xl border border-[#e7dfd3] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
  >
    <h3 className="text-xl font-semibold">{card.title}</h3>

    <p className="mt-4 leading-7 text-slate-600">{card.text}</p>
  </a>
))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-white px-6 pb-20 pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Smile Transformations
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Real dentistry changes more than teeth.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Cosmetic and restorative dentistry can improve confidence,
              comfort, function, and the way patients feel about themselves
              every day.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-[#f5f5f5] shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={
                      "/images/enhance-dental/result-" + item + ".jpg"
                    }
                    alt="Smile transformation"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-lg font-semibold">
                    Smile Transformation {item}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Cosmetic treatment designed to create a brighter, more
                    natural and balanced smile outcome.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-0">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight">
            A simple path to a better smile.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Book a consultation",
              icon: CalendarDays,
            },
            {
              title: "Get a smile assessment",
              icon: ScanFace,
            },
            {
              title: "Receive a treatment plan",
              icon: ClipboardCheck,
            },
            {
              title: "Start your transformation",
              icon: Sparkles,
            },
          ].map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-[#d7e7f2] bg-[#f8fbff] p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b70b7]/10">
                  <Icon className="h-7 w-7 text-[#0b70b7]" />
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#0b70b7]">
                  Step {index + 1}
                </p>

                <p className="mt-3 text-xl font-semibold">
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white px-6 pb-20 pt-0">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Enquire
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Book a cosmetic dental consultation.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Tell us what you would like to improve and we will help guide
              you toward the right treatment pathway.
            </p>
          </div>

          <form
  action="https://formspree.io/f/meedjlwe"
  method="POST"
  className="rounded-3xl border border-[#e7dfd3] bg-[#fbfaf7] p-8 shadow-sm"
>
  <div className="grid gap-5">
    <input type="text" name="name" placeholder="Full name" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
    <input type="tel" name="phone" placeholder="Phone number" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
    <input type="email" name="email" placeholder="Email address" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />

    <select name="treatment" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4">
      <option value="">What would you like to find out about?</option>
      <option>Veneers</option>
      <option>Dental Implants</option>
      <option>Invisalign</option>
      <option>Smile Makeover</option>
      <option>Teeth Whitening</option>
    </select>

    <textarea name="message" placeholder="What would you like to improve?" required className="min-h-32 rounded-2xl border border-slate-300 bg-white px-4 py-4" />

    <button type="submit" className="rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]">
      Submit Enquiry
    </button>
  </div>
</form>
        </div>
      </section>
      <Footer />
</main>
    
  );
}