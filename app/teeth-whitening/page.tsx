import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Teeth Whitening Melbourne | Cosmetic Whitening Enquiry",
  description:
    "Explore teeth whitening options, suitability, consultation information, FAQs, and cosmetic dentistry pathways.",
};

export default function TeethWhiteningPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Teeth Whitening
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              A brighter smile for moments that matter.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Teeth whitening is commonly explored by patients wanting a fresher,
              brighter smile before events, professional moments, or as part of
              a wider cosmetic dentistry plan.
            </p>

            <a
              href="#whitening-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Whitening Enquiry
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/whitening-1.jpg"
                alt="Teeth whitening smile inspiration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">What is teeth whitening?</h2>

          <p className="mt-6 leading-8 text-slate-600">
            Teeth whitening is a cosmetic dental treatment designed to lighten
            the shade of natural teeth and help reduce the appearance of
            staining or discolouration.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Whitening options and suitability vary between patients, so
            consultation helps clarify what may be appropriate before proceeding.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why patients consider whitening
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "To brighten the appearance of natural teeth.",
              "To prepare for weddings, events, photos, or professional moments.",
              "To refresh the smile before or after other cosmetic dental treatment.",
              "To reduce the appearance of staining from coffee, tea, wine, or lifestyle factors.",
              "To explore a simpler cosmetic option before more advanced treatment.",
              "To support a broader smile makeover plan where suitable.",
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
            Whitening Consultation
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            A brighter smile should still look natural.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of whitening consultation and
            lifestyle concepts. Individual treatment options and outcomes vary.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/whitening-1.jpg",
              title: "Bright Smile Goals",
              text: "Many patients explore whitening to refresh their smile while keeping the result natural-looking.",
            },
            {
              image: "/images/enhance-dental/whitening-2.jpg",
              title: "Shade Discussion",
              text: "Consultation can help patients understand shade goals, suitability, and what may be realistic.",
            },
            {
              image: "/images/enhance-dental/whitening-3.jpg",
              title: "Everyday Confidence",
              text: "A brighter smile can be part of feeling more comfortable in everyday and special moments.",
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
            Who may teeth whitening suit?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Teeth whitening may be explored by patients with healthy natural
            teeth who want to improve brightness or reduce the appearance of
            staining.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Suitability depends on oral health, tooth sensitivity, existing
            dental work, staining type, and the whitening approach recommended
            during consultation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What is involved in the whitening process?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "Consultation and shade discussion",
              "Assessment of teeth and suitability",
              "Whitening pathway recommendation",
              "Review and maintenance guidance",
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
            Explore whether whitening may suit your smile.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation helps patients understand whitening options,
            suitability, sensitivity considerations, and realistic expectations.
          </p>

          <a
            href="#whitening-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Make a Whitening Enquiry
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "Will whitening work on all teeth?",
              answer:
                "Whitening results vary between patients. It may work differently depending on the type of staining, natural tooth shade, oral health, and existing restorations.",
            },
            {
              question: "Does whitening affect crowns or veneers?",
              answer:
                "Whitening usually targets natural tooth structure and may not change the shade of crowns, veneers, or fillings. This should be discussed during consultation.",
            },
            {
              question: "Can whitening cause sensitivity?",
              answer:
                "Some patients may experience sensitivity. Suitability, comfort, and aftercare guidance should be discussed before treatment.",
            },
            {
              question: "How long do whitening results last?",
              answer:
                "Longevity varies depending on diet, oral hygiene, lifestyle factors, and maintenance. Patients should receive guidance specific to their situation.",
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
            <a href="/smile-makeovers" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Smile Makeovers
            </a>
            <a href="/invisalign" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Invisalign
            </a>
            <a href="/costs-finance" className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white">
              Costs & Finance
            </a>
          </div>
        </div>
      </section>

      <section id="whitening-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Teeth Whitening Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Find out whether whitening may suit your smile.
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
            <input type="hidden" name="page" value="Teeth Whitening Page" />

            <div className="grid gap-5">
              <input type="text" name="name" placeholder="Full name" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
              <input type="tel" name="phone" placeholder="Phone number" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />
              <input type="email" name="email" placeholder="Email address" required className="rounded-2xl border border-slate-300 bg-white px-4 py-4" />

              <select name="treatment" required defaultValue="Teeth Whitening" className="rounded-2xl border border-slate-300 bg-white px-4 py-4">
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Smile Makeover">Smile Makeover</option>
                <option value="Veneers">Veneers</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Invisalign">Invisalign</option>
              </select>

              <textarea name="message" placeholder="What would you like to improve about your smile?" required className="min-h-32 rounded-2xl border border-slate-300 bg-white px-4 py-4" />

              <button type="submit" className="rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]">
                Submit Whitening Enquiry
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