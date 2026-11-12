"use client";

import { useState } from "react";
import Image from "next/image";
import ZigzagEdge from "@/components/zigzag-edge";

type FeatureItem = {
  title: string;
  desc: string;
  icon: string;
};

type FeatureTab = {
  id: string;
  label: string;
  items: FeatureItem[];
};

const tabs: FeatureTab[] = [
  {
    id: "pemilik",
    label: "Untuk Pemilik",
    items: [
      {
        title: "Kelola Kamar",
        desc: "Atur unit, harga, dan ketersediaan tanpa catatan kertas.",
        icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21",
      },
      {
        title: "Data Penghuni",
        desc: "Lihat penghuni aktif, checkout, dan riwayat hunian.",
        icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
      },
      {
        title: "Kontrak Sewa",
        desc: "Simpan perjanjian sewa digital dan atur durasi kamar.",
        icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
      },
      {
        title: "Konfirmasi Bayar",
        desc: "Terima bukti transfer, lalu setujui atau tolak tagihan.",
        icon: "m4.5 12.75 6 6 9-13.5",
      },
      {
        title: "Laporan Keuangan",
        desc: "Rekap pemasukan kos yang bisa dicek kapan saja.",
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
      },
      {
        title: "Tindak Keluhan",
        desc: "Update progres perbaikan supaya penghuni tidak menebak-nebak.",
        icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
      },
    ],
  },
  {
    id: "penghuni",
    label: "Untuk Penghuni",
    items: [
      {
        title: "Info Kamar",
        desc: "Cek kamar, penghuni satu unit, dan status sewa.",
        icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
      },
      {
        title: "Unggah Bukti",
        desc: "Kirim struk transfer langsung dari aplikasi.",
        icon: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5",
      },
      {
        title: "Riwayat Tagihan",
        desc: "Lihat pembayaran milik sendiri, lunas atau masih pending.",
        icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      },
      {
        title: "Lihat Kontrak",
        desc: "Salinan perjanjian sewa selalu ada di genggaman.",
        icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
      },
      {
        title: "Buat Keluhan",
        desc: "Laporkan kerusakan kamar tanpa harus ke kantor kos.",
        icon: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
      },
      {
        title: "Data Diri",
        desc: "Perbarui kontak dan profil tanpa minta admin.",
        icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
      },
    ],
  },
  {
    id: "keuangan",
    label: "Keuangan",
    items: [
      {
        title: "Konfirmasi Masuk",
        desc: "Pemilik menandai pembayaran yang sudah valid.",
        icon: "m4.5 12.75 6 6 9-13.5",
      },
      {
        title: "Bukti Transfer",
        desc: "Penghuni unggah struk, pemilik cek di satu daftar.",
        icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5A1.5 1.5 0 0 0 21 18.75V5.25A1.5 1.5 0 0 0 19.5 3.75H4.5A1.5 1.5 0 0 0 3 5.25v13.5A1.5 1.5 0 0 0 4.5 20.25Z",
      },
      {
        title: "Riwayat Bayar",
        desc: "Jejak tagihan per kamar, bukan chat yang hilang.",
        icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      },
      {
        title: "Grafik Pendapatan",
        desc: "Lihat tren pemasukan tanpa buka spreadsheet.",
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
      },
      {
        title: "Laporan Kas",
        desc: "Rekap arus masuk untuk evaluasi bulanan kos.",
        icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
      },
      {
        title: "Tagihan Sendiri",
        desc: "Penghuni hanya melihat pembayaran miliknya.",
        icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z",
      },
    ],
  },
];

function FeatureRow({
  item,
  align,
}: {
  item: FeatureItem;
  align: "left" | "right";
}) {
  return (
    <li
      className={`flex items-start gap-3 sm:gap-4 ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:h-11 sm:w-11">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
        </svg>
      </span>
      <div>
        <h3 className="text-[15px] font-semibold text-gray-900 sm:text-base">
          {item.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>
      </div>
    </li>
  );
}

export default function FeatureSection() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const left = active.items.slice(0, 3);
  const right = active.items.slice(3, 6);

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-zigzag pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="inline-flex rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-white">
            Fitur
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
            KosKu dibuat untuk bantu pemilik kos dan penghuni mengurus hunian
            sehari-hari, tanpa catatan yang berantakan.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {tabs.map((tab) => {
              const selected = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  aria-pressed={selected}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${
                    selected
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:mt-12 lg:grid-cols-[1fr_minmax(220px,280px)_1fr] lg:gap-10">
          <ul className="space-y-7 sm:space-y-8">
            {left.map((item) => (
              <FeatureRow key={item.title} item={item} align="right" />
            ))}
          </ul>

          <div className="order-first mx-auto w-[180px] sm:w-[220px] lg:order-none lg:w-[250px]">
            <Image
              src="/kosku.png"
              alt="Tampilan aplikasi KosKu"
              width={2030}
              height={4256}
              className="h-auto w-full"
            />
          </div>

          <ul className="space-y-7 sm:space-y-8">
            {right.map((item) => (
              <FeatureRow key={item.title} item={item} align="left" />
            ))}
          </ul>
        </div>
      </div>

      <ZigzagEdge fill="#f9fafb" />
    </section>
  );
}
