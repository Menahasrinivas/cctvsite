import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";

export default function Contact() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <JsonLd />

      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="font-bold mb-2">Contact Info</h2>
          <p>Phone: +91XXXXXXXXXX</p>
          <p>Email: info@example.com</p>
          <p>Address: Chennai</p>

          <h3 className="mt-4 font-bold">Working Days</h3>
          <p>Monday – Saturday</p>

          <h3 className="mt-2 font-bold">Working Hours</h3>
          <p>9:00 AM – 8:00 PM</p>
        </div>

        <ContactForm />

      </div>
    </main>
  );
}
