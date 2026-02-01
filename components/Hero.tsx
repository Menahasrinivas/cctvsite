export default function Hero() {
  return (
    <section className="bg-linear-to-r from-gray-900 to-gray-800 text-white  py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          CCTV Installation in Chennai
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          Professional CCTV Camera Installation for Homes, Shops & Offices
        </p>

        {/* Trust badges */}
        <div className="flex justify-center gap-4 text-sm text-gray-300 mb-8">
          <span>✅ Free Site Visit</span>
          <span>✅ Same Day Installation</span>
          <span>✅ Warranty Support</span>
        </div>

        {/* CTA buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded font-semibold"
          >
            Get Free Quote
          </a>

          <a
            href="tel:+919999999990"
            className="border border-white px-8 py-3 rounded font-semibold"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
