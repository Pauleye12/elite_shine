import PrimaryBtn from "./PrimaryBtn";
import PackagesCard from "./PackagesCard";

const packages = [
  {
    price: "£70/Month",
    name: "Basic Plan",
    details:
      "Two full valets a month and more — ideal for regular drivers. Join now and stay polished!",
    different: false,
  },
  {
    price: "£120/Month",
    name: "Premium Plan",
    details:
      "Four full valets, engine bay clean, and perks — the full works for your car care. Subscribe today!",
    different: false,
  },
  {
    price: "Starting at £10",
    name: "Add-Ons",
    details:
      "Pet hair removal to ceramic coating — enhance your service with premium upgrades!",
    different: true,
  },
];
const OurPackages = () => {
  return (
    <div className="flex bg-[#0D0C0C] justify-center items-center px-[60px] py-[100px]  ">
      <div className="max-w-[1200px] w-full grid grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-white font-bold text-[70px] leading-[70px] flex flex-col ">
            Choose any of <span className="text-[#C7361D]">Our Packages</span>
          </h1>
          <p className="text-white text-xl font-light">
            Our tailored plans and premium extras make it easier than ever to
            keep your vehicle looking its best — with convenience, consistency,
            and care.
          </p>
          <div>
            <PrimaryBtn content="View all Services" />
          </div>
        </div>
        {packages.map((item, index) => (
          <PackagesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OurPackages;
