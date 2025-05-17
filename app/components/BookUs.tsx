import { Link } from "react-router";
import { ArrowRight } from "./SVGs";
import { usePopUp } from "~/Context/PopUpContext";
import { motion } from "motion/react";

// VARIANT

const buttonVariant = {
  initial: {
    opacity: 0,
    scale: 0.4,
    y: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const BookUs = () => {
  const { setIsOpen, setPopUpMode } = usePopUp();
  return (
    <div className="w-full bookNowBg bg-cover bg-no-repeat flex justify-center py-[80px] md:py-[170px] px-[30px] md:px-[100px] ">
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-5 ">
        <h1 className="lg:text-[60px] text-2xl md:text-[40px] font-bold text-white text-center w-full ">
          JOIN DOZENS OF SATISFIED CAR OWNERS WHO TRUST ELITE SHINE
        </h1>
        <div className="flex flex-col md:flex-row gap-5 items-center text-white text-xl font-medium ">
          <motion.button
            variants={buttonVariant}
            initial="initial"
            whileInView="animate"
            onClick={() => {
              setIsOpen(true), setPopUpMode("booking");
            }}
            className="px-4 py-3 w-full md:w-fit bg-[#C7361D]  "
          >
            BOOK NOW
          </motion.button>
          <motion.div
            variants={buttonVariant}
            initial="initial"
            whileInView="animate"
          >
            <Link
              to="/services"
              className="px-4 border border-white flex gap-2 py-3 bg-transparent items-center "
            >
              SEE OUR SERVICES <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookUs;
