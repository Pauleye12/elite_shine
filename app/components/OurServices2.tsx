import ServicesCard2 from "./ServicesCard2";
import { usePopUp } from "~/Context/PopUpContext";

const services = [
  {
    name: "Interior Detail",
    duration: "45-60 mins",
    price: 35,
    details:
      "Vacuumed from seats to boot, with dashboard and trims cleaned to perfection. Crisp windows and a fresh scent give your cabin that clean, inviting feel.",
    different: false,
  },
  {
    name: "Full Valet",
    duration: "90 mins",
    price: 60,
    details:
      "A full-body reset: exterior wash and wax, deep interior clean, and shampooed seats and carpets. Finished with tyre and trim dressing for that complete, polished look.",
    different: true,
  },
  {
    name: "Exterior Refresh",
    duration: "30-45 mins",
    price: 25,
    details:
      "Snow foam pre-wash, a careful hand wash, and a microfiber dry leave your car gleaming. Finished with tyre shine and spotless windows for a sharp, everyday look.",
    different: true,
  },
  {
    name: "Mini Valet",
    duration: "60 mins",
    price: 40,
    details:
      "Combines a basic exterior wash with a focused interior clean. Includes vacuuming, dashboard wipedown, and windscreen polish — ideal for quick upkeep.",
    different: false,
  },
  {
    name: "Full Detail Package",
    duration: "2-3 hours",

    price: 100,
    details:
      "A complete top-to-bottom refresh, combining full exterior detailing with a deep interior cleanse. Ideal before selling or as seasonal upkeep to restore that like-new feel.",
    different: true,
  },
];

const OurServices2 = () => {
  const { setIsOpen, setPopUpMode } = usePopUp();
  return (
    <div className="w-full flex py-[100px] bg-white  justify-center items-center px-[60px]  ">
      <div className="max-w-[1200px]  w-full items-start justify-between flex gap-12 ">
        <div className="flex flex-col w-full gap-10 items-start ">
          <h1 className="text-[70px] font-bold max-w-[326px] w-full leading-[70px] text-black ">
            Our <span className="text-[#c7361d] ">Services</span>
          </h1>
          {services.slice(0, 2).map((service, index) => (
            <ServicesCard2 key={index} {...service} />
          ))}
          <div
            className={`pt-9 w-full pb-5 px-10 flex flex-col items-start gap-5 bg-[#FEF4F2] border border-[#C7361D]  `}
          >
            <div className="flex gap-3 items-start">
              <span
                className={`rounded-full flex h-8 w-8 justify-center items-center bg-[#C7361D] `}
              >
                <span
                  className={`rounded-full border-3 h-4 w-4 border-white `}
                ></span>
              </span>
              <h1
                className={`text-[40px] leading-[30px] font-bold gap-2 flex flex-col text-[#C7361D]  `}
              >
                Extras/Add-Ons
              </h1>
            </div>

            <ul className={`text-lg mt-3 ml-15 text-black list-disc  `}>
              {" "}
              <li>Pet hair removal</li>
              <li>Odour Neutralising treatment</li>
              <li>Engine bay cleaning</li>
              <li>Paint Sealant or wax protection</li>
              <li>Upholstery Shampoo </li>
              <li>Ceramic coating (quote on request)</li>
            </ul>

            <p className={` ml-11 text-[#C7361D]  font-bold text-[38px] `}>
              Starting at £10
            </p>

            <button
              onClick={() => {
                setIsOpen(true), setPopUpMode("booking");
              }}
              className={`border w-[145px] ml-11 h-[60px] font-medium text-[22px] flex justify-center items-center bg-transparent border-[#c7361d] text-[#c7361d]  `}
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="w-full flex items-end justify-end  flex-col gap-10 ">
          {services.slice(2, 5).map((service, index) => (
            <ServicesCard2 key={index} {...service} />
          ))}
          <div className="flex w-full justify-between items-center">
            <p className="text-lg w-[250px] uppercase font-light text-black flex items-center leading-[22px] gap-2 ">
              <span className="text-[38px] text-[#C7361D] font-bold ">
                250%
              </span>
              <span className="flex flex-col items-start">
                cleaner <span>interior feel</span>
              </span>
            </p>
            <p className="text-lg w-[250px] leading-[22px] font-light uppercase text-black flex items-center gap-2 text-end ">
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

export default OurServices2;
