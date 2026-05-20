import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "How Long Does Invisalign Take? | Invisalign Melbourne",
  description:
    "Learn what can influence Invisalign treatment time, including treatment complexity, aligner wear, bite considerations, and consultation planning.",
};

export default function InvisalignTimePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Invisalign Treatment Time
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              How long does Invisalign take?
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Invisalign treatment time can vary depending on the complexity of
              tooth movement, bite considerations, aligner wear, and the
              treatment pathway recommended during consultation.
            </p>

            <a
              href="#invisalign-time-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Explore Invisalign Options
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/invisalign-3.jpg"
                alt="Invisalign treatment planning"
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
            Invisalign timelines vary between patients
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign uses a series of clear aligners to gradually move teeth
            into improved positions. Because each patient’s teeth, bite, and
            smile goals are different, treatment duration can vary.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Some treatment plans may be relatively simple, while others may
            require more complex movement, refinements, or longer monitoring.
            Consultation helps estimate what may be involved.
          </p>
        </div>
      </section>

      {/* FACTORS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What can influence Invisalign treatment time?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Alignment complexity",
                text: "More significant crowding, spacing, or tooth movement may require a longer treatment plan.",
              },
              {
                title: "Bite considerations",
                text: "Bite correction can influence treatment planning and the number of aligner stages required.",
              },
              {
                title: "Consistent aligner wear",
                text: "Wearing aligners as advised is an important part of helping treatment progress as planned.",
              },
              {
                title: "Refinements",
                text: "Some patients may require additional aligners after the initial treatment phase to refine the result.",
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

      {/* SIMPLE VS COMPLEX */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Simple cases vs more complex cases
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Some patients explore Invisalign for minor cosmetic alignment
            improvements, while others may need more detailed orthodontic
            planning involving bite correction, spacing, crowding, or more
            complex tooth movement.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            The more complex the movement required, the more likely treatment
            duration and planning requirements may increase.
          </p>
        </div>
      </section>

      {/* STAGES */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Common Invisalign treatment stages
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Initial consultation and smile assessment",
              "Digital planning and aligner pathway",
              "Wearing aligners through planned stages",
              "Review, refinements, and retention planning",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-[#d7e7f2] bg-white p-5"
              >
                <p className="text-sm font-semibold text-[#0b70b7]">
                  Stage {index + 1}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAR */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Aligner wear matters
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign aligners are removable, which can make them convenient
            for eating, drinking, and cleaning. However, treatment progress also
            depends on wearing aligners consistently as advised by the dental
            provider.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Inconsistent wear may affect treatment progress and may influence
            the overall treatment timeline.
          </p>
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
              href="/how-much-is-invisalign-melbourne"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Invisalign Cost Guide
            </a>

            <a
              href="/invisalign-vs-braces"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Invisalign vs Braces
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "Can Invisalign treatment be quick?",
              answer:
                "Some simpler cases may require less time, while more complex cases may take longer depending on the movement required.",
            },
            {
              question: "What happens if I do not wear my aligners enough?",
              answer:
                "Inconsistent aligner wear may affect treatment progress and may influence the overall treatment timeline.",
            },
            {
              question: "Does everyone need refinements?",
              answer:
                "Not every patient requires refinements, but some may need additional aligners depending on progress and treatment goals.",
            },
            {
              question: "How do I know my likely treatment time?",
              answer:
                "Consultation allows a dental provider to assess alignment, bite, goals, and possible treatment pathways.",
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
        id="invisalign-time-enquiry"
        className="mx-auto max-w-5xl px-6 pb-12"
      >
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore Invisalign treatment planning in Melbourne.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation can help patients understand treatment suitability,
            possible timelines, aligner planning, and cosmetic orthodontic
            options.
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