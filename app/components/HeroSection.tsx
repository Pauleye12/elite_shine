import React from "react";
import {
  ArrowRight,
  CallUs,
  HeroFacebook,
  HeroInstagram,
  HeroTiktok,
} from "./SVGs";
const HeroSection = () => {
  return (
    <div className="heroBG max-h-screen flex justify-center items-center h-full pt-[90px] px-[50px]  w-full">
      <div className="max-w-[1500px] flex justify-between items-center w-full ">
        <div className="max-w-[600px] w-full text-white flex flex-col gap-2 ">
          <h2>Bringing the Shine to You</h2>
          <h1 className="text-[50px] font-bold  ">
            Elite Mobile and Unit-Based Car Detailing
          </h1>
          <div className="flex mt-10 gap-4 items-center   ">
            <button className="bg-[#C7361D] text-[20px] font-medium items-center flex gap-2 px-3 py-2   ">
              Book an Appointment <ArrowRight />{" "}
            </button>
            <div className="flex gap-[2px] text-[18px] font-medium items-center ">
              <CallUs />
              <div className="flex flex-col">
                <p>Call us now </p>
                <p>+44 79 0492 9935</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 ">
          <a
            href="http://"
            className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroInstagram />
          </a>
          <a
            href="http://"
            className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroTiktok />
          </a>
          <a
            href="http://"
            className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
