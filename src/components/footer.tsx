export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h2 className="text-lg sm:text-xl font-bold text-primary">KosKu</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">
              Aplikasi mobile untuk mengelola kos. Memudahkan operasional untuk pemilik kos dan penghuni.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Produk</h3>
            <ul className="mt-3 sm:mt-4 space-y-2">
              <li>
                <a href="#features" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#download" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Unduh
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Developer</h3>
            <ul className="mt-3 sm:mt-4 space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} KosKu. Hak cipta dilindungi. <br /> Designed & Developed by zyydev.
          </p>
        </div>
      </div>
    </footer>
  );
}
