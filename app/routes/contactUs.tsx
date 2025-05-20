import React from "react";
import ContactForm from "~/components/ContactForm";
import OurContact from "~/components/OurContact";

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

const contactUs = () => {
  return (
    <motion.div
      variants={aboutPageVariant}
      initial="initial"
      animate="animate"
      className="flex flex-col pt-[50px] md:pt-[80px] w-full"
    >
      <ContactForm />
      <OurContact />
    </motion.div>
  );
};

export default contactUs;
