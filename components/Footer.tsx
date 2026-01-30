export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-8">

        <div>
          <h3 className="font-bold text-lg mb-3">Riyaz CCTV</h3>
          <p>CCTV Installation & Security Systems in Chennai</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Working Hours</h3>
          <p>Monday – Saturday</p>
          <p>9:00 AM – 8:00 PM</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Quick Contact</h3>
          <p>📞 +91XXXXXXXXXX</p>
          <p>✉ info@example.com</p>

          <a
            href="/contact"
            className="inline-block mt-3 bg-green-600 px-4 py-2 rounded"
          >
            Get Free Quote
          </a>
        </div>

      </div>

      <div className="text-center text-sm border-t border-gray-700 p-4">
        © 2026 Riyaz CCTV. All rights reserved.
      </div>
    </footer>
  );
}
