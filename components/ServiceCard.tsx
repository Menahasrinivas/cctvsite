export default function ServiceCard({ title, desc }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>

      <a
        href="/contact"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enquire Now
      </a>
    </div>
  );
}
