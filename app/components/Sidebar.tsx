import React from "react";
import { Link } from "react-router";
import { ArrowRight, CloseIcon } from "./SVGs";
import { usePopUp } from "~/Context/PopUpContext";

const Sidebar = ({
  setOpenSideBar,
}: {
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setIsOpen, setPopUpMode } = usePopUp();
  return (
    <div className="bg-[#00000061] z-50 w-full fixed top-0 left-0 h-screen lg:hidden ">
      <div className="h-screen max-w-[300px] bg-white relative py-[70px]  ">
        <button
          className=" flex justify-center items-center absolute right-[20px] top-[30px] "
          onClick={() => setOpenSideBar(false)}
        >
          <CloseIcon />
        </button>
        <div className="w-full flex flex-col ">
          <Link
            onClick={() => setOpenSideBar(false)}
            className="py-5 px-4 w-full font-medium text-lg text-black border-b-[0.5px] border-[#454545] "
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpenSideBar(false)}
            className="py-5 px-4 w-full font-medium text-lg text-black border-b-[0.5px] border-[#454545] "
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setOpenSideBar(false)}
            className="py-5 px-4 w-full font-medium text-lg text-black border-b-[0.5px] border-[#454545] "
            to="/services"
          >
            Service
          </Link>
          <Link
            onClick={() => setOpenSideBar(false)}
            className="py-5 px-4 w-full font-medium text-lg text-black border-b-[0.5px] border-[#454545] "
            to="/contact"
          >
            Contact
          </Link>
          <button
            onClick={() => {
              setIsOpen(true), setPopUpMode("booking"), setOpenSideBar(false);
            }}
            className="bg-[#C7361D] w-fit mt-5 pl-5 hover:bg-[#c7371da0] transition-all flex gap-2 duration-400 text-white px-6 py-3 text-xl font-medium "
          >
            Get a Quote <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
