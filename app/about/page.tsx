import CTA from "../../components/CTA";

export const metadata = {
  title: "About Riyaz CCTV",
  description: "Trusted CCTV installers in Chennai",
};

export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <p className="mb-4">
        We are a Chennai-based CCTV installation company providing
        reliable security solutions for homes, shops and offices.
      </p>

      <p className="mb-4">
        With years of field experience, we focus on quality products,
        neat installation and strong after-sales support.
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li>500+ Installations</li>
        <li>Certified Technicians</li>
        <li>Branded Equipment</li>
        <li>Fast Support</li>
      </ul>

      <CTA />
    </main>
  );
}
