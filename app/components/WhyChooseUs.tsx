import { usePopUp } from "~/Context/PopUpContext";

import PrimaryBtn from "./PrimaryBtn";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { ArrowRight } from "./SVGs";

const packages = [
  {
    icon: "/mobileImg.png",
    name: "Mobile & Flexible",
    details:
      "We come to you or welcome you in — convenience is built into our service.",
    different: false,
  },
  {
    icon: "/ecoFriendly.png",
    name: "Eco-Friendly Detailing",
    details:
      "We use low-water methods and eco-friendly products for a safer, smarter clean.",
    different: false,
  },
  {
    icon: "/consistentImg.png",
    name: "Consistent & Reliable",
    details:
      "Rain or shine, our team shows up and delivers excellence every time.",
    different: true,
  },
  {
    icon: "/trustedImg.png",
    name: "Trusted by Client",
    details:
      "From local businesses to private car owners, we’re a name people rely on.",
    different: true,
  },
  {
    icon: "/registerd.png",
    name: "Fully Registered & Insured",
    details:
      "Your car is in safe hands — we’re legit, protected, and professional.",
    different: false,
  },
];
const WhyChooseUs = () => {
  const { setIsOpen, setPopUpMode } = usePopUp();
  return (
    <div className="flex bg-[#0D0C0C] justify-center items-center md:px-[60px] px-[30px] py-[60px] md:py-[120px]  ">
      <div className="max-w-[1200px] w-full grid lg:grid-cols-2 grid-cols-1 gap-10  ">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-white font-bold text-headingMD md:text-headingLG   leading-[70px] text-center lg:text-left lg:flex lg:flex-col ">
            Why{" "}
            <span>
              Choose <span className="text-[#C7361D]">Us</span>
            </span>
          </h1>
          <p className="text-white text-center lg:text-left md:text-xl hidden font-light">
            Experience the perfect blend of professionalism, reliability, and
            eco-conscious care — trusted by car owners and businesses alike.
          </p>
          <div
            className="hidden lg:block"
            onClick={() => {
              setIsOpen(true), setPopUpMode("booking");
            }}
          >
            <PrimaryBtn content="Get a Quote" />
          </div>
        </div>
        {packages.map((item, index) => (
          <WhyChooseUsCard key={index} {...item} />
        ))}
        <div className="w-full flex justify-center items-center ">
          <button
            className=" hover:bg-[#c7371da0] border border-white transition-all duration-400 text-[20px] text-white font-medium w-fit self-center items-center lg:hidden flex gap-2 px-4 py-2    "
            onClick={() => {
              setIsOpen(true), setPopUpMode("booking");
            }}
          >
            Get a Quote <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
