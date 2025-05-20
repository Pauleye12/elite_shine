import { CallUs, HeroFacebook, HeroInstagram, HeroTiktok } from "./SVGs";
import PrimaryBtn from "./PrimaryBtn";
import { usePopUp } from "~/Context/PopUpContext";
import { easeOut, motion } from "motion/react";

// VARIANTS
const heroTextVariant = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      delay: 0.5,
      ease: easeOut,
      when: "beforeChildren",
    },
  },
};

const heroButtonVariant = {
  initial: {
    scale: 0,
    opacity: 0,
    x: "-100%",
  },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      delay: 0.3,
      ease: easeOut,
    },
  },
};

const heroSocialVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.1,
      delay: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.25,
      staggerDirection: -1,
    },
  },
};

const heroSocialBtnVariant = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.35,

      ease: easeOut,
    },
  },
};

const HeroSection = () => {
  const { setIsOpen, setPopUpMode } = usePopUp();
  return (
    <div className="heroBG  flex justify-center items-center md:h-screen lg:pt-[90px] py-[130px] pb-[100px] lg:py-0 lg:pb-0 px-[30px] md:px-[60px]  w-full">
      <div className="max-w-[1200px] flex justify-between items-center w-full ">
        <motion.div
          variants={heroTextVariant}
          initial="initial"
          animate="animate"
          className="lg:max-w-[700px] max-w-[500px] w-full text-white flex flex-col gap-2 "
        >
          <h2 className="lg:text-[28px] text-xl font-medium ">
            Bringing the Shine to You
          </h2>
          <h1 className="md:text-[40px] lg:text-[70px] text-3xl leading-[30px] md:leading-[50px] lg:leading-[80px] font-bold  ">
            Elite Mobile and Unit-Based Car Detailing
          </h1>
          <div className="flex mt-[60px] flex-col md:flex-row lg:mt-10 gap-4 md:items-center   ">
            <motion.div
              variants={heroButtonVariant}
              onClick={() => {
                setIsOpen(true), setPopUpMode("booking");
              }}
            >
              <PrimaryBtn content="Book an Appointment" />
            </motion.div>

            <div className="flex gap-[4px] text-[18px] font-medium items-center ">
              <CallUs />
              <div className="flex flex-col">
                <p>Call us now </p>
                <p>+44 79 0492 9935</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={heroSocialVariant}
          initial="initial"
          animate="animate"
          className="md:flex hidden flex-col gap-8 "
        >
          <motion.a
            variants={heroSocialBtnVariant}
            href="https://www.instagram.com/elite_shine_mcr"
            className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroInstagram />
          </motion.a>
          <motion.a
            variants={heroSocialBtnVariant}
            href="https://www.tiktok.com/@eliteshine_mcr?_t=ZM-8wVYyGDSK40&_r=1"
            className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroTiktok />
          </motion.a>
          <motion.a
            variants={heroSocialBtnVariant}
            href="https://www.facebook.com/share/15PsZDfM4u/"
            className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroFacebook />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
