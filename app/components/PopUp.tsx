import React from "react";
import { usePopUp } from "~/Context/PopUpContext";
import BookAService from "./BookAService";
import Subscription from "./Subscription";
import { CloseIcon } from "./SVGs";
import { easeOut, motion } from "motion/react";

// VARIANTS
const popUpVariant = {
  initial: {
    scale: 0.2,
    opacity: 0,
    x: "100%",
    y: "-100%",
  },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const PopUp = () => {
  const { isOpen, setIsOpen, popUpMode, setPopUpMode } = usePopUp();
  return (
    <div className="bg-[#00000061] z-50 w-full fixed top-0 left-0 h-screen flex justify-center items-center px-7 py-4 ">
      <motion.div
        variants={popUpVariant}
        initial="initial"
        animate="animate"
        className="bg-[#EBEBEB] max-w-[700px] w-full px-[50px] py-[50px] relative flex justify-center flex-col gap-5  "
      >
        <button
          onClick={() => setIsOpen(false)}
          className=" flex justify-center items-center absolute right-[50px] top-[30px] "
        >
          <CloseIcon />
        </button>
        <div className="w-full justify-center items-center flex  ">
          {popUpMode === "booking" ? (
            <h1 className="text-[#000000] font-bold text-[55px]  ">
              Book a <span className="text-[#C7361D]">Service</span>
            </h1>
          ) : (
            <h1 className="text-[#000000] font-bold text-[55px]  ">
              Monthly <span className="text-[#C7361D]">Subscription</span>
            </h1>
          )}
        </div>

        <div className="w-full flex justify-center items-center gap-4 ">
          <button
            onClick={() => setPopUpMode("booking")}
            className="rounded-full p-1.5 bg-transparent border-2 border-[#C7361D] flex justify-center items-center  "
          >
            <span
              className={`w-4.5 h-4.5 rounded-full ${
                popUpMode === "booking" ? "bg-[#C7361D]" : "bg-transparent"
              } `}
            ></span>
          </button>

          <button
            onClick={() => setPopUpMode("subscription")}
            className="rounded-full p-1.5 flex justify-center items-center bg-transparent border-2 border-[#C7361D] "
          >
            <span
              className={`w-4.5 h-4.5 rounded-full ${
                popUpMode === "subscription" ? "bg-[#C7361D]" : "bg-transparent"
              } `}
            ></span>
          </button>
        </div>

        <div className="w-full  ">
          {popUpMode === "booking" ? <BookAService /> : <Subscription />}
        </div>
      </motion.div>
    </div>
  );
};

export default PopUp;
