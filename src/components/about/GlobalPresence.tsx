import React from "react";
import Container from "../Container";

const GlobalPresence = () => {
  return (
    <section className="relative py-16 bg-[url(https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:bg-black/70 before:w-full before:h-full before:left-0 before:top-0 before:z-10">
      <Container>
        <div className="container mx-auto px-4 z-20 relative">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
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
                <h3 className="font-bold text-lg mb-2">{location.city}</h3>
                <p className="text-sm text-gray-500">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GlobalPresence;
