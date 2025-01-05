import React from "react";
import Container from "../Container";
import Vision from "./Vision";

const Mission = () => {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-24">
      <Container>
        <div className="mx-auto px-28">
          <div className="flex items-center gap-20">
            <div className="lg:w-1/2">
              <div className="flex">
                <div className="imageWidget">
                  <img
                    className="relative max-w-[200px] rounded-lg"
                    src="//images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800"
                    alt="Mission Image 1"
                  />
                </div>
                <div className="imageWidget">
                  <img
                    className="ml-5 max-w-[353px] rounded-md"
                    src="//images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800"
                    alt="Mission Image 2"
                  />
                </div>
                <div className="imageWidget">
                  <img
                    className="relative max-w-[200px] top-[310px] right-[570px] rounded-lg"
                    src="//images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800"
                    alt="Mission Image 3"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-left">
              <h2 className="text-base font-light mb-3">
                Our Mission{" "}
                <span className="text-5xl block font-medium">
                  Bringing Innovation to Tokyo
                </span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed">
                Our mission is to drive technological advancement in Tokyo by
                providing state-of-the-art products and services that empower
                businesses and individuals to thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
