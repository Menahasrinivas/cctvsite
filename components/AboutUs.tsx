import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">
            About Riyaz CCTV
          </h2>

          <p className="text-gray-600 mb-4">
            Riyaz CCTV is a trusted CCTV installation service provider in
            Chennai, offering reliable surveillance solutions for homes,
            shops, offices and apartments.
          </p>

          <p className="text-gray-600 mb-6">
            With years of hands-on experience, we specialize in HD & IP
            cameras, DVR/NVR setup, maintenance and AMC services at affordable
            pricing.
          </p>

          <ul className="space-y-2 text-sm">
            <li>✔ 1000+ Installations Done</li>
            <li>✔ Trained Technicians</li>
            <li>✔ On-time Service</li>
            <li>✔ Warranty & Support</li>
          </ul>
        </div>

        {/* Image / Placeholder */}
       {/* Image */}
<div data-aos="fade-left" className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded overflow-hidden shadow">
  <Image
    src="/images/g3.jpg"
    alt="Professional CCTV Installation in Chennai"
    fill
    className="object-cover"
    priority
  />
</div>
</div>
    </section>
  );
}
