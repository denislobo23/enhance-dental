"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Veneers", href: "/veneers" },
    { label: "Implants", href: "/dental-implants" },
    { label: "Invisalign", href: "/invisalign" },
    { label: "Smile Makeovers", href: "/smile-makeovers" },
    { label: "Whitening", href: "/teeth-whitening" },
    { label: "Crowns", href: "/crowns-restorations" },
    { label: "Costs", href: "/costs-finance" },
    { label: "About", href: "/about" },
  ];

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
            className="h-auto w-[165px] md:w-[220px]"
          />
        </a>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#0b70b7]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden rounded-full bg-[#0b376d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#082b55] sm:inline-flex"
          >
            Book Consultation
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-full border border-[#d7e7f2] px-4 py-2 text-sm font-semibold text-[#0b376d] lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#e7dfd3] bg-[#fbfaf7] px-6 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3 text-sm font-semibold text-slate-700">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-[#e7dfd3] bg-white px-5 py-4 hover:text-[#0b70b7]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[#0b376d] px-5 py-4 text-center text-white"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}