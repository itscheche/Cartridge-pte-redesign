import { useState } from "react";
import "./App.css";
import Header from "./components/home/Header";
import Banner from "./components/home/Banner";
import WhoWeAre from "./components/home/WhoWeAre.";

function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <Banner />
        <WhoWeAre />
      </div>
    </>
  );
}

export default App;
