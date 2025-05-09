/** @format */

import React from "react";
import bg from "../assets/Images/image-2.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white bg-black/35">
      <img
        src={bg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="h-[80vh] flex flex-col justify-center items-center gap-10 text-center w-full max-w-6xl mx-auto">
        <h1 className="text-7xl">Bitumen Cleaning and Oil-Based Mud (OBM).</h1>
        <h3 className="text-5xl text-[#b0b0fd]">Quality you can trust</h3>
        <p className="text-4xl">
          We deliver Solutions that meets your Expectation
        </p>

        <button className="bg-[#eb1e23] text-white p-5 px-20 text-4xl rounded-xl w-max">
          Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
