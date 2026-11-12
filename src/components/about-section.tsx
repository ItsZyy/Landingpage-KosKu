import ZigzagEdge from "@/components/zigzag-edge";

const userSides = [
  {
    name: "Admin / Pemilik Kos",
    description:
      "Kelola operasional kos dari satu tempat, tanpa catatan manual yang berantakan.",
    points: [
      "Kelola kamar & data penghuni",
      "Pantau status pembayaran",
      "Terima & tanggapi keluhan",
    ],
  },
  {
    name: "Penghuni / Tenant",
    description:
      "Kebutuhan kos ada di genggaman: kamar, tagihan, sampai kontrak sewa.",
    points: [
      "Lihat info kamar & tagihan",
      "Unggah bukti pembayaran",
      "Kirim keluhan dengan mudah",
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zigzag-white py-12 pb-16 sm:py-16 sm:pb-20 lg:py-20 lg:pb-24 xl:py-24 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Tentang KosKu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:mt-5 sm:text-lg">
            KosKu adalah aplikasi mobile untuk pengelolaan kos. Dirancang untuk
            mengganti pencatatan manual, dan menghubungkan pemilik kos dengan
            penghuni di satu tempat.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-10 sm:mt-14 md:grid-cols-2 md:gap-16">
          {userSides.map((side) => (
            <div key={side.name} className="border-l-2 border-primary pl-5 sm:pl-6">
              <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                {side.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {side.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {side.points.map((point) => (
                  <li key={point} className="text-sm text-gray-700 sm:text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <ZigzagEdge fill="#f3f6fc" />
    </section>
  );
}
