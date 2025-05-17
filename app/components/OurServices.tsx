import ServicesCard from "./ServicesCard";
import { motion } from "motion/react";

const OurServicesData = [
  {
    id: 1,
    title: "Exterior Refresh",
    description: "Premium wash that leaves your car looking flawless.",
    image: "/exteriorRefresh.png",
  },
  {
    id: 2,
    title: "Mini Valet",
    description: "A quick refresh with attention to detail.",
    image: "/miniValet.png",
  },
  {
    id: 3,
    title: "Full Valet",
    description: "A complete interior and exterior transformation.",
    image: "/fullValet.png",
  },
  {
    id: 4,
    title: "Interior Detail",
    description: "Deep clean that revives your cabin to perfection.",
    image: "/interiorDetail.png",
  },
];

// const cardContainerVariant = {
//   initial: {
//     opacity: 1,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       duration: 0.1,
//       when: "beforeChildren",
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

const OurServices = () => {
  return (
    <div className="w-full flex md:py-[100px] py-[50px] bg-white  justify-center items-center px-[20px] md:px-[60px]  ">
      <div className="max-w-[1200px]  w-full items-start justify-between flex flex-col lg:flex-row gap-12 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          className="flex flex-col w-full gap-10 items-start "
        >
          <h1 className="text-headingMD md:text-headingLG   font-bold max-w-[326px] w-full leading-[70px] text-black ">
            Our <span className="text-[#c7361d] ">Services</span>
          </h1>

          <div className="w-full flex lg:hidden flex-col gap-10 ">
            {OurServicesData.map((data) => (
              <ServicesCard key={data.id} {...data} />
            ))}
          </div>
          <div className="lg:flex hidden flex-col w-full gap-10 items-start ">
            <ServicesCard key={OurServicesData[0].id} {...OurServicesData[0]} />
            <ServicesCard key={OurServicesData[2].id} {...OurServicesData[2]} />
          </div>
        </motion.div>
        <div className="w-full flex items-end justify-end  flex-col gap-10 ">
          <div className="w-full hidden lg:flex items-end justify-end  flex-col gap-10 ">
            <ServicesCard key={OurServicesData[1].id} {...OurServicesData[1]} />
            <ServicesCard key={OurServicesData[3].id} {...OurServicesData[3]} />
          </div>

          <div className="md:flex hidden  w-full justify-between items-center">
            <p className="text-lg w-full max-w-[250px] uppercase font-light text-black flex items-center leading-[22px] gap-2 ">
              <span className="text-[38px] text-[#C7361D] font-bold ">
                250%
              </span>
              <span className="flex flex-col items-start">
                cleaner <span>interior feel</span>
              </span>
            </p>
            <p className="text-lg w-[250px] leading-[22px] font-light uppercase text-black flex items-center gap-2 xl:text-end ">
              <span className="text-[38px] text-[#C7361D] font-bold ">
                2.5X
              </span>
              <span className="flex flex-col items-start">
                longer <span>shine retention</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
