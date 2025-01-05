import React from "react";
import Container from "../Container";

const SellingPoints = () => {
  return (
    <section className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/sellingpoints/hp_02.webp')] bg-cover bg-center w-full min-h-[80vh]">
      <Container className="flex flex-col py-24 ">
        <h2 className="text-base text-white font-light mb-3">
          Our Selling Points<span className="text-zinc-200">.</span>
        </h2>
        <h1 className="text-5xl mb-3">How are we different?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-[2.5rem]">
          {/* Card 1 */}
          <div className="text-justify relative bg-transparent backdrop-blur-md border-solid border-[1px] border-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <div>
              <h3 className="text-6xl">
                01{" "}
                <span className="text-2xl font-semibold block">
                  Multilinguals
                </span>
              </h3>
            </div>
            <p className="mt-2 leading-relaxed">
              Our expert teams are composed of multilingual members who are
              always ready to provide high-level business communication to
              clients in Japanese, English, Chinese, and Filipino.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-justify relative bg-transparent backdrop-blur-md border-solid border-[1px] border-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <div>
              <h3 className="text-6xl">
                02
                <span className="text-2xl font-semibold block">
                  High-quality & Low-cost
                </span>
              </h3>
            </div>
            <p className="mt-2 leading-relaxed">
              We blend offshore development in Cebu with Japan-based expertise,
              providing price-competitive system development with Japan-level
              quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-justify relative bg-transparent backdrop-blur-md border-solid border-[1px] border-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <div>
              <h3 className="text-6xl">
                03
                <span className="text-2xl font-semibold block">
                  Team of Experts
                </span>
              </h3>
            </div>
            <p className="mt-2 leading-relaxed">
              Our team of 120+ elite members bring experience from consulting
              engagements and expertise in advanced AI &amp; IoT technology.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SellingPoints;
