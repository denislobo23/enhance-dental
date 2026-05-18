import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Thank You | Enhance Dental",
  description: "Your Enhance Dental enquiry has been received.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#d7e7f2] bg-white p-10 text-center shadow-sm md:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b70b7]">
            Thank You
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            Your enquiry has been received.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            Thank you for reaching out to Enhance Dental. Your enquiry has been
            submitted and will be reviewed shortly.
          </p>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            While you wait, you can explore the main treatment pathways below.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
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

          <a
            href="/"
            className="mt-10 inline-flex rounded-full bg-[#0b376d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#082b55]"
          >
            Return Home
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}