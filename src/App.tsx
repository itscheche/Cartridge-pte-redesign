import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/home/Header";
import Banner from "./components/home/Banner";
import Container from "./components/Container";
import WhoWeAre from "./components/home/WhoWeAre.";

function App() {
  const [count, setCount] = useState(0);

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
