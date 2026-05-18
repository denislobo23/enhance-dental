import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";


export const metadata = {
  title: "About Enhance Dental | Cosmetic Dentistry Enquiry Platform",
  description:
    "Learn about Enhance Dental, a premium patient enquiry platform helping people explore cosmetic, implant, and clear aligner dental pathways.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
        <Header />
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
              About Enhance Dental
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              Helping patients explore better smile options with clarity.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Enhance Dental is designed to help patients understand cosmetic,
              implant, and clear aligner treatment pathways before taking the
              next step.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
            >
              Make an Enquiry
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/enhance-dental/about-1.jpg"
                alt="Enhance Dental consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">Who we are</h2>

          <p className="mt-6 leading-8 text-slate-600">
            Enhance Dental is a patient enquiry and information platform focused
            on premium cosmetic, restorative, implant, and clear aligner dental
            pathways.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            The platform is designed for people who want to explore treatment
            options in a calm, informed, and practical way before speaking with
            a suitable dental provider.
          </p>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            What we help patients understand
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Which treatment pathways may be worth exploring.",
              "What questions to ask before committing to treatment.",
              "Why treatment costs and timeframes can vary.",
              "How cosmetic, implant, and aligner options differ.",
              "Why consultation and personalised planning matter.",
              "How to take the next step with more confidence.",
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

      {/* IMAGE SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/images/enhance-dental/about-1.jpg",
              title: "Clear Guidance",
              text: "Patients deserve clear, calm information before making important treatment decisions.",
            },
            {
              image: "/images/enhance-dental/about-2.jpg",
              title: "Personalised Pathways",
              text: "Different people have different goals, concerns, timelines, and treatment priorities.",
            },
            {
              image: "/images/enhance-dental/about-3.jpg",
              title: "Confidence Before Commitment",
              text: "The right consultation can help patients feel better informed before choosing the next step.",
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

      {/* OUR APPROACH */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">Our approach</h2>

          <p className="mt-6 leading-8 text-slate-600">
            Enhance Dental is built around patient education, practical enquiry,
            and informed decision-making. Cosmetic and restorative dentistry can
            be highly personal, so patients should understand possible pathways,
            realistic considerations, and the importance of professional
            consultation.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Rather than pushing one treatment, the aim is to help patients
            explore suitable options and take the next step with more clarity.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-[#f7fbff] p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">What matters to us</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Clarity",
                text: "Patients should understand possible treatment pathways before making decisions.",
              },
              {
                title: "Comfort",
                text: "Dental decisions should feel calm, respectful, and free from unnecessary pressure.",
              },
              {
                title: "Confidence",
                text: "The right information can help people take the next step with greater confidence.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d7e7f2] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM NOTICE */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] bg-[#0b376d] p-10 text-white shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight">
            A patient enquiry platform, not a treatment guarantee.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-blue-100">
            Enhance Dental helps patients explore treatment information and
            submit enquiries. Treatment suitability, recommendations, pricing,
            and outcomes can only be assessed by a qualified dental provider
            after consultation.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b376d] transition hover:bg-slate-100"
          >
            Make an Enquiry
          </a>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">
            Explore treatment information
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/veneers"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Veneers
            </a>

            <a
              href="/dental-implants"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Dental Implants
            </a>

            <a
              href="/invisalign"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Invisalign
            </a>

            <a
              href="/costs-finance"
              className="rounded-full border border-[#d7e7f2] bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#0b376d] transition hover:bg-white"
            >
              Costs & Finance
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="text-sm leading-7 text-slate-500">
          Enhance Dental is a patient enquiry and information platform.
          Treatment suitability, options, costs, timeframes, and outcomes vary
          between individuals and providers. Consultation with a qualified dental
          provider is required before proceeding with any treatment. Images used
          on this page are illustrative.
        </p>
      </section>
      <Footer />
    </main>
  );
}