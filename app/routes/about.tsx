import React from "react";
import AboutUs from "~/components/AboutUs";
import BookUs from "~/components/BookUs";

import MeetTeam from "~/components/MeetTeam";
import WhyChooseUs from "~/components/WhyChooseUs";

import { motion } from "motion/react";

const aboutPageVariant = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const about = () => {
  return (
    <motion.div
      variants={aboutPageVariant}
      initial="initial"
      animate="animate"
      className="flex flex-col pt-[50px] md:pt-[80px] w-full"
    >
      <AboutUs />
      <WhyChooseUs />
      <BookUs />
      <MeetTeam />
    </motion.div>
  );
};

export default about;
