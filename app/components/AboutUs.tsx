import { Link } from "react-router";
import { motion } from "motion/react";

// VARIANTs
const leftTextVariants = {
  initial: {
    x: -150,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const rightTextVariants = {
  initial: {
    x: 150,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const AboutUs = () => {
  return (
    <div className="w-full flex pt-[50px] md:pt-[100px] pb-[100px] xl:pb-0 bg-[#ebebeb]  justify-center items-center px-0 md:px-[60px]  ">
      <div className="max-w-[1200px] gap-10 xl:gap-0 w-full items-center flex flex-col ">
        <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:items-start gap-5 justify-between  ">
          <motion.div
            variants={leftTextVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex lg:max-w-[500px] flex-col w-full gap-3 lg:items-start items-center  "
          >
            <h1 className="text-black hidden lg:block text-headingMD md:text-headingLG   font-bold ">
              About <span className="text-[#C7361D]">Us</span>
            </h1>
            <p className="text-[#3D3D3D] lg:max-w-[400px] w-full md:text-[20px] px-5 md:px-0  font-light  ">
              At Elite Shine Detailing Ltd, we specialise in professional car
              valeting and detailing across Bolton and Greater Manchester.
            </p>
          </motion.div>
          <div className=" w-full ">
            <img
              className="object-fit w-full lg:w-fit  "
              src="/aboutUs1.png"
              alt=""
            />
          </div>
          <h1 className="text-black lg:hidden text-headingMD md:text-headingLG   font-bold ">
            About <span className="text-[#C7361D]">Us</span>
          </h1>
        </div>
        <div className="flex w-full flex-col-reverse lg:flex-row-reverse xl:translate-y-[-30px] 2xl:translate-y-[-90px] lg:items-end items-center gap-10 justify-between  ">
          <motion.div
            variants={rightTextVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col lg:max-w-[500px] w-full gap-4 items-start "
          >
            <p className="text-[#3D3D3D] md:text-[20px] font-light px-5 md:px-0 ">
              Whether you’re looking for a quick valet or a full detail, our
              mobile and unit-based service gives your car the VIP treatment —
              at your convenience.
            </p>
            <Link
              to="/services"
              className="border px-5 py-3 self-center border-[#c7361d] text-[#c7361d]  "
            >
              Learn More
            </Link>
          </motion.div>
          <div className="w-full">
            <img
              className="object-fit w-full lg:w-fit "
              src="/aboutUs2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
