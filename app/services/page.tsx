import ServiceCard from "@/components/ServiceCard";
import CTA from "../../components/CTA";

export const metadata = {
  title: "CCTV Services in Chennai",
  description: "Installation, repair and AMC support for CCTV systems",
};

export default function Services() {
  return (
    <main className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <ServiceCard
          title="Home CCTV Installation"
          desc="Complete surveillance setup for houses and apartments."
        />

        <ServiceCard
          title="Office Security Systems"
          desc="Professional camera setup for offices & companies."
        />

        <ServiceCard
          title="Shop CCTV Setup"
          desc="Retail shop monitoring solutions."
        />

        <ServiceCard
          title="AMC & Maintenance"
          desc="Annual maintenance & fast repair support."
        />

        <ServiceCard
          title="Remote Mobile Viewing"
          desc="View cameras from your mobile anywhere."
        />

        <ServiceCard
          title="DVR / NVR Setup"
          desc="Recorder configuration & storage setup."
        />

      </div>

      <CTA />
    </main>
  );
}
