import { HeroFacebook, HeroInstagram, HeroTiktok, WhatsappIcon } from "./SVGs";
import { Link } from "react-router";
import { usePopUp } from "~/Context/PopUpContext";
import { motion } from "motion/react";

// VARIANTS

const footerWrapperVariant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0,
      staggerChildren: 0.15,
    },
  },
};

const footerItemsVariants = {
  initial: {
    x: -70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",

      duration: 0.25,
    },
  },
};

const Footer = () => {
  const { setIsOpen, setPopUpMode } = usePopUp();
  return (
    <div className="w-full bg-[#0D0C0C] flex flex-col pt-[80px] md:pt-[130px] justify-center items-center gap-12">
      <div className="w-full px-[30px] md:px-[60px] flex justify-center items-center ">
        <div className="max-w-[1200px] flex flex-col md:flex-row gap-14 md:gap-0 justify-between items-start  w-full">
          <div className="flex flex-col gap-10">
            <div>
              <img
                className="object-cover w-[150px] lg:w-full "
                src="/footerLogo.png"
                alt=""
              />
            </div>
            <p className="font-medium max-w-[350px] w-full text-white lg:text-[22px]">
              Revitalize Your Ride with Our Premium Services
            </p>
            <div className="flex gap-4 md:gap-8 items-center mt-3 ">
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
              <a
                href="http://"
                className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>
          <div className="text-white flex flex-col items-start md:gap-9 gap-5 ">
            <h1 className="font-medium text-2xl lg:text-[34px]  ">
              Quick Links
            </h1>
            <motion.ul
              variants={footerWrapperVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col font-medium lg:text-[22px] items-start gap-7 "
            >
              <motion.li
                variants={footerItemsVariants}
                viewport={{ once: true }}
                className="hover:text-[#c7361d] transition-all duration-400 "
              >
                <Link to={"/"}>Home</Link>
              </motion.li>
              <motion.li
                variants={footerItemsVariants}
                className="hover:text-[#c7361d] transition-all duration-400 "
              >
                <Link to={"/about"}>About Us</Link>
              </motion.li>
              <motion.li
                variants={footerItemsVariants}
                className="hover:text-[#c7361d] transition-all duration-400 "
              >
                <Link to={"/services"}>Services</Link>
              </motion.li>
              <motion.li
                variants={footerItemsVariants}
                onClick={() => {
                  setIsOpen(true), setPopUpMode("booking");
                }}
                className=" cursor-pointer hover:text-[#c7361d] transition-all duration-400  "
              >
                Book an Appointment
              </motion.li>
            </motion.ul>
          </div>
          <div className="text-white flex flex-col items-start gap-9 ">
            <h1 className="font-medium text-2xl lg:text-[34px]   ">
              Legal & Privacy
            </h1>
            <motion.ul
              variants={footerWrapperVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col font-medium lg:text-[22px] items-start gap-7 "
            >
              <motion.li variants={footerItemsVariants}>
                <Link to={""}>Privacy Policy</Link>
              </motion.li>
              <motion.li variants={footerItemsVariants}>
                <Link to={""}>Terms & Conditions</Link>
              </motion.li>
              <motion.li variants={footerItemsVariants}>
                <Link to={""}>Accessibility Statement</Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white flex w-full justify-center items-center py-10 px-[30px] md:px-[60px] text-white font-medium text-sm md:text-xl lg:text-[24px] ">
        <p>Copyright ©2025, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
