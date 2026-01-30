import Image from "next/image";
import CTA from "../../components/CTA";

export const metadata = {
  title: "Installation Gallery",
  description: "Our CCTV installation works",
};

export default function Gallery() {
  const imgs = [
    "/images/g1.jpg",
    "/images/g2.jpg",
    "/images/g3.jpg",
    "/images/g4.jpg",
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">Project Gallery</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {imgs.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="CCTV installation"
            width={500}
            height={350}
            className="rounded shadow object-cover"
          />
        ))}
      </div>

      <CTA />
    </main>
  );
}
