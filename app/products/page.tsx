import ProductCard from "../../components/ProductCard";
import CTA from "../../components/CTA";

export const metadata = {
  title: "CCTV Products",
  description: "Cameras, DVR, NVR and accessories",
};

export default function Products() {
  return (
    <main className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <ProductCard
          name="Dome Camera"
          img="/images/dome.jpg"
          spec="Indoor HD surveillance camera"
        />

        <ProductCard
          name="Bullet Camera"
          img="/images/bullet.jpg"
          spec="Outdoor weatherproof camera"
        />

        <ProductCard
          name="PTZ Camera"
          img="/images/ptz.jpg"
          spec="Pan tilt zoom advanced camera"
        />

        <ProductCard
          name="DVR Recorder"
          img="/images/dvr.jpg"
          spec="Digital video recording unit"
        />

        <ProductCard
          name="NVR Recorder"
          img="/images/nvr.jpg"
          spec="Network video recorder"
        />

        <ProductCard
          name="Accessories Kit"
          img="/images/accessories.jpg"
          spec="Cables, SMPS & connectors"
        />

      </div>

      <CTA />
    </main>
  );
}
