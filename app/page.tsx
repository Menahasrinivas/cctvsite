import Hero from "../components/Hero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <Hero />
      <CTA />
    </main>
  );
}
