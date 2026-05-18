import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Crowns & Restorations Melbourne | Restorative Dental Enquiry",
  description:
    "Explore crowns and restorative dentistry options for worn, cracked, damaged, or heavily filled teeth.",
};

export default function CrownsRestorationsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Crowns & Restorations
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              Restore damaged, worn, or weakened teeth with confidence.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Crowns and restorative dentistry may help patients rebuild teeth
              affected by damage, wear, cracks, older fillings, or structural
              weakness.
            </p>

            <a
              href="#crowns-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Restorative Enquiry
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/crowns-1.jpg"
                alt="Crowns and restorations consultation"
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
            What are crowns and restorations?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Dental crowns and restorations are treatments used to rebuild,
            protect, or improve teeth that have been damaged, weakened, heavily
            filled, cracked, or worn over time.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            The right option depends on the condition of the tooth, oral health,
            bite, appearance goals, and the recommended treatment pathway.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why patients consider restorative dentistry
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "To rebuild cracked, chipped, or broken teeth.",
              "To protect teeth weakened by large fillings or previous treatment.",
              "To restore comfort, chewing function, and stability.",
              "To improve the appearance of worn or heavily restored teeth.",
              "To support long-term oral health planning.",
              "To combine function and cosmetic appearance where appropriate.",
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
            Restorative Planning
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Restorative dentistry balances strength, comfort, and appearance.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of restorative consultation
            and treatment planning. Individual treatment options and outcomes
            vary.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/crowns-1.jpg",
              title: "Clinical Assessment",
              text: "Consultation helps patients understand what may be causing damage, wear, or discomfort.",
            },
            {
              image: "/images/enhance-dental/crowns-2.jpg",
              title: "Restorative Outcome",
              text: "Restorative treatment may aim to improve strength, comfort, appearance, and everyday function.",
            },
            {
              image: "/images/enhance-dental/crowns-3.jpg",
              title: "Natural Appearance",
              text: "Modern restorative planning often focuses on natural-looking results that suit the patient’s smile.",
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
            Who may crowns and restorations suit?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Crowns and restorations may be considered by patients with cracked,
            worn, broken, heavily filled, or structurally weakened teeth.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Suitability depends on the condition of the tooth, remaining tooth
            structure, bite, symptoms, cosmetic goals, and the treatment pathway
            recommended during consultation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What is involved in the restorative process?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Consultation and tooth assessment",
              "Imaging and treatment planning",
              "Preparation and restoration design",
              "Placement, review, and maintenance",
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

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore options for stronger, healthier-looking teeth.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation helps patients understand whether restorative treatment,
            crowns, or staged care may suit their situation.
          </p>

          <a
            href="#crowns-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Make a Restorative Enquiry
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "When might a crown be needed?",
              answer:
                "A crown may be considered when a tooth is weakened, cracked, heavily filled, worn, or needs protection after previous dental treatment.",
            },
            {
              question: "Do crowns look natural?",
              answer:
                "Modern crowns can often be designed to blend with surrounding teeth. The final appearance depends on materials, planning, and the individual case.",
            },
            {
              question: "How long do crowns last?",
              answer:
                "Longevity varies depending on materials, oral hygiene, bite, habits, and ongoing care. Suitability and maintenance should be discussed during consultation.",
            },
            {
              question: "Can restorative treatment be staged?",
              answer:
                "In many cases, treatment planning may be staged depending on urgency, symptoms, priorities, timing, and financial considerations.",
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
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Explore related treatment pathways
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="/smile-makeovers" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Smile Makeovers
            </a>
            <a href="/veneers" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Veneers
            </a>
            <a href="/dental-implants" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Dental Implants
            </a>
            <a href="/costs-finance" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Costs & Finance
            </a>
          </div>
        </div>
      </section>

      <section id="crowns-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Crowns & Restorations Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Find out what restorative options may suit your teeth.
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
            <input type="hidden" name="page" value="Crowns Restorations Page" />

            <div className="grid gap-5">
              <input type="text" name="name" placeholder="Full name" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
              <input type="tel" name="phone" placeholder="Phone number" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
              <input type="email" name="email" placeholder="Email address" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />

              <select name="treatment" required defaultValue="Crowns & Restorations" className="rounded-2xl border border-slate-300 bg-white px-4 py-4">
                <option value="Crowns & Restorations">Crowns & Restorations</option>
                <option value="Smile Makeover">Smile Makeover</option>
                <option value="Veneers">Veneers</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Invisalign">Invisalign</option>
              </select>

              <textarea name="message" placeholder="What would you like to improve or restore?" required className="min-h-32 rounded-2xl border border-slate-300 bg-white px-4 py-4" />

              <button type="submit" className="rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]">
                Submit Restorative Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="text-sm leading-7 text-slate-500">
          Treatment suitability, options, costs, timeframes, and outcomes vary
          between individuals and providers. Consultation with a qualified dental
          provider is required before proceeding with any treatment. Images used
          on this page are illustrative and are not intended to represent
          guaranteed outcomes.
        </p>
      </section>

      <Footer />
    </main>
  );
}