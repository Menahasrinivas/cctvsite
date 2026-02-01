export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Riyaz CCTV?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 border rounded">
            <h3 className="font-semibold mb-2">Experienced Team</h3>
            <p className="text-sm text-gray-600">
              5+ years of CCTV installation experience
            </p>
          </div>

          <div className="p-6 border rounded">
            <h3 className="font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-sm text-gray-600">
              Best price guarantee in Chennai
            </p>
          </div>

          <div className="p-6 border rounded">
            <h3 className="font-semibold mb-2">Quality Cameras</h3>
            <p className="text-sm text-gray-600">
              HD & IP cameras with warranty
            </p>
          </div>

          <div className="p-6 border rounded">
            <h3 className="font-semibold mb-2">Quick Support</h3>
            <p className="text-sm text-gray-600">
              Fast service & AMC support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
