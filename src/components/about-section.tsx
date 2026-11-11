const userSides = [
  {
    name: "Admin / Pemilik Kos",
    description:
      "Kelola seluruh operasional kos secara rapi dan terpusat, tanpa catatan manual yang berantakan.",
    points: [
      "Kelola kamar & data penghuni",
      "Pantau status pembayaran",
      "Terima & tanggapi keluhan",
    ],
    iconPath:
      "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z",
    iconAlt: "Ikon gedung kos",
  },
  {
    name: "Penghuni / Tenant",
    description:
      "Semua kebutuhan kos ada di genggaman, dari informasi kamar sampai kontrak sewa.",
    points: [
      "Lihat info kamar & tagihan",
      "Unggah bukti pembayaran",
      "Kirim keluhan dengan mudah",
    ],
    iconPath:
      "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    iconAlt: "Ikon ponsel",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-10 sm:py-16 lg:py-20 xl:py-24 scroll-mt-14 sm:scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            Tentang <span className="text-primary">KosKu</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            KosKu adalah aplikasi mobile untuk membantu pengelolaan kos dalam
            satu aplikasi. Dirancang untuk mengatasi pencatatan manual yang
            berantakan, KosKu menghubungkan pemilik kos dan penghuni dalam satu
            tempah yang sederhana dan mudah digunakan.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {userSides.map((side) => (
            <div
              key={side.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-light text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={side.iconPath} />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {side.name}
                </h3>
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {side.description}
              </p>

              <ul className="mt-5 sm:mt-6 space-y-3">
                {side.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
