"use client";

import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Fitur", href: "#features" },
  { name: "Cara Kerja", href: "#how-it-works" },
  { name: "Download", href: "#download" },
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
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-primary">
              KosKu
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              Download KosKu
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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

        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-200 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100 visible border-t border-gray-200"
              : "max-h-0 opacity-0 invisible border-t border-transparent"
          } overflow-hidden`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="space-y-1 py-4">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#download"
                className="flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors shadow-sm"
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
