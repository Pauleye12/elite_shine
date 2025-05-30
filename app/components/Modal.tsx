import React from "react";
import { usePopUp } from "~/Context/PopUpContext";
import { motion } from "motion/react";

// VARIANTS
const modalVariant = {
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
const Modal = () => {
  const { setConfirmedModalOpen } = usePopUp();
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-5 bg-[#00000061] ">
      <motion.div
        variants={modalVariant}
        initial="initial"
        animate="animate"
        className="flex flex-col pt-8 px-4 py-5 w-full items-center gap-5 bg-white rounded-xl "
      >
        <h1 className="text-center text-xl lg:text-2xl text-[#C7361D] font-bold ">
          Thank you for your request!
        </h1>
        <p className="text-gray-700 text-lg text-center max-w-[600px] w-full ">
          Your Order has been successfully taken, we will reach out through your
          provided email (Do Well to also check you spam folder).
        </p>

        <button
          onClick={() => setConfirmedModalOpen(false)}
          className="bg-[#C7361D] text-lg font-medium mt-4 text-white py-2 px-7  "
        >
          Ok
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
