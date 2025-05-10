import PrimaryBtn from "./PrimaryBtn";
import WhyChooseUsCard from "./WhyChooseUsCard";

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
  return (
    <div className="flex bg-[#0D0C0C] justify-center items-center px-[60px] py-[120px]  ">
      <div className="max-w-[1200px] w-full grid grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-white font-bold text-[70px] leading-[70px] flex flex-col ">
            Why
            <span>
              Choose <span className="text-[#C7361D]">Us</span>
            </span>
          </h1>
          <p className="text-white text-xl font-light">
            Experience the perfect blend of professionalism, reliability, and
            eco-conscious care — trusted by car owners and businesses alike.
          </p>
          <div>
            <PrimaryBtn content="Get a Quote" />
          </div>
        </div>
        {packages.map((item, index) => (
          <WhyChooseUsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
