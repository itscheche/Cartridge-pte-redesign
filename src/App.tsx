import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/home/Header";
import Banner from "./components/home/Banner";
import WhoWeAre from "./components/home/WhoWeAre.";
import Service from "./components/home/Service";
import SellingPoints from "./components/home/SellingPoints";
import Contact from "./components/home/Contact";
import AboutUs from "./components/about/About"; // Import your AboutUs component
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Router>
        <div className="relative font-montserrat">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <WhoWeAre />
                  <Service />
                  <SellingPoints />
                  <Contact />
                </>
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
