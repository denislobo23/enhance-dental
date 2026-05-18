import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Dental Implants Melbourne | Implant Consultation",
  description:
    "Explore dental implant treatment pathways, implant suitability, consultation information, FAQs, and smile restoration options.",
};

export default function DentalImplantsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
        <Header />
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Dental Implants
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              Restore comfort, confidence, and your smile.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Dental implants are commonly explored by patients wanting a
              long-term option for replacing missing teeth while maintaining a
              natural appearance and everyday function.
            </p>

            <a
              href="#implants-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Implant Consultation
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/implants-1.jpg"
                alt="Dental implant smile inspiration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ARE IMPLANTS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What are dental implants?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Dental implants are artificial tooth root structures placed into the
            jaw to support replacement teeth. They are commonly used to restore
            appearance, chewing function, and smile confidence after tooth loss.
          </p>
        </div>
      </section>

      {/* WHY PATIENTS CONSIDER IMPLANTS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why patients consider implants
          </h2>

          <ul className="mt-6 grid gap-4 text-slate-600">
            <li>• Replace missing teeth</li>
            <li>• Improve smile confidence</li>
            <li>• Restore chewing function</li>
            <li>• Explore long-term restorative options</li>
            <li>• Improve comfort and stability</li>
          </ul>
        </div>
      </section>

      {/* WHO MAY SUIT */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Who may dental implants suit?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Dental implants may be explored by patients missing one or more
            teeth who are looking for a stable and natural-looking restorative
            option.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Suitability depends on factors including oral health, bone support,
            medical history, lifestyle considerations, and treatment goals
            discussed during consultation.
          </p>
        </div>
      </section>

      {/* WHAT IMPLANTS CAN LOOK LIKE */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Natural-looking smile restoration
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Modern implant dentistry aims to create restorations that feel
            balanced, comfortable, and natural in appearance.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Patients often want to restore confidence and function while keeping
            the final result subtle and suited to their smile.
          </p>
        </div>
      </section>

      {/* IMPLANTS GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Implant Consultation & Planning
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Restorative treatment involves both planning and precision.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of implant consultation,
            planning, and restorative concepts. Individual treatment options and
            outcomes vary between patients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/implants-1.jpg",
              title: "Smile Confidence",
              text: "Patients commonly explore implants to restore confidence, comfort, and everyday function after tooth loss.",
            },
            {
              image: "/images/enhance-dental/implants-2.jpg",
              title: "Consultation & Assessment",
              text: "Consultation helps patients understand suitable treatment pathways, planning, and possible restorative options.",
            },
            {
              image: "/images/enhance-dental/implants-3.jpg",
              title: "Implant Planning",
              text: "Careful planning and assessment are important parts of modern implant dentistry and restorative treatment.",
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
            What is involved in the implant process?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Consultation and assessment",
              "Imaging and treatment planning",
              "Implant placement and healing",
              "Final restoration and review",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-[#d7e7f2] bg-white p-5"
              >
                <p className="text-sm font-semibold text-[#0b70b7]">
                  Step {index + 1}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore restorative options for your smile.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation helps patients understand implant pathways, treatment
            considerations, timelines, and what may be possible for their
            individual situation.
          </p>

          <a
            href="#implants-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Book Implant Consultation
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "Do implants look natural?",
              answer:
                "Modern implant restorations are commonly designed to look balanced, functional, and suited to the patient’s smile and facial features.",
            },
            {
              question: "How long does implant treatment take?",
              answer:
                "Treatment timeframes vary depending on healing, planning, and the complexity of the case. Consultation helps explain expected stages and timelines.",
            },
            {
              question: "Are dental implants painful?",
              answer:
                "Patients commonly want to understand comfort levels before proceeding. Treatment experiences vary between individuals and are discussed during consultation.",
            },
            {
              question: "How do I know if implants are suitable for me?",
              answer:
                "Suitability depends on oral health, bone support, medical considerations, and the restorative outcome being explored.",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="rounded-[2rem] border border-[#e7dfd3] bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold">
                {item.question}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.answer}
              </p>
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
              href="/veneers"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Explore Veneers
            </a>

            <a
              href="/invisalign"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Explore Invisalign
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

      {/* ENQUIRY */}
      <section id="implants-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Dental Implant Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Find out whether dental implants may suit your situation.
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
            <input
              type="hidden"
              name="page"
              value="Dental Implants Page"
            />

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
                defaultValue="Dental Implants"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-4"
              >
                <option value="Dental Implants">
                  Dental Implants
                </option>
                <option value="Veneers">Veneers</option>
                <option value="Invisalign">Invisalign</option>
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
                Submit Implant Enquiry
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