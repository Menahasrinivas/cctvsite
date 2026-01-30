"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { clean } from "../lib/validate";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  website: string;
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    website: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (data.website !== "") return;

    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(data.phone)) {
      alert("Invalid phone");
      return;
    }

    if (!emailRegex.test(data.email)) {
      alert("Invalid email");
      return;
    }

    const safeData = {
      name: clean(data.name),
      phone: clean(data.phone),
      email: clean(data.email),
      message: clean(data.message),
    };

    console.log("Safe submit:", safeData);
    alert("Enquiry submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

      <input
        name="name"
        required
        placeholder="Name"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="phone"
        required
        placeholder="Phone"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="email"
        required
        placeholder="Email"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <textarea
        name="message"
        required
        placeholder="Message"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      {/* honeypot */}
      <input
        name="website"
        type="text"
        className="hidden"
        onChange={handleChange}
      />

      <button className="bg-blue-600 text-white px-4 py-2">
        Submit
      </button>

    </form>
  );
}
