import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Veneers Brighton | Cosmetic Veneers Consultation",
  description:
    "Explore veneers consultations for patients in Brighton including cosmetic smile planning, veneer suitability, and treatment pathways.",
};

export default function BrightonVeneersPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Brighton Veneers
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              Premium veneers consultations for patients in Brighton.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Veneers are commonly explored by patients seeking a brighter,
              more refined smile while maintaining a natural appearance.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Patients from Brighton may explore veneers as part of cosmetic
              smile enhancement involving colour, spacing, symmetry, tooth
              shape, and overall smile aesthetics.
            </p>

            <a
              href="#brighton-enquiry"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Book Veneers Consultation
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/veneers-1.jpg"
                alt="Brighton veneers consultation"
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
            What are veneers?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Veneers are thin cosmetic coverings bonded to the front surface of
            teeth to improve the appearance of colour, shape, spacing,
            proportions, and overall smile aesthetics.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Patients in Brighton often explore veneers when seeking a more
            polished, balanced, and confident smile appearance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Cosmetic Smile Planning
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Veneers planning focused on natural aesthetics and smile harmony.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These images are illustrative examples of veneers consultation and
            cosmetic smile planning concepts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/veneers-1.jpg",
              title: "Smile Assessment",
              text: "Consultation may involve discussing cosmetic goals, smile balance, and natural aesthetics.",
            },
            {
              image: "/images/enhance-dental/veneers-2.jpg",
              title: "Veneers Planning",
              text: "Patients often explore veneer proportions, brightness, symmetry, and smile refinement.",
            },
            {
              image: "/images/enhance-dental/veneers-3.jpg",
              title: "Confidence & Lifestyle",
              text: "Many patients explore veneers to feel more confident socially and professionally.",
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
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Why patients in Brighton explore veneers
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "To improve smile symmetry and balance.",
              "To reduce the appearance of discoloration or staining.",
              "To create a brighter and more polished smile.",
              "To improve confidence in personal and professional settings.",
              "To explore cosmetic smile enhancement pathways.",
              "To maintain a natural-looking appearance while improving aesthetics.",
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

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6">
          {[
            {
              question: "Do veneers look natural?",
              answer:
                "Modern veneers are often designed to complement facial features, smile proportions, and natural aesthetics.",
            },
            {
              question: "How long do veneers last?",
              answer:
                "Longevity varies depending on materials, oral hygiene, bite, habits, and ongoing maintenance.",
            },
            {
              question: "Can veneers improve confidence?",
              answer:
                "Many patients explore veneers because they feel more comfortable smiling in social and professional settings.",
            },
            {
              question: "Are veneers suitable for everyone?",
              answer:
                "Suitability varies between patients depending on oral health, bite, existing dental work, and cosmetic goals.",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="rounded-[2rem] border border-[#e7dfd3] bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold">{item.question}</h3>

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
            Explore veneers consultations for patients in Brighton.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-blue-100">
            Consultation can help clarify veneer options, cosmetic goals,
            suitability, and smile planning pathways.
          </p>

          <a
            href="#brighton-enquiry"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Make Veneers Enquiry
          </a>
        </div>
      </section>

      <section id="brighton-enquiry" className="bg-white px-6 pb-12 pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              Brighton Veneers Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Start your veneers consultation journey.
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
              value="Brighton Veneers Page"
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