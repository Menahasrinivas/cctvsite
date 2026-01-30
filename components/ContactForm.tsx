"use client";
import { useState } from "react";
import { clean } from "@/lib/validate";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    website: "" // honeypot
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Honeypot anti-spam
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
      <input required placeholder="Name"
        onChange={e=>setData({...data,name:e.target.value})}
        className="border p-2 w-full"/>

      <input required placeholder="Phone"
        onChange={e=>setData({...data,phone:e.target.value})}
        className="border p-2 w-full"/>

      <input required placeholder="Email"
        onChange={e=>setData({...data,email:e.target.value})}
        className="border p-2 w-full"/>

      <textarea required placeholder="Message"
        onChange={e=>setData({...data,message:e.target.value})}
        className="border p-2 w-full"/>

      {/* honeypot */}
      <input type="text"
        className="hidden"
        onChange={e=>setData({...data,website:e.target.value})}/>

      <button className="bg-blue-600 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
