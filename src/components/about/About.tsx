import React from "react";
import Container from "../Container";
import Mission from "./Mission";
import Vision from "./Vision";
import Service from "../services/Services";
import Footer from "../home/Footer";
import Achievements from "./Achievements";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url(https://images.pexels.com/photos/7988748/pexels-photo-7988748.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7988748.jpg&fm=jpg)] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:bg-black/75 before:w-full before:h-full before:left-0 before:top-0 before:z-10 text-white py-20">
        <div className="container mx-auto text-center z-20 relative py-36">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Welcome to Cartridge Corporation
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            Established in 2020. We are a member of JG Coportation Group. We
            offer one-stop service from IT strategy planning and digital
            transformation to system implementation and maintenance.
          </p>
        </div>
        <div className="absolute inset-0 bg-opacity-30 bg-black" />
      </section>

      <Achievements />

      <div className="bg-[#242427] text-white">
        {/* Mission & Vision sSection */}
        <Mission />

        {/* Vision Section */}
        <Vision />
      </div>

      {/* Services Section */}
      {/* <Service /> */}

      {/* Global Presence Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
            Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                city: "Singapore",
                address:
                  "12 Eu Tong Sen Street, #07-172 The Central, Singapore 059819",
              },
              {
                city: "Philippines / Cebu",
                address:
                  "Latitude Corporate Center, 15D Mindanao Ave, Cebu City, Cebu, 6000",
              },
              {
                city: "Japan / Tokyo",
                address:
                  "Central Building 5F, 1-1-5 Kyobashi, Chuo-Ku, Tokyo 104-0031",
              },
              {
                city: "Japan / Hakata",
                address:
                  "AS OFFICE Hakata, 1-11-27 Hakata-Eki Minami, Hakata-Ku, Fukuoka 812-0016",
              },
            ].map((location, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  {location.city}
                </h3>
                <p className="text-sm text-gray-500">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            For inquiries, please email us at{" "}
            <a
              href="mailto:info@sg-cartridge.com"
              className="text-indigo-600 underline hover:text-blue-600"
            >
              info@sg-cartridge.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
