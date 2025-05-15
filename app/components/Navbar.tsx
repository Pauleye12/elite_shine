import { NavLink, Link } from "react-router";
import { usePopUp } from "~/Context/PopUpContext";
import { motion } from "motion/react";

// VARIANTS
const navbarVariants = {
  initial: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const navbarItemVariants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      when: "beforeChildren",
      duration: 0.2,
      staggerChildren: 0.2, // Stagger children by .3 seconds
    },
  },
};

const navbarLinksVariants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",

      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const { setIsOpen, setPopUpMode } = usePopUp();

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-10 flex border-b border-white justify-center px-[60px] bg-[#000000e1] py-5 items-center `}
    >
      <motion.div
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className=" w-full max-w-[1200px] flex justify-between items-center"
      >
        <motion.div variants={navbarItemVariants}>
          <Link to="/">
            <img src="/nav_logo.png" alt="Elite Shine Logo" />
          </Link>
        </motion.div>

        <motion.div
          variants={navbarItemVariants}
          className="flex gap-7 max-w-[400px] w-full font-medium text-white text-xl justify-between "
        >
          <motion.div variants={navbarLinksVariants}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#C7361D] underline " : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </motion.div>

          <motion.div variants={navbarLinksVariants}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#C7361D] underline " : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </motion.div>
          <motion.div variants={navbarLinksVariants}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#C7361D] underline " : ""
              }
              to="/services"
            >
              Services
            </NavLink>
          </motion.div>
          <motion.div variants={navbarLinksVariants}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#C7361D] underline " : ""
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </motion.div>
        </motion.div>
        <motion.button
          variants={navbarItemVariants}
          onClick={() => {
            setIsOpen(true), setPopUpMode("booking");
          }}
          className="bg-[#C7361D] hover:bg-[#c7371da0] transition-all duration-400 text-white px-6 py-3 text-xl font-medium "
        >
          Get a Quote
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Navbar;
