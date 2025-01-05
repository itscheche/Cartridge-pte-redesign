import React from "react";
import Container from "../Container";

const Vision = () => {
  return (
    <section className="relative w-full overflow-hidden pt-24 pb-56">
      <Container>
        <div className="mx-auto px-28">
          <div className="flex items-center gap-20">
            <div className="lg:w-2/5">
              <h2 className="text-base font-light mb-3">
                Our Vision
                <span className="text-5xl block font-medium">Look Further</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed">
                Revolutionizing work environments through evolution and
                continuous improvement, ensuring our clients achieve their goals
                with unparalleled efficiency.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="imageWidget">
                <img
                  className="absolute w-full -top-[500px] mt-[420px] right-0 h-[540px] max-w-[360px] rounded-md"
                  src="//images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Vision Image 1"
                />
              </div>
              <div className="imageWidget">
                <img
                  className="relative w-full left-[50px] top-[160px] rounded-2xl max-w-[300px]"
                  src="//images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Vision Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Vision;
