import React, { useState } from "react";
import Container from "../Container";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending the data to an API
    console.log(formData);
  };

  return (
    <section className="relative bg-[#18181a]">
      <Container className="flex flex-col py-24">
        <h2 className="text-base text-white font-light mb-3">
          Contact Us<span className="text-zinc-200">.</span>
        </h2>
        <h1 className="text-3xl mb-3">Have an inquiry? Let's get in touch !</h1>

        <div className="flex justify-between flex-row gap-9 my-6">
          <form
            className="bg-[#222224] shadow-md rounded-lg p-8 max-w-3xl w-full"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Organization Name
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-[#bec0c2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-[#bec0c2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-[#bec0c2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-[#bec0c2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Phone No</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-[#bec0c2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-gray-300 bg-[#bec0c2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label className="font-medium">
                I consent to the Personal Information Protection Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Submit
            </button>
          </form>

          <div className="flex flex-col gap-12">
            <div>
              <p className="text-base">
                CARTRIDGE provides a simple information management platform
                along with easy-to-use applications by simply unraveling the
                state of information in the world.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-3">Contact Info</h3>
              <ul>
                <li className="relative pl-[2em] before:absolute before:content-['\f0e0'] before:left-0 before:text-[1.1rem] before:font-[fontAwesome]">
                  <a href="">info@sg-cartridge.com</a>
                </li>
                <li>
                  <a href="">
                    12 EU Tong Sen Street, #07-172 The Central, Singapore
                    (059819)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </section>
  );
};

export default Contact;
