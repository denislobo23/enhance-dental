import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Dental Costs & Finance Melbourne | Treatment Pathways",
  description:
    "Explore cosmetic dentistry costs, staged treatment pathways, payment considerations, FAQs, and consultation options.",
};

export default function CostsFinancePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
        <Header />
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Costs & Finance
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              A confident smile should feel clear and achievable.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Cosmetic and restorative dental treatment can vary depending on
              your goals, treatment needs, timing, and chosen pathway. The right
              consultation helps make the options clearer.
            </p>

            <a
              href="#finance-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Discuss Treatment Options
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/finance-1.jpg"
                alt="Dental treatment planning consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY COSTS VARY */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why dental treatment costs can vary
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Treatment costs can vary because every patient starts from a
            different position. The number of teeth involved, treatment
            complexity, materials, oral health, treatment timing, and desired
            outcome can all influence the final pathway.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            That is why consultation and treatment planning are important before
            making financial decisions. A personalised plan helps patients
            understand what may be involved before proceeding.
          </p>
        </div>
      </section>

      {/* COMMON COST FACTORS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Common factors that influence treatment planning
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "The treatment being considered, such as veneers, Invisalign, implants, whitening, or restorative dentistry.",
              "The number of teeth involved and whether treatment is simple or more comprehensive.",
              "The patient’s oral health, bite, existing restorations, and treatment history.",
              "The materials, planning requirements, appointments, and clinical pathway selected.",
              "Whether treatment can be staged over time to suit priorities, lifestyle, or budget.",
              "The patient’s desired outcome, timing, and comfort level before proceeding.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#d7e7f2] bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCE GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Flexible Treatment Pathways
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            The right plan should feel practical, clear, and personal.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of consultation, treatment
            planning, and patient guidance. Individual options and costs vary
            between patients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/finance-1.jpg",
              title: "Treatment Discussion",
              text: "Consultation helps patients understand suitable treatment options before making decisions.",
            },
            {
              image: "/images/enhance-dental/finance-2.jpg",
              title: "Clear Treatment Planning",
              text: "A clear plan helps explain possible pathways, timing, priorities, and practical considerations.",
            },
            {
              image: "/images/enhance-dental/finance-3.jpg",
              title: "Comfortable Next Steps",
              text: "Patients often want to feel calm, informed, and comfortable before choosing the next step.",
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

      {/* STAGED TREATMENT */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Can treatment be staged over time?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            In many situations, treatment planning can be phased over time to
            suit different goals, schedules, and financial considerations. Some
            patients choose to progress treatment gradually around work
            commitments, travel plans, family priorities, or personal comfort
            levels.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Consultation and treatment planning are designed to help patients
            explore a pathway that feels practical, comfortable, and achievable
            for their circumstances.
          </p>
        </div>
      </section>

      {/* TREATMENT PATHWAYS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Treatment pathways commonly discussed
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cosmetic Dentistry",
                text: "Veneers, whitening, smile makeovers, and other cosmetic pathways may vary depending on smile goals and complexity.",
              },
              {
                title: "Clear Aligners",
                text: "Invisalign and aligner treatment can vary based on tooth movement, treatment duration, and individual suitability.",
              },
              {
                title: "Restorative Dentistry",
                text: "Implants, crowns, and restorative pathways can involve different planning stages, materials, and treatment timelines.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d7e7f2] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
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
            Get clarity before making a treatment decision.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Cosmetic dentistry is personal. A consultation helps patients
            understand possible pathways, timing, priorities, and practical next
            steps before committing.
          </p>

          <a
            href="#finance-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Make an Enquiry
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "How much does cosmetic dentistry cost?",
              answer:
                "Costs vary depending on the treatment type, number of teeth involved, treatment complexity, materials, and the individual plan discussed during consultation.",
            },
            {
              question: "Can I get a price before consultation?",
              answer:
                "General cost guidance may be possible, but accurate treatment planning usually requires consultation because every patient’s needs and goals are different.",
            },
            {
              question: "Are payment plans available?",
              answer:
                "Payment options and staged treatment pathways may be discussed during consultation, depending on the provider, treatment type, and individual circumstances.",
            },
            {
              question: "Can treatment be staged instead of done all at once?",
              answer:
                "In many situations, treatment may be planned in stages to suit timing, comfort levels, priorities, and financial considerations.",
            },
            {
              question: "Why do prices vary between clinics?",
              answer:
                "Pricing can vary due to clinician experience, treatment complexity, materials, technology, planning requirements, and the level of care involved.",
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
            Explore treatment information
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/veneers"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Veneers
            </a>

            <a
              href="/dental-implants"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Dental Implants
            </a>

            <a
              href="/invisalign"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Invisalign
            </a>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="finance-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Costs & Finance Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Ask about treatment pathways and practical next steps.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Tell us what you are considering and we will help guide you toward
              suitable next steps.
            </p>
          </div>

          <form
            action="https://formspree.io/f/meedjlwe"
            method="POST"
            className="rounded-3xl border border-[#e7dfd3] bg-[#fbfaf7] p-8 shadow-sm"
          >
            <input type="hidden" name="page" value="Costs Finance Page" />

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
                defaultValue="Costs & Finance"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-4"
              >
                <option value="Costs & Finance">Costs & Finance</option>
                <option value="Veneers">Veneers</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Invisalign">Invisalign</option>
                <option value="Smile Makeover">Smile Makeover</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
              </select>

              <textarea
                name="message"
                placeholder="What treatment are you considering?"
                required
                className="min-h-32 rounded-2xl border border-slate-300 bg-white px-4 py-4"
              />

              <button
                type="submit"
                className="rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="text-sm leading-7 text-slate-500">
          Treatment suitability, options, fees, payment options, and outcomes
          vary between individuals and providers. Consultation with a qualified
          dental provider is required before proceeding with any treatment.
          Images used on this page are illustrative and are not intended to
          represent guaranteed outcomes.
        </p>
      </section>
      <Footer />
    </main>
  );
}