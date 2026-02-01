export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div data-aos="fade-up" className="border p-6 rounded shadow-sm">
            <p className="text-gray-600 mb-4">
              “Excellent service. Installation was quick and neat.
              Camera quality is very good.”
            </p>
            <h4 className="font-semibold">— Kumar, Shop Owner</h4>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="border p-6 rounded shadow-sm">
            <p className="text-gray-600 mb-4">
              “Very professional team. Explained everything clearly.
              Highly recommended.”
            </p>
            <h4 className="font-semibold">— Priya, Home Owner</h4>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="border p-6 rounded shadow-sm">
            <p className="text-gray-600 mb-4">
              “Best CCTV service in Chennai. Affordable pricing and good support.”
            </p>
            <h4 className="font-semibold">— Ahmed, Office Manager</h4>
          </div>

        </div>
      </div>
    </section>
  );
}
