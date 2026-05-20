import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Invisalign Melbourne | Clear Aligner Consultation",
  description:
    "Explore Invisalign treatment options, clear aligner suitability, consultation information, FAQs, and smile alignment pathways.",
};

export default function InvisalignPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Invisalign
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              Straighter teeth without traditional braces.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Invisalign is commonly explored by adults wanting a discreet way
              to improve tooth alignment while keeping treatment flexible,
              modern, and lifestyle-friendly.
            </p>

            <a
              href="#invisalign-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Invisalign Consultation
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/invisalign-1.jpg"
                alt="Invisalign smile inspiration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS INVISALIGN */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">What is Invisalign?</h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign uses a series of clear, removable aligners designed to
            gradually move teeth into improved alignment. It is often considered
            by patients who want a less visible alternative to traditional
            braces.
          </p>
        </div>
      </section>

      {/* WHY PATIENTS CONSIDER INVISALIGN */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why patients consider Invisalign
          </h2>

          <ul className="mt-6 grid gap-4 text-slate-600">
            <li>• Improve tooth alignment</li>
            <li>• Explore a discreet alternative to braces</li>
            <li>• Improve smile balance</li>
            <li>• Support cosmetic smile planning</li>
            <li>• Use removable aligners for everyday flexibility</li>
          </ul>
        </div>
      </section>

      {/* WHO MAY SUIT */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">Who may Invisalign suit?</h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign may be explored by patients with mild to moderate
            alignment concerns, spacing, crowding, or smile balance issues.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Suitability depends on tooth position, bite, oral health, treatment
            goals, and the type of movement required.
          </p>
        </div>
      </section>

      {/* INVISALIGN GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Clear Aligner Planning
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Invisalign treatment is built around planning, fit, and progress.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of clear aligner treatment,
            consultation, and planning concepts. Individual treatment options and
            outcomes vary between patients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/invisalign-1.jpg",
              title: "Clear Aligner Lifestyle",
              text: "Many patients consider Invisalign because the aligners are clear, removable, and designed around everyday life.",
            },
            {
              image: "/images/enhance-dental/invisalign-2.jpg",
              title: "Digital Smile Planning",
              text: "Consultation helps patients understand alignment goals, possible movements, and expected treatment pathways.",
            },
            {
              image: "/images/enhance-dental/invisalign-3.jpg",
              title: "Aligner Detail",
              text: "Clear aligners are designed to fit closely over the teeth and guide movement progressively over time.",
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

      {/* PROCESS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What is involved in the Invisalign process?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Consultation and smile assessment",
              "Digital scan and treatment planning",
              "Clear aligner fitting and instructions",
              "Progress reviews and refinement",
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

      {/* MID CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore whether clear aligners may suit your smile.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation helps patients understand alignment options, treatment
            timing, lifestyle considerations, and whether Invisalign may be
            suitable.
          </p>

          <a
            href="#invisalign-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Book Invisalign Consultation
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "Is Invisalign noticeable?",
              answer:
                "Invisalign aligners are clear and designed to be less noticeable than traditional braces. Visibility can vary depending on fit, lighting, and individual circumstances.",
            },
            {
              question: "How long does Invisalign treatment take?",
              answer:
                "Treatment timeframes vary depending on the amount of tooth movement required, patient compliance, and the treatment plan discussed during consultation.",
            },
            {
              question: "Can I remove the aligners?",
              answer:
                "Clear aligners are removable for eating, drinking, brushing, and flossing. Patients are usually advised to wear them for the recommended daily time to support treatment progress.",
            },
            {
              question: "How do I know if Invisalign is suitable for me?",
              answer:
                "Suitability depends on tooth alignment, bite, oral health, treatment goals, and the type of correction required.",
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

      {/* RELATED TREATMENT LINKS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Explore related treatment pathways
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/veneers"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Explore Veneers
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

      {/* MELBOURNE INVISALIGN LOCATIONS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Melbourne Invisalign Locations
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Explore Invisalign consultations across Melbourne
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Explore Invisalign consultation information for patients across
            selected Melbourne suburbs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/toorak-invisalign"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Toorak Invisalign
            </a>

            <a
              href="/brighton-invisalign"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Brighton Invisalign
            </a>

            <a
              href="/south-yarra-invisalign"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              South Yarra Invisalign
            </a>
          </div>
        </div>
      </section>

      {/* INVISALIGN AUTHORITY ARTICLES */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Invisalign Advice
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Learn more about Invisalign
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Explore helpful information about Invisalign costs, treatment
            timelines, clear aligners, braces comparisons, and consultation
            planning in Melbourne.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <a
              href="/how-much-is-invisalign-melbourne"
              className="group rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-6 transition hover:bg-white hover:shadow-sm"
            >
              <p className="text-xl font-semibold text-slate-950 group-hover:text-[#0b376d]">
                How Much Is Invisalign?
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Learn what can influence Invisalign costs, treatment complexity,
                aligner planning, and payment considerations.
              </p>
            </a>

            <a
              href="/invisalign-vs-braces"
              className="group rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-6 transition hover:bg-white hover:shadow-sm"
            >
              <p className="text-xl font-semibold text-slate-950 group-hover:text-[#0b376d]">
                Invisalign vs Braces
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Compare clear aligners with traditional braces and understand
                key treatment differences.
              </p>
            </a>

            <a
              href="/how-long-does-invisalign-take"
              className="group rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-6 transition hover:bg-white hover:shadow-sm"
            >
              <p className="text-xl font-semibold text-slate-950 group-hover:text-[#0b376d]">
                How Long Does Invisalign Take?
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Understand what can affect Invisalign treatment timelines,
                aligner wear, refinements, and planning.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="invisalign-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Invisalign Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Find out whether Invisalign may suit your smile.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Tell us what you would like to improve and we will help guide you
              toward suitable next steps.
            </p>
          </div>

          <form
            action="https://formspree.io/f/meedjlwe"
            method="POST"
            className="rounded-3xl border border-[#e7dfd3] bg-[#fbfaf7] p-8 shadow-sm"
          >
            <input type="hidden" name="page" value="Invisalign Page" />
            <input type="hidden" name="treatment" value="Invisalign" />
            <input type="hidden" name="lead_source" value="invisalign-main-page" />

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
                name="selected_treatment"
                required
                defaultValue="Invisalign"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-4"
              >
                <option value="Invisalign">Invisalign</option>
                <option value="Veneers">Veneers</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Smile Makeover">Smile Makeover</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us what you would like to improve"
                required
                className="min-h-32 rounded-2xl border border-slate-300 bg-white px-4 py-4"
              />

              <button
                type="submit"
                className="rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
              >
                Submit Invisalign Enquiry
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