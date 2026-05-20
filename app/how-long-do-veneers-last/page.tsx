import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "How Long Do Veneers Last? | Veneers Guide Melbourne",
  description:
    "Learn how long veneers may last, factors affecting longevity, maintenance considerations, and cosmetic smile planning information.",
};

export default function HowLongDoVeneersLastPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Veneers Guide
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              How long do veneers last?
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              One of the most common questions patients ask when exploring
              veneers is how long they may last and what affects longevity over
              time.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Veneer lifespan varies depending on materials, oral hygiene,
              maintenance, bite forces, habits, and overall dental health.
            </p>

            <a
              href="#veneers-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Veneers Consultation
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/veneers-2.jpg"
                alt="Veneers consultation"
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
            Veneers are designed for long-term cosmetic improvement
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Modern veneers are commonly used as a long-term cosmetic dentistry
            solution aimed at improving smile appearance, symmetry, colour, and
            overall aesthetics.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Longevity can vary significantly between patients depending on oral
            health, bite patterns, materials selected, maintenance habits, and
            lifestyle factors.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Consultation helps patients understand what may influence durability
            and whether veneers are suitable for their circumstances.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Factors that may affect veneer longevity
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Oral hygiene and ongoing maintenance habits.",
              "Bite forces and teeth grinding patterns.",
              "The materials used for veneers.",
              "General dental and gum health.",
              "Lifestyle habits and diet.",
              "Regular dental review and monitoring.",
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
            Veneers Planning
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Veneers planning often focuses on balancing aesthetics and durability.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of cosmetic smile planning
            and veneers consultation concepts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/veneers-1.jpg",
              title: "Smile Assessment",
              text: "Consultation may involve discussing cosmetic goals, bite considerations, and long-term planning.",
            },
            {
              image: "/images/enhance-dental/veneers-2.jpg",
              title: "Material Selection",
              text: "Different veneer materials may vary in appearance, strength, and maintenance considerations.",
            },
            {
              image: "/images/enhance-dental/veneers-3.jpg",
              title: "Long-Term Maintenance",
              text: "Regular maintenance and monitoring may support veneer longevity over time.",
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
        <div className="grid gap-6">
          {[
            {
              question: "Can veneers last many years?",
              answer:
                "Many patients explore veneers as a long-term cosmetic solution, although longevity varies between individuals and treatment situations.",
            },
            {
              question: "Does teeth grinding affect veneers?",
              answer:
                "Grinding or clenching may place additional forces on veneers and may affect maintenance requirements over time.",
            },
            {
              question: "Do veneers require maintenance?",
              answer:
                "Ongoing oral hygiene, monitoring, and professional dental review may help support long-term veneer maintenance.",
            },
            {
              question: "Can veneers stain over time?",
              answer:
                "Different materials may respond differently over time. Consultation helps clarify maintenance considerations and expectations.",
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

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            Explore veneers consultations and cosmetic smile planning.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation can help patients understand veneer suitability,
            maintenance considerations, and long-term cosmetic planning.
          </p>

          <a
            href="/veneers"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Explore Veneers
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
            <a
              href="/toorak-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]"
            >
              Toorak Veneers
            </a>

            <a
              href="/brighton-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]"
            >
              Brighton Veneers
            </a>

            <a
              href="/south-yarra-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]"
            >
              South Yarra Veneers
            </a>

            <a
              href="/malvern-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]"
            >
              Malvern Veneers
            </a>

            <a
              href="/kew-veneers"
              className="rounded-full border border-[#d7e7f2] bg-white px-6 py-3 text-sm font-semibold text-[#0b376d]"
            >
              Kew Veneers
            </a>
          </div>
        </div>
      </section>

      <section
        id="veneers-enquiry"
        className="bg-white px-6 pb-12 pt-0"
      >
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Veneers Consultation
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Explore veneers suitability and cosmetic smile planning.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Tell us what you would like to improve about your smile and we
              will help guide you toward suitable next steps.
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
              value="How Long Do Veneers Last Page"
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

              <textarea
                name="message"
                placeholder="Tell us about your smile goals"
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
          Treatment suitability, options, costs, timeframes, and outcomes vary
          between individuals and providers. Consultation with a qualified dental
          provider is required before proceeding with any treatment.
        </p>
      </section>

      <Footer />
    </main>
  );
}