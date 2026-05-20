import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Invisalign vs Braces Melbourne | Orthodontic Options",
  description:
    "Compare Invisalign and traditional braces, including treatment differences, appearance, comfort, lifestyle considerations, and consultation pathways.",
};

export default function InvisalignVsBracesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Invisalign vs Braces
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              Invisalign or braces: which option may suit you?
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Invisalign and traditional braces are both designed to improve
              tooth alignment, but treatment pathways, appearance, comfort, and
              suitability can vary between patients.
            </p>

            <a
              href="#orthodontic-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Explore Invisalign Options
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/invisalign-2.jpg"
                alt="Invisalign vs braces"
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
            Both Invisalign and braces aim to improve alignment
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign and traditional braces are orthodontic treatment systems
            designed to move teeth into improved positions over time. The most
            suitable approach depends on the patient’s goals, bite
            considerations, alignment complexity, and lifestyle preferences.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Consultation helps determine which treatment pathway may be most
            appropriate for the individual patient.
          </p>
        </div>
      </section>

      {/* KEY DIFFERENCES */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Key differences between Invisalign and braces
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Appearance",
                text: "Invisalign uses clear removable aligners, while braces use fixed brackets and wires attached to the teeth.",
              },
              {
                title: "Removability",
                text: "Aligners can be removed for eating and cleaning, while braces remain fixed during treatment.",
              },
              {
                title: "Lifestyle considerations",
                text: "Some patients prefer Invisalign because of its discreet appearance and flexibility in social or professional settings.",
              },
              {
                title: "Treatment suitability",
                text: "Certain orthodontic cases may respond differently depending on the type and complexity of movement required.",
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

      {/* INVISALIGN BENEFITS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why some patients explore Invisalign
          </h2>

          <ul className="mt-6 grid gap-4 text-slate-600">
            <li>• Clear aligner appearance</li>
            <li>• Removable aligners for meals and cleaning</li>
            <li>• Reduced visibility in social settings</li>
            <li>• Digital treatment planning</li>
            <li>• Cosmetic-focused orthodontic pathway</li>
          </ul>
        </div>
      </section>

      {/* BRACES BENEFITS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why some patients still choose braces
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Traditional braces remain a widely used orthodontic option and may
            be recommended in certain cases depending on bite concerns, movement
            complexity, and treatment goals.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Orthodontic recommendations vary between individuals, and
            consultation helps determine what treatment approach may be most
            suitable.
          </p>
        </div>
      </section>

      {/* TREATMENT TIME */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Does treatment time differ?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Treatment time varies depending on the complexity of tooth movement,
            patient compliance, bite correction needs, and the overall treatment
            pathway recommended during consultation.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Some patients complete Invisalign treatment relatively quickly,
            while others may require longer orthodontic management depending on
            their smile goals.
          </p>
        </div>
      </section>

      {/* COSTS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Cost considerations
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Orthodontic treatment costs can vary depending on treatment
            complexity, aligner planning, treatment duration, and individual
            smile requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/how-much-is-invisalign-melbourne"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Invisalign Cost Guide
            </a>

            <a
              href="/costs-finance"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Costs & Finance
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Learn more about Invisalign
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/invisalign"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Invisalign Treatment
            </a>

            <a
              href="/veneers"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
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
              question: "Is Invisalign less noticeable than braces?",
              answer:
                "Many patients prefer Invisalign because the clear aligners are designed to be more discreet than traditional braces.",
            },
            {
              question: "Can Invisalign treat complex orthodontic issues?",
              answer:
                "Suitability depends on the type of orthodontic movement and the individual treatment goals being explored.",
            },
            {
              question: "Are braces faster than Invisalign?",
              answer:
                "Treatment duration varies significantly between patients and depends on treatment complexity and compliance.",
            },
            {
              question: "How do I know which option is right for me?",
              answer:
                "Consultation helps determine suitability, smile goals, bite considerations, and treatment planning options.",
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
        id="orthodontic-enquiry"
        className="mx-auto max-w-5xl px-6 pb-12"
      >
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore Invisalign treatment options in Melbourne.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation can help patients understand orthodontic options,
            treatment suitability, cosmetic goals, and possible smile pathways.
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
          Treatment suitability, duration, options, and outcomes vary between
          individuals. Consultation with a qualified dental provider is required
          before proceeding with any orthodontic treatment. Information on this
          page is general in nature and does not replace professional advice.
        </p>
      </section>

      <Footer />
    </main>
  );
}