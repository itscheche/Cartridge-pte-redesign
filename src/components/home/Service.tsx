import React, { useState, useEffect } from "react";
import Container from "../Container";

const useTypingEffect = (items, typingSpeed = 100, pauseDuration = 2000) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentService = items[currentIndex];

    const handleTyping = () => {
      setCurrentText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentService.slice(0, prev.length + 1)
      );

      if (!isDeleting && currentText === currentService) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, items]);

  return currentText;
};

const Service = () => {
  const services = [
    "IT Consulting",
    "Technology Consulting",
    "Data Analytics",
    "System Integration",
    "Joint Development",
  ];
  const currentText = useTypingEffect(services, 100);

  return (
    <section
      className="text-black bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('/path-to-your-background.jpg')] bg-cover bg-center opacity-20"></div>

      <Container className="py-24 relative z-10">
        <h2
          id="services-heading"
          className="text-base font-light mb-3 text-gray-600"
        >
          Services We Offer<span className="text-indigo-500">.</span>
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          We Specialize in{" "}
          <span
            className="block text-6xl md:text-[5.5rem] uppercase tracking-wide"
            style={{ minHeight: "1em" }} // Reserve space for text
            aria-live="polite"
          >
            <span className="inline-block transition-opacity duration-300 opacity-100">
              {currentText || "\u00A0"} {/* Prevents height collapse */}
            </span>
          </span>
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-base text-gray-700 leading-relaxed max-w-5xl">
            CARTRIDGE provides one-stop service from IT strategy planning and
            digital transformation to system implementation and maintenance. We
            leverage the latest technologies, backed by our in-house solution
            development, to deliver effective and innovative results.
          </p>
          <a href="" className="bg-black block p-5 rounded-[28rem]">
            Check out all details
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Service;
