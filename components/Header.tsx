import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <div className="font-bold">Riyaz CCTV</div>

        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
           <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a
          href="tel:+91XXXXXXXXXX"
          className="bg-green-600 px-3 py-1 rounded"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
