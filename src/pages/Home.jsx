import React from "react";
import hero from "../assets/images/hero.svg";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <div className="mx-[5%]">
      <div className="flex justify-center items-center">
        <img src={hero} alt="" className="mt-2" />
      </div>
      <InfoSection />
    </div>
  );
};

export default Home;
