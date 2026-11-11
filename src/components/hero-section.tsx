"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, descRef.current, ctaRef.current, visualRef.current].filter(Boolean);
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      }
    });
  }, []);

  return (
    <section id="home" className="relative overflow-hidden py-10 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          <div className="max-w-2xl order-2 lg:order-1">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]"
            >
              Kelola Kos Lebih Mudah dengan{" "}
              <span className="text-primary">KosKu</span>
            </h1>
            <p
              ref={descRef}
              className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
            >
              KosKu membantu pemilik kos dan penghuni mengelola kebutuhan kos dalam satu aplikasi sederhana. mulai dari pembayaran, keamanan, dan komunikasi sehari-hari.
            </p>
            <div
              ref={ctaRef}
              className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-primary-dark transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Download KosKu
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors w-full sm:w-auto"
              >
                Kenali KosKu
              </a>
            </div>
          </div>

          <div
            ref={visualRef}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[440px] max-w-full">
              <Image
                src="/mockup/kosku-phone1.png"
                alt="Mockup aplikasi KosKu di ponsel"
                width={2030}
                height={4256}
                priority
                className="w-full h-auto drop-shadow-[0_20px_60px_rgba(37,99,235,0.2)] sm:drop-shadow-[0_30px_80px_rgba(37,99,235,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
