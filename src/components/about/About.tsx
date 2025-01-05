import React from "react";
import Container from "../Container";
import Mission from "./Mission";
import Vision from "./Vision";
import Service from "../services/Services";
import Footer from "../home/Footer";
import Achievements from "./Achievements";
import GlobalPresence from "./GlobalPresence";

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

      {/* Global Presence Section */}
      <GlobalPresence />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
