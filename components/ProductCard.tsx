import Image from "next/image";

export default function ProductCard({ name, img, spec }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <Image
        src={img}
        alt={name}
        width={400}
        height={300}
        className="rounded mb-3 object-cover"
      />

      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{spec}</p>

      <a
        href="/contact"
        className="bg-green-600 text-white px-3 py-2 rounded text-sm"
      >
        Get Price
      </a>
    </div>
  );
}
