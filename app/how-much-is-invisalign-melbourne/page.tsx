import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "How Much Is Invisalign Melbourne | Invisalign Cost Guide",
  description:
    "Explore the factors that can influence Invisalign treatment costs in Melbourne, including treatment complexity, aligner planning, and consultation considerations.",
};

export default function InvisalignCostPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Invisalign Cost Melbourne
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              How much is Invisalign in Melbourne?
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Invisalign treatment costs can vary depending on smile goals,
              treatment complexity, aligner planning, and the overall treatment
              pathway recommended during consultation.
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
                alt="Invisalign Melbourne"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Invisalign treatment costs can vary significantly
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign is a personalised orthodontic treatment system designed
            to gradually move teeth using custom clear aligners. Because every
            smile is different, treatment costs may vary depending on the type
            of movement required and the complexity of the treatment plan.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Consultation helps determine what may be involved, how long
            treatment could take, and what options may be suitable for the
            patient’s goals.
          </p>
        </div>
      </section>

      {/* WHAT AFFECTS COST */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What can affect Invisalign costs?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Treatment complexity",
                text: "More complex tooth movement or bite correction may require longer treatment planning and additional aligners.",
              },
              {
                title: "Treatment duration",
                text: "The estimated length of treatment can influence overall planning and aligner requirements.",
              },
              {
                title: "Refinements and adjustments",
                text: "Some patients may require additional refinement aligners depending on treatment progress and goals.",
              },
              {
                title: "Smile goals",
                text: "Cosmetic preferences, alignment objectives, and treatment expectations may all influence planning.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d7e7f2] bg-white p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CONSULTATION MATTERS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why consultation is important
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign treatment planning is highly individual. Consultation
            allows patients to discuss smile concerns, alignment goals,
            suitability, and possible treatment pathways with a qualified dental
            provider.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Factors such as oral health, bite position, spacing, crowding, and
            cosmetic preferences may all influence treatment recommendations.
          </p>
        </div>
      </section>

      {/* INVISALIGN VS BRACES */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Invisalign vs traditional braces
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign uses removable clear aligners, while traditional braces
            use fixed brackets and wires. Treatment suitability depends on the
            type of tooth movement required, lifestyle preferences, and overall
            orthodontic goals.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Some patients prefer Invisalign because of its discreet appearance
            and removable design, while others may be better suited to different
            orthodontic approaches.
          </p>
        </div>
      </section>

      {/* PAYMENT OPTIONS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Are payment plans available?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Some patients explore payment plan options to help manage treatment
            costs over time. Available payment arrangements and suitability can
            vary depending on the provider and treatment pathway.
          </p>

          <a
            href="/costs-finance"
            className="mt-8 inline-flex rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
          >
            Explore Costs & Finance
          </a>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Learn more about Invisalign
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/invisalign"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Invisalign Treatment
            </a>

            <a
              href="/veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Explore Veneers
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "Is Invisalign more expensive than braces?",
              answer:
                "Treatment costs can vary depending on the complexity of treatment, aligner planning, and the type of orthodontic movement involved.",
            },
            {
              question: "How long does Invisalign treatment take?",
              answer:
                "Treatment duration varies between patients depending on tooth movement requirements, bite considerations, and treatment goals.",
            },
            {
              question: "Can Invisalign treat complex cases?",
              answer:
                "Suitability depends on the individual patient and the type of orthodontic correction required.",
            },
            {
              question: "Do I need a consultation first?",
              answer:
                "Consultation helps determine suitability, treatment complexity, smile goals, and possible treatment pathways.",
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

      {/* CTA */}
      <section
        id="invisalign-enquiry"
        className="mx-auto max-w-5xl px-6 pb-12"
      >
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore Invisalign treatment options in Melbourne.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation can help patients understand possible treatment
            pathways, aligner suitability, treatment planning, and cosmetic
            orthodontic options.
          </p>

          <a
            href="/invisalign"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Explore Invisalign
          </a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="text-sm leading-7 text-slate-500">
          Treatment suitability, options, duration, and outcomes vary between
          individuals. Consultation with a qualified dental provider is required
          before proceeding with any treatment. Information on this page is
          general in nature and does not replace professional advice.
        </p>
      </section>

      <Footer />
    </main>
  );
}