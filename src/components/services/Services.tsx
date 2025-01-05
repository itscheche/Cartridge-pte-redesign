import React from "react";
import Container from "../Container";

const Service = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div>
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Comprehensive IT Solutions",
              "Global Project Expertise",
              "Innovative Approaches",
              "Competitive Development",
              "Streamlined Operations",
              "24/7 Customer Support",
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold text-xl text-gray-700 mb-4">
                  {service}
                </h3>
                <p className="text-sm text-gray-500">
                  Tailored solutions to meet your business needs and drive
                  success.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
