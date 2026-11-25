import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Developer - KosKu",
  description: "Kenali tim di balik pengembangan KosKu.",
};

const developers = [
  {
    name: "Ezy Muhammad Ikbal",
    role: "Mobile Developer",
    photo: "/about/Ezyy.jpeg",
    focus: "center 32%",
  },
  {
    name: "Galang Agung Munggaran",
    role: "Web Developer",
    photo: "/about/galang.jpeg",
    focus: "center top",
  },
];

export default function AboutPage() {
  return (
    <section className="bg-zigzag-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Kembali ke beranda
        </Link>

        <div className="mt-8 sm:mt-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Tentang Developer
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Kenali tim di balik pengembangan KosKu.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {developers.map((developer) => (
            <article
              key={developer.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-xs sm:p-8"
            >
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-primary-light ring-2 ring-primary-light sm:h-24 sm:w-24">
                <Image
                  src={developer.photo}
                  alt={`Foto profil ${developer.name}`}
                  fill
                  sizes="(min-width: 640px) 96px, 80px"
                  style={{ objectPosition: developer.focus }}
                  className="object-cover"
                />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-gray-900 sm:text-xl">
                {developer.name}
              </h2>
              <p className="mt-1.5 text-sm text-gray-600 sm:text-base">
                {developer.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
