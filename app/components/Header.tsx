import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-[#e7dfd3] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <a href="/" className="flex items-center">
          <Image
            src="/images/enhance-dental/logo1.png"
            alt="Enhance Dental"
            width={220}
            height={80}
            priority
            className="h-auto w-[170px] md:w-[220px]"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          <a href="/veneers" className="hover:text-[#0b70b7]">Veneers</a>
          <a href="/dental-implants" className="hover:text-[#0b70b7]">Implants</a>
          <a href="/invisalign" className="hover:text-[#0b70b7]">Invisalign</a>
          <a href="/costs-finance" className="hover:text-[#0b70b7]">Costs</a>
          <a href="/about" className="hover:text-[#0b70b7]">About</a>
        </nav>

        <a
          href="/#contact"
          className="rounded-full bg-[#0b376d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#082b55]"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}