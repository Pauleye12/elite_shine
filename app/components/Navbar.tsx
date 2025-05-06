import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" w-full fixed top-0 left-0 right-0 z-10 flex border-b border-white justify-center px-[50px] py-5 items-center">
      <div className=" w-full max-w-[1500px] flex justify-between items-center">
        <div>
          <img src="/nav_logo.png" alt="Elite Shine Logo" />
        </div>
        <div className="flex gap-7 max-w-[400px] w-full font-medium text-lg justify-between ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
        <button className="bg-[#C7361D] text-white px-5 py-3 text-lg font-medium ">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
