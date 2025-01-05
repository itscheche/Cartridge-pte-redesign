import React from "react";
import Container from "../Container";

const Achievements = () => {
  return (
    <section className="relative bg-slate-100">
      <Container>
        <div className="mx-auto px-28 py-10 text-black">
          <ul className="flex flex-row items-center text-center gap-12 justify-evenly">
            <li>
              <h1 className="text-7xl font-black mb-5">
                40
                <span>+</span>
              </h1>
              <p className="text-xl">happy clients</p>
            </li>
            <li>
              <h1 className="text-7xl font-black mb-5">
                120
                <span>+</span>
              </h1>
              <p className="text-xl">successful projects</p>
            </li>
            <li>
              <h1 className="text-7xl font-black mb-5">
                120
                <span>+</span>
              </h1>
              <p className="text-xl">elite members</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Achievements;
