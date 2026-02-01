import Hero from "../components/Hero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "./gallery/page";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <Hero />
      <AboutUs />
<WhyChooseUs />
<Testimonials />
     
      <CTA />

       {/* SEO content */}
      <section className="py-12 text-sm text-gray-600 container mx-auto px-4">
        <p>
          Riyaz CCTV offers professional CCTV installation services in Chennai
          for homes, shops, offices and apartments. We specialize in HD cameras,
          IP cameras, DVR, NVR and CCTV maintenance with affordable pricing and
          reliable support.
        </p>
      </section>
    </main>
  );
}
