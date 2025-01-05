import React, { useState, useEffect } from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="float-left py-8 flex justify-between w-full">
          <NavLink className="z-20" to="/">
            <img
              className="w-[190px]"
              src="/logo/cartridge_logo_w.png"
              alt="Cartridge Logo"
            />
          </NavLink>

          <div className="z-20 relative gap-14 flex-row justify-center hidden md:flex text-base items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              Services
            </NavLink>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
