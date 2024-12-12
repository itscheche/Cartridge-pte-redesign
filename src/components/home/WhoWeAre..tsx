import React from "react";
import Container from "../Container";

const WhoWeAre = () => {
  return (
    <section className="relative bg-[#1b2026]">
      <Container className="flex flex-wrap gap-5 py-24">
        <div className="py-10 flex-1 min-w-[300px]">
          <h2 className="text-3xl text-white font-light">
            Who We Are<span className="text-zinc-200">.</span>
          </h2>
          <h1 className="text-5xl mb-3">
            Preparing for your success trusted source in IT services
          </h1>
          <p className="mb-10">
            CARTRIDGE focuses on Developing Technology & Consulting services.
          </p>
          <ul className="flex flex-col gap-5 custom-ul-box">
            <li>
              <p>
                We also have offices in Japan (Tokyo, Hakata, Okinawa) &
                Philippines (Cebu) with our highly experienced professionals.
              </p>
            </li>
            <li>
              <p>
                We incorporate an economically-progressive, global IT workforce
                development network to Singapore & global market.
              </p>
            </li>
            <li>
              <p>
                We seek to continue providing truly valuable professional
                services.
              </p>
            </li>
          </ul>
          <a
            href=""
            className="bg-white px-8 py-4 inline-block mt-6 text-gray-700 hover:scale-[1.05] hover:text-gray-700 transition-transform rounded-[28rem]"
          >
            Know More
          </a>
        </div>
        <div className="flex-1 min-w-[300px] flex justify-center items-center">
          <img className="max-w-full h-auto" src="/aboutus/hp_08.webp" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
