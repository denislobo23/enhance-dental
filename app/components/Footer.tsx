import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#071f3d] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Image
            src="/images/enhance-dental/logo1.png"
            alt="Enhance Dental"
            width={220}
            height={80}
            className="h-auto w-[190px] rounded-xl bg-white p-3"
          />

          <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
            Premium cosmetic, implant, and restorative dentistry pathways for
            patients seeking clarity, confidence, and informed next steps.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Explore
          </p>

          <div className="mt-5 grid gap-3 text-sm text-blue-100">
            <a href="/veneers" className="hover:text-white">Veneers</a>
            <a href="/dental-implants" className="hover:text-white">Dental Implants</a>
            <a href="/invisalign" className="hover:text-white">Invisalign</a>
            <a href="/costs-finance" className="hover:text-white">Costs & Finance</a>
            <a href="/about" className="hover:text-white">About</a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Platform Notice
          </p>

          <p className="mt-5 text-sm leading-7 text-blue-100">
            Enhance Dental is a dental marketing and patient enquiry platform
            operated by Enhance Dental Marketing.
          </p>

          <p className="mt-4 text-sm leading-7 text-blue-100">
            Treatment suitability, options, costs, and outcomes vary between
            individuals and providers.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-blue-100 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Enhance Dental Marketing. All rights reserved.</p>
        <a href="/#contact" className="hover:text-white">
          Book a consultation
        </a>
      </div>
    </footer>
  );
}