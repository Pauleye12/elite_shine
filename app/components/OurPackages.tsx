import PrimaryBtn from "./PrimaryBtn";
import PackagesCard from "./PackagesCard";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "./SVGs";

// VARIANTS
const headerVariant = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.35,
    },
  },
};

const packages = [
  {
    price: "£79.99/Month",
    name: "Basic Plan",
    details:
      "Two full valets a month and more — ideal for regular drivers. Join now and stay polished!",
    different: false,
  },
  {
    price: "£139.99/Month",
    name: "Premium Plan",
    details:
      "Four full valets, engine bay clean, and perks — the full works for your car care. Subscribe today!",
    different: false,
  },
  {
    price: "Starting at £9.99",
    name: "Add-Ons",
    details:
      "Pet hair removal to ceramic coating — enhance your service with premium upgrades!",
    different: true,
  },
];
const OurPackages = () => {
  return (
    <div className="flex bg-[#0D0C0C] justify-center items-center px-5 md:px-[60px] md:py-[100px] py-[50px]  ">
      <div className="max-w-[1200px] w-full grid lg:grid-cols-2 grid-cols-1 gap-10 items-center ">
        <div className="flex flex-col gap-5 w-full">
          <motion.h1
            variants={headerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-white text-center lg:text-left font-bold text-headingMD md:text-headingLG  leading-[45px] md:leading-[70px] flex flex-col "
          >
            Choose any of <span className="text-[#C7361D]">Our Packages</span>
          </motion.h1>
          <p className="text-white hidden lg:flex text-xl font-light">
            Our tailored plans and premium extras make it easier than ever to
            keep your vehicle looking its best — with convenience, consistency,
            and care.
          </p>
          <Link className="hidden lg:flex" to="/services">
            <PrimaryBtn content="View all Services" />
          </Link>
        </div>
        {packages.map((item, index) => (
          <PackagesCard key={index} {...item} />
        ))}

        <div className="w-full lg:hidden flex justify-center items-center ">
          <Link
            className=" hover:bg-[#c7371da0] bg-[#C7361D]   transition-all duration-400 text-[20px] text-white font-medium flex w-fit self-center items-center gap-2 px-5 py-4    "
            to="/services"
          >
            View all Services <ArrowRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurPackages;
