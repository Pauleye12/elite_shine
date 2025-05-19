import { Link } from "react-router";
import { ArrowLink } from "./SVGs";
import { motion } from "motion/react";

// VARIANTS

const serviceCardVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const ServicesCard = ({
  id,
  title,
  description,
  image,
}: {
  id: number;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <motion.div
      variants={serviceCardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`flex lg:max-w-[600px] w-full px-3 md:px-10 py-8 h-[300px] md:h-[450px] items-start flex-col justify-between  bg-cover bg-center bg-no-repeat text-white font-bold`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="text-2xl md:text-[38px] w-full ">0{id}</p>
      <div className="flex flex-col w-full items-start gap-3">
        <h1 className=" text-2xl md:text-[38px]">{title}</h1>
        <div className="flex justify-between w-full items-end gap-5 ">
          <p className="md:text-[20px] max-w-[170px] md:max-w-[300px] w-full font-light ">
            {description}
          </p>
          <Link
            className="bg-white rounded-full flex justify-center items-center w-[40px] h-[40px]"
            to={"/services"}
          >
            {" "}
            <ArrowLink />{" "}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
