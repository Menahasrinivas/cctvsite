export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden flex">
      <a
        href="tel:+91XXXXXXXXXX"
        className="flex-1 bg-green-600 text-white text-center py-3 font-bold"
      >
        Call Now
      </a>

      <a
        href="/contact"
        className="flex-1 bg-blue-600 text-white text-center py-3 font-bold"
      >
        Get Quote
      </a>
    </div>
  );
}
