import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Veneers Cost Melbourne | Cosmetic Veneers Guide",
  description:
    "Learn what can influence veneers cost in Melbourne, treatment planning, staged options, and cosmetic consultation considerations.",
};

export default function VeneersCostMelbournePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Veneers Cost Melbourne
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              What can affect the cost of veneers in Melbourne?
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Veneer costs can vary depending on the number of teeth involved,
              materials, smile goals, treatment complexity, and the planning
              required.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              A consultation helps patients understand suitable options,
              possible pathways, and whether treatment may be staged over time.
            </p>

            <a
              href="#cost-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Ask About Veneers
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/finance-2.jpg"
                alt="Veneers cost consultation Melbourne"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why veneers pricing can vary
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Veneers are not a one-size-fits-all treatment. The cost can vary
            because each patient has different teeth, smile goals, oral health,
            bite considerations, and cosmetic expectations.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Some patients may only be exploring a small cosmetic enhancement,
            while others may need a more comprehensive smile makeover involving
            several teeth or additional treatment planning.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Common factors that influence veneers cost
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "The number of veneers being considered.",
              "Whether porcelain or composite options are discussed.",
              "The complexity of smile planning and tooth preparation.",
              "The patient’s bite, oral health, and existing dental work.",
              "Whether whitening, Invisalign, crowns, or other treatments are also involved.",
              "Whether treatment can be staged over time to suit priorities and budget.",
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

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Treatment Planning
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Cost clarity starts with a proper smile assessment.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of cosmetic consultation,
            smile planning, and treatment discussion concepts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/finance-1.jpg",
              title: "Treatment Discussion",
              text: "Consultation helps patients understand possible options before making decisions.",
            },
            {
              image: "/images/enhance-dental/veneers-2.jpg",
              title: "Smile Planning",
              text: "Veneers planning may involve shade, shape, symmetry, proportion, and facial balance.",
            },
            {
              image: "/images/enhance-dental/finance-3.jpg",
              title: "Practical Pathways",
              text: "Some treatment plans may be staged over time depending on suitability and priorities.",
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

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Can veneers treatment be staged?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            In some situations, cosmetic treatment planning may be staged over
            time to suit comfort levels, priorities, schedules, and financial
            considerations.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            For example, some patients may begin with whitening or alignment
            before considering veneers, while others may plan a more complete
            cosmetic pathway from the beginning.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "How much do veneers cost in Melbourne?",
              answer:
                "Veneers pricing can vary depending on the number of teeth involved, materials, treatment complexity, planning requirements, and the individual provider.",
            },
            {
              question: "Can I get an exact veneers price online?",
              answer:
                "General guidance may be possible, but an accurate treatment plan usually requires consultation because every patient’s teeth and goals are different.",
            },
            {
              question: "Are cheaper veneers always a good idea?",
              answer:
                "Cost is only one factor. Patients should also consider suitability, planning, materials, maintenance, aesthetics, and long-term care.",
            },
            {
              question: "Can veneers be part of a smile makeover?",
              answer:
                "Yes. Veneers may sometimes be considered alongside whitening, Invisalign, crowns, or other cosmetic and restorative treatments.",
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

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore veneers options before making a decision.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            A consultation can help clarify treatment suitability, likely
            pathways, cost considerations, and realistic cosmetic goals.
          </p>

          <a
            href="#cost-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Ask About Veneers
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Related Veneers Pages
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Explore veneers consultations across Melbourne
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/veneers" className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]">
              Veneers
            </a>
            <a href="/toorak-veneers" className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]">
              Toorak Veneers
            </a>
            <a href="/brighton-veneers" className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]">
              Brighton Veneers
            </a>
            <a href="/south-yarra-veneers" className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]">
              South Yarra Veneers
            </a>
            <a href="/malvern-veneers" className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]">
              Malvern Veneers
            </a>
            <a href="/kew-veneers" className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]">
              Kew Veneers
            </a>
          </div>
        </div>
      </section>

      <section id="cost-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Veneers Cost Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Ask about veneers treatment pathways.
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
            <input
              type="hidden"
              name="page"
              value="Veneers Cost Melbourne Page"
            />

            <div className="grid gap-5">
              <input type="text" name="name" placeholder="Full name" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
              <input type="tel" name="phone" placeholder="Phone number" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
              <input type="email" name="email" placeholder="Email address" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />

              <textarea
                name="message"
                placeholder="Tell us what you would like to understand about veneers"
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

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="text-sm leading-7 text-slate-500">
          Treatment suitability, options, costs, timeframes, fees, payment
          options, and outcomes vary between individuals and providers.
          Consultation with a qualified dental provider is required before
          proceeding with any treatment.
        </p>
      </section>

      <Footer />
    </main>
  );
}