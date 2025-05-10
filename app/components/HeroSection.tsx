import React from "react";
import {
  ArrowRight,
  CallUs,
  HeroFacebook,
  HeroInstagram,
  HeroTiktok,
} from "./SVGs";
import PrimaryBtn from "./PrimaryBtn";
const HeroSection = () => {
  return (
    <div className="heroBG max-h-screen flex justify-center items-center h-full pt-[90px] px-[60px]  w-full">
      <div className="max-w-[1200px] flex justify-between items-center w-full ">
        <div className="max-w-[600px] w-full text-white flex flex-col gap-2 ">
          <h2 className="text-2xl font-medium ">Bringing the Shine to You</h2>
          <h1 className="text-[60px] leading-[70px] font-bold  ">
            Elite Mobile and Unit-Based Car Detailing
          </h1>
          <div className="flex mt-10 gap-4 items-center   ">
            <PrimaryBtn content="Book an Appointment" />
            <div className="flex gap-[4px] text-[18px] font-medium items-center ">
              <CallUs />
              <div className="flex flex-col">
                <p>Call us now </p>
                <p>+44 79 0492 9935</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 ">
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
