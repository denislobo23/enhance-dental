import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Veneers Melbourne | Cosmetic Veneers Consultation",
  description:
    "Explore veneer treatment options, smile design concepts, suitability, FAQs, and cosmetic dentistry pathways.",
};

export default function VeneersPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Veneers
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              A confident smile can change how you feel every day.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Veneers are designed for patients wanting a brighter, more
              balanced, and more confident smile while still looking natural.
            </p>

            <a
              href="#veneers-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Veneers Consultation
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/result-1.jpg"
                alt="Veneers smile inspiration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ARE VENEERS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">What are veneers?</h2>

          <p className="mt-6 leading-8 text-slate-600">
            Veneers are thin custom-designed coverings placed over the front
            surface of teeth to improve colour, shape, symmetry, and overall
            smile appearance.
          </p>
        </div>
      </section>

      {/* WHY PATIENTS CONSIDER VENEERS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why patients consider veneers
          </h2>

          <ul className="mt-6 grid gap-4 text-slate-600">
            <li>• Improve smile confidence</li>
            <li>• Create a whiter smile</li>
            <li>• Improve tooth shape and balance</li>
            <li>• Address worn or chipped teeth</li>
            <li>• Achieve a more polished appearance</li>
          </ul>
        </div>
      </section>

      {/* WHO VENEERS MAY SUIT */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">Who may veneers suit?</h2>

          <p className="mt-6 leading-8 text-slate-600">
            Veneers may be explored by patients who want to improve the
            appearance of teeth that are stained, worn, chipped, uneven, mildly
            spaced, or visually unbalanced.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Suitability depends on oral health, bite, tooth structure, cosmetic
            goals, and the treatment pathway recommended during consultation.
          </p>
        </div>
      </section>

      {/* RESULTS EXPECTATIONS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What can veneers look like?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Veneers can be designed to suit many different smile styles
            depending on the patient’s goals, facial features, and desired
            outcome.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Some patients prefer a very natural enhancement, while others want a
            brighter and more noticeable cosmetic transformation. Careful
            planning and consultation help guide the style, shape, and overall
            smile outcome.
          </p>
        </div>
      </section>

      {/* VENEERS GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Veneer Smile Inspiration
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Different patients want different smile styles.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of cosmetic smile styles and
            consultation concepts. Individual treatment options and outcomes vary
            and should be discussed with a qualified dental provider.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/veneers-1.jpg",
              title: "Natural Smile Style",
              text: "A softer cosmetic direction for patients who want their smile to look refreshed rather than overdone.",
            },
            {
              image: "/images/enhance-dental/veneers-2.jpg",
              title: "Smile Design Discussion",
              text: "Consultation helps patients explore shape, shade, balance, and what feels right for their face.",
            },
            {
              image: "/images/enhance-dental/veneers-3.jpg",
              title: "Shade & Planning",
              text: "Colour, proportion, and planning all contribute to a cosmetic result that feels considered and personal.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-[#d7e7f2] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NATURAL LOOKING OUTCOMES */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Natural-looking outcomes matter
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Most patients are not looking for an artificial “perfect” smile.
            They want a result that feels confident, balanced, and suited to them
            personally.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What is involved in the veneers process?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Consultation and smile assessment",
              "Discussion around smile goals and options",
              "Treatment planning and preparation",
              "Placement and review of veneers",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-[#d7e7f2] bg-white p-5"
              >
                <p className="text-sm font-semibold text-[#0b70b7]">
                  Step {index + 1}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID PAGE CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore what may be possible for your smile.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Cosmetic dentistry is highly personalised. Consultation helps
            patients understand possible treatment pathways, smile styles, and
            realistic options suited to their goals.
          </p>

          <a
            href="#veneers-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Book Veneers Consultation
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "Will veneers look natural?",
              answer:
                "Most patients want veneers that feel balanced, natural, and suited to their face rather than overly artificial. Smile planning and careful consultation are important parts of the process.",
            },
            {
              question: "How long can veneers last?",
              answer:
                "Longevity varies depending on the patient, materials used, oral hygiene, and ongoing care. Treatment recommendations are discussed during consultation.",
            },
            {
              question: "Does the process hurt?",
              answer:
                "Patients commonly want to understand comfort levels before proceeding. Treatment experiences can vary, and consultation helps explain what may be involved.",
            },
            {
              question: "How do I know if veneers are suitable for me?",
              answer:
                "Suitability depends on smile goals, oral health, bite considerations, and the type of cosmetic outcome being explored.",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="rounded-[2rem] border border-[#e7dfd3] bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold">{item.question}</h3>

              <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Explore related treatment pathways
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/invisalign"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Explore Invisalign
            </a>

            <a
              href="/dental-implants"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Explore Dental Implants
            </a>

            <a
              href="/costs-finance"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Costs & Finance
            </a>
          </div>
        </div>
      </section>

      {/* MELBOURNE VENEERS LOCATIONS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Melbourne Veneers Locations
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Explore veneers consultations across Melbourne
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Explore cosmetic veneers consultation information for patients
            across Melbourne’s premium suburbs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/toorak-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Toorak Veneers
            </a>

            <a
              href="/brighton-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Brighton Veneers
            </a>

            <a
              href="/south-yarra-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              South Yarra Veneers
            </a>

            <a
              href="/malvern-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Malvern Veneers
            </a>

            <a
              href="/kew-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Kew Veneers
            </a>
          </div>
        </div>
      </section>

      {/* VENEERS AUTHORITY ARTICLES */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Veneers Advice
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Learn more about veneers
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Explore helpful information about veneer longevity, pricing factors,
            treatment planning, and cosmetic dentistry considerations in
            Melbourne.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/how-long-do-veneers-last"
              className="group rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-6 transition hover:bg-white hover:shadow-sm"
            >
              <p className="text-xl font-semibold text-slate-950 group-hover:text-[#0b376d]">
                How Long Do Veneers Last?
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Understand the factors that may influence veneer longevity,
                maintenance, oral care, and long-term treatment planning.
              </p>
            </a>

            <a
              href="/veneers-cost-melbourne"
              className="group rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-6 transition hover:bg-white hover:shadow-sm"
            >
              <p className="text-xl font-semibold text-slate-950 group-hover:text-[#0b376d]">
                Veneers Cost Melbourne
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Learn about the factors that can affect veneer pricing,
                consultation planning, materials, and cosmetic treatment options.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* VENEERS ENQUIRY */}
      <section id="veneers-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Veneers Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Find out if veneers may be right for your smile.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Tell us what you would like to improve and we will help guide you
              toward the next step.
            </p>
          </div>

          <form
            action="https://formspree.io/f/meedjlwe"
            method="POST"
            className="rounded-3xl border border-[#e7dfd3] bg-[#fbfaf7] p-8 shadow-sm"
          >
            <input type="hidden" name="page" value="Veneers Page" />

            <div className="grid gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                className="rounded-2xl border border-slate-300 bg-white px-4 py-4"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                className="rounded-2xl border border-slate-300 bg-white px-4 py-4"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="rounded-2xl border border-slate-300 bg-white px-4 py-4"
              />

              <select
                name="treatment"
                required
                defaultValue="Veneers"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-4"
              >
                <option value="Veneers">Veneers</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Invisalign">Invisalign</option>
                <option value="Smile Makeover">Smile Makeover</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
              </select>

              <textarea
                name="message"
                placeholder="What would you like to improve about your smile?"
                required
                className="min-h-32 rounded-2xl border border-slate-300 bg-white px-4 py-4"
              />

              <button
                type="submit"
                className="rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
              >
                Submit Veneers Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="text-sm leading-7 text-slate-500">
          Treatment suitability, options, and outcomes vary between individuals.
          Consultation with a qualified dental provider is required before
          proceeding with any treatment. Images used on this page are
          illustrative and are not intended to represent guaranteed outcomes.
        </p>
      </section>

      <Footer />
    </main>
  );
}