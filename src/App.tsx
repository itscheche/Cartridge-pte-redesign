import { useState } from "react";
import "./App.css";
import Header from "./components/home/Header";
import Banner from "./components/home/Banner";
import WhoWeAre from "./components/home/WhoWeAre.";
import Service from "./components/home/Service";
import SellingPoints from "./components/home/SellingPoints";
import Contact from "./components/home/Contact";

function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <Banner />
        <WhoWeAre />
        <Service />
        <SellingPoints />
        <Contact />
      </div>
    </>
  );
}

export default App;
