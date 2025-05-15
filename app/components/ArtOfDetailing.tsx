import PrimaryBtn from "./PrimaryBtn";
import { Link } from "react-router";
import { motion } from "motion/react";

// VARIANTS
const detailingCard = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const detailingCardContent = {
  initial: {
    opacity: 0,
    scale: 0.5,
    x: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
};

const ArtOfDetailing = () => {
  return (
    <div
      className=" py-[140px] px-[60px] flex justify-center items-center "
      style={{ backgroundImage: `url(/artOfDetailing.png)` }}
    >
      <div className="max-w-[1200px] w-full flex justify-between gap-6 items-center ">
        <div className="flex w-full max-w-[590px] flex-col items-start gap-5">
          <h1 className="text-[65px] w-full leading-[70px] flex flex-col font-bold text-white ">
            {" "}
            WE HAVE MASTERED THE
            <span className="text-[#c7361d]">ART OF DETAILING</span>
          </h1>
          <p className="text-xl text-white font-light">
            Elite Shine provides a variety of customizable services tailored to
            your unique needs.
          </p>
          <Link to="contact">
            <PrimaryBtn content="Contact Us" />
          </Link>
        </div>
        <motion.div
          variants={detailingCard}
          initial="initial"
          whileInView="animate"
          className="backdrop-blur-lg max-w-[550px] w-full bg-[#C7361D1A] border border-white text-white px-9 py-9 flex flex-col items-start gap-5
] "
        >
          <motion.p
            variants={detailingCardContent}
            className="font-bold text-xl "
          >
            Key Benefits:
          </motion.p>
          <motion.p
            variants={detailingCardContent}
            className="font-light text-lg"
          >
            <span className="font-semibold">Detailing with Passion:</span>{" "}
            Expert hands, meticulous detail — your car deserves nothing less.
          </motion.p>
          <motion.p
            variants={detailingCardContent}
            className="font-light text-lg"
          >
            <span className="font-semibold">Eco-Smart Products:</span> Only the
            finest, eco-conscious products for a spotless, safe finish.
          </motion.p>
          <motion.p
            variants={detailingCardContent}
            className="font-light text-lg"
          >
            <span className="font-semibold">Great Value, Always:</span> Top-tier
            service at fair, competitive prices that don’t cut corners.
          </motion.p>
          <motion.p
            variants={detailingCardContent}
            className="font-light text-lg"
          >
            <span className="font-semibold">For All Clients:</span> From
            personal rides to full fleets, we serve both private and commercial
            customers with ease.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtOfDetailing;
