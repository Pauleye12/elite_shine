import JoinAPlan from "~/components/JoinAPlan";
import OurPackages from "~/components/OurPackages";
import OurServices2 from "~/components/OurServices2";

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

const services = () => {
  return (
    <motion.div
      variants={aboutPageVariant}
      initial="initial"
      animate="animate"
      className="flex flex-col pt-[50px] md:pt-[80px] w-full"
    >
      <OurServices2 />
      <OurPackages />
      <JoinAPlan />
    </motion.div>
  );
};

export default services;
