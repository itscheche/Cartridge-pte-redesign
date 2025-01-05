import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="float-left pt-10 flex justify-between w-full">
          <Link className="z-20" to="/">
            <img
              className="w-[190px]"
              src="/logo/cartridge_logo_w.png"
              alt="Cartridge Logo"
            />
          </Link>

          <div className="z-20 relative gap-14 flex-row justify-center hidden md:flex text-base">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/services">Services</Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
