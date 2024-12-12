import React from "react";
import Container from "../Container";

const Header = () => {
  return (
    <header className="">
      <Container>
        <div className="float-left pt-10 flex justify-between w-full">
          <a className="z-20" href="index.html">
            <img className="w-[190px]" src="/logo/cartridge_logo_w.png" />
          </a>

          <div className="z-20 relative gap-14 flex-row justify-center hidden md:flex">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Services</a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
