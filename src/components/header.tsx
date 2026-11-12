"use client";

import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Fitur", href: "#features" },
  { name: "Cara Kerja", href: "#how-it-works" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-20 transition-all duration-200 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-xs"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl sm:text-2xl font-bold tracking-tight text-primary">
              KosKu
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-7 lg:gap-9">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm sm:text-[15px] font-medium text-gray-600 hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-4 sm:px-5 py-2.5 text-sm sm:text-base font-semibold text-white hover:bg-primary-dark transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
            >
              Download KosKu
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Buka menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-md px-4 py-4 transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="space-y-1">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:text-primary hover:bg-primary-light transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#download"
                className="flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-xs"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download KosKu
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
