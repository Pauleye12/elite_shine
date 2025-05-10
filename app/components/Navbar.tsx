import { useState, useEffect } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-10 flex border-b border-white justify-center px-[60px] py-5 items-center ${
        scrolled ? "bg-[#000000e1]" : "bg-transparent"
      }`}
    >
      <div className=" w-full max-w-[1200px] flex justify-between items-center">
        <div>
          <img src="/nav_logo.png" alt="Elite Shine Logo" />
        </div>
        <div className="flex gap-7 max-w-[400px] w-full font-medium text-white text-xl justify-between ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
        <button className="bg-[#C7361D] text-white px-6 py-3 text-xl font-medium ">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
