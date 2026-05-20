import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Invisalign Brighton | Clear Aligner Consultation",
  description:
    "Explore Invisalign consultation options for Brighton patients, including clear aligner suitability, cosmetic orthodontic planning, lifestyle considerations, and treatment pathways.",
};

export default function BrightonInvisalignPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Invisalign Brighton
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              Invisalign consultation for Brighton patients.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              For Brighton patients considering a more discreet way to improve
              tooth alignment, Invisalign may offer a clear aligner pathway
              designed around lifestyle, comfort, and individual smile goals.
            </p>

            <a
              href="#brighton-invisalign-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Invisalign Consultation
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/invisalign-2.jpg"
                alt="Invisalign consultation for Brighton patients"
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
            A clear aligner option for modern smile planning
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign uses a series of custom clear aligners to gradually guide
            teeth into improved positions. For patients in Brighton and bayside
            Melbourne, this approach may suit those wanting a more discreet
            orthodontic treatment pathway.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            The best treatment option depends on oral health, alignment
            concerns, bite position, smile goals, and the complexity of tooth
            movement required.
          </p>
        </div>
      </section>

      {/* WHY BRIGHTON PATIENTS CONSIDER INVISALIGN */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why Brighton patients may explore Invisalign
          </h2>

          <ul className="mt-6 grid gap-4 text-slate-600">
            <li>• Clear aligners designed to be discreet during treatment</li>
            <li>• Removable aligners for meals, brushing, and flossing</li>
            <li>• Cosmetic orthodontic planning tailored to individual goals</li>
            <li>• A modern option for patients seeking alignment improvement</li>
            <li>• Consultation-led assessment before treatment begins</li>
          </ul>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            A discreet approach for everyday life
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Many patients considering Invisalign are looking for an orthodontic
            option that fits comfortably into work, social occasions, family
            life, and everyday routines. Clear aligners may feel appealing for
            patients who prefer a subtle treatment appearance.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Because aligners are removable, patients can take them out for meals
            and oral hygiene. Consistent wear remains important and should be
            discussed during consultation.
          </p>
        </div>
      </section>

      {/* TREATMENT PLANNING */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Invisalign treatment planning in Brighton
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Invisalign planning considers alignment, bite, spacing, crowding,
            tooth movement, and the patient’s desired outcome. Consultation
            helps determine whether clear aligners may be suitable and what the
            treatment pathway could involve.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Consultation and smile assessment",
              "Review of alignment and bite considerations",
              "Clear aligner treatment planning",
              "Progress reviews and retention guidance",
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

      {/* RELATED ARTICLES */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Invisalign Advice
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Learn more about Invisalign
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <a
              href="/how-much-is-invisalign-melbourne"
              className="rounded-2xl border border-[#d7e7f2] bg-[#f7fbff] p-6 transition hover:bg-white hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                How Much Is Invisalign?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Learn what can influence Invisalign costs and treatment
                planning.
              </p>
            </a>

            <a
              href="/invisalign-vs-braces"
              className="rounded-2xl border border-[#d7e7f2] bg-[#f7fbff] p-6 transition hover:bg-white hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">Invisalign vs Braces</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Compare clear aligners and traditional braces.
              </p>
            </a>

            <a
              href="/how-long-does-invisalign-take"
              className="rounded-2xl border border-[#d7e7f2] bg-[#f7fbff] p-6 transition hover:bg-white hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                How Long Does Invisalign Take?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Understand what can affect treatment timelines.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Explore Invisalign across Melbourne
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/toorak-invisalign"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Toorak Invisalign
            </a>

            <a
              href="/south-yarra-invisalign"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              South Yarra Invisalign
            </a>

            <a
              href="/invisalign"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-[#eef6ff]"
            >
              Invisalign Treatment
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "Is Invisalign suitable for all patients?",
              answer:
                "Suitability depends on tooth alignment, bite considerations, oral health, and the type of movement required.",
            },
            {
              question: "Is Invisalign less noticeable than braces?",
              answer:
                "Many patients explore Invisalign because the clear aligners are designed to be more discreet than traditional braces.",
            },
            {
              question: "How long does Invisalign treatment take?",
              answer:
                "Treatment duration varies depending on complexity, aligner wear, bite considerations, and treatment goals.",
            },
            {
              question: "Can Brighton patients book an Invisalign consultation?",
              answer:
                "Patients from Brighton and surrounding Melbourne suburbs can explore Invisalign consultation options through the enquiry pathway.",
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

     {/* BRIGHTON INVISALIGN ENQUIRY */}
<section id="brighton-invisalign-enquiry" className="bg-white px-6 pb-12 pt-0">
  <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
        Brighton Invisalign Enquiry
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight">
        Explore Invisalign consultation options for Brighton.
      </h2>

      <p className="mt-6 leading-8 text-slate-600">
        Tell us what you would like to improve and we will help guide you toward
        the next step.
      </p>
    </div>

    <form
      action="https://formspree.io/f/meedjlwe"
      method="POST"
      className="rounded-3xl border border-[#e7dfd3] bg-[#fbfaf7] p-8 shadow-sm"
    >
      <input type="hidden" name="page" value="Brighton Invisalign Page" />
      <input type="hidden" name="suburb" value="Brighton" />
      <input type="hidden" name="treatment" value="Invisalign" />
      <input type="hidden" name="lead_source" value="brighton-invisalign" />

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
          Submit Invisalign Enquiry
        </button>
      </div>
    </form>
  </div>
</section>

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="text-sm leading-7 text-slate-500">
          Treatment suitability, options, duration, and outcomes vary between
          individuals. Consultation with a qualified dental provider is required
          before proceeding with orthodontic treatment. Information on this page
          is general in nature and does not replace professional advice.
        </p>
      </section>

      <Footer />
    </main>
  );
}