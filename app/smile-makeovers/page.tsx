import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Smile Makeovers Melbourne | Cosmetic Dentistry Consultation",
  description:
    "Explore smile makeover options including veneers, whitening, Invisalign, crowns, and cosmetic treatment planning.",
};

export default function SmileMakeoversPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Smile Makeovers
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              A complete smile plan tailored to your goals.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Smile makeovers may combine cosmetic and restorative treatments
              such as veneers, whitening, Invisalign, crowns, or implants to
              improve the overall appearance, balance, and confidence of a smile.
            </p>

            <a
              href="#smile-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Smile Makeover Enquiry
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/smile-1.jpg"
                alt="Smile makeover inspiration"
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
            What is a smile makeover?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            A smile makeover is a personalised treatment plan designed to improve
            the appearance of the smile as a whole. Rather than focusing on one
            tooth or one treatment, it considers colour, alignment, shape,
            proportion, symmetry, and overall facial balance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Treatments that may be considered
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Veneers for improving tooth shape, colour, and smile balance.",
              "Teeth whitening for patients wanting a brighter smile.",
              "Invisalign or clear aligners for improving tooth alignment.",
              "Crowns or restorations for damaged, worn, or heavily filled teeth.",
              "Dental implants for replacing missing teeth where appropriate.",
              "A staged treatment plan tailored around timing, comfort, and priorities.",
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
            Smile Makeover Planning
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Smile makeovers are about planning the whole picture.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of cosmetic smile planning
            and patient experience. Individual treatment options and outcomes
            vary.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/smile-1.jpg",
              title: "Smile Goals",
              text: "Many patients begin by wanting to understand what may be possible for their smile.",
            },
            {
              image: "/images/enhance-dental/smile-2.jpg",
              title: "Cosmetic Planning",
              text: "A smile makeover may involve discussing tooth colour, shape, alignment, and overall balance.",
            },
            {
              image: "/images/enhance-dental/smile-3.jpg",
              title: "Confident Next Steps",
              text: "Consultation helps patients explore treatment pathways with more clarity and comfort.",
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
            Who may consider a smile makeover?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Smile makeovers may be explored by patients who feel their smile is
            affected by staining, gaps, uneven teeth, worn edges, missing teeth,
            older restorations, or a combination of cosmetic concerns.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Suitability depends on oral health, treatment goals, bite, existing
            dental work, and the treatment pathway recommended during
            consultation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What is involved in the process?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Consultation and smile assessment",
              "Discussion around goals and priorities",
              "Treatment planning and staging",
              "Treatment pathway and review",
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
            Explore a complete pathway for your smile.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            A smile makeover consultation can help clarify possible treatments,
            timing, priorities, and realistic next steps.
          </p>

          <a
            href="#smile-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Make a Smile Makeover Enquiry
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "What treatments are included in a smile makeover?",
              answer:
                "A smile makeover may include veneers, whitening, Invisalign, crowns, implants, or restorative work depending on the patient’s goals and suitability.",
            },
            {
              question: "How long does a smile makeover take?",
              answer:
                "Timeframes vary depending on the treatments involved. Some pathways may be completed over several visits, while more comprehensive plans may be staged over months.",
            },
            {
              question: "Can a smile makeover be staged?",
              answer:
                "In many situations, treatment can be planned in stages to suit timing, comfort, and financial considerations.",
            },
            {
              question: "How do I know what treatment I need?",
              answer:
                "Consultation helps assess your goals, oral health, smile concerns, and suitable pathways before a treatment plan is recommended.",
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
            <a href="/veneers" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Veneers
            </a>
            <a href="/invisalign" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Invisalign
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

      <section id="smile-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Smile Makeover Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Find out what may be possible for your smile.
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
            <input type="hidden" name="page" value="Smile Makeovers Page" />

            <div className="grid gap-5">
              <input type="text" name="name" placeholder="Full name" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
              <input type="tel" name="phone" placeholder="Phone number" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
              <input type="email" name="email" placeholder="Email address" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />

              <select name="treatment" required defaultValue="Smile Makeover" className="rounded-2xl border border-slate-300 bg-white px-4 py-4">
                <option value="Smile Makeover">Smile Makeover</option>
                <option value="Veneers">Veneers</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Invisalign">Invisalign</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
              </select>

              <textarea name="message" placeholder="What would you like to improve about your smile?" required className="min-h-32 rounded-2xl border border-slate-300 bg-white px-4 py-4" />

              <button type="submit" className="rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]">
                Submit Smile Makeover Enquiry
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