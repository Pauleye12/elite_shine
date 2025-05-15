import PrimaryBtn from "./PrimaryBtn";
import { ArrowRight } from "./SVGs";
import { usePopUp } from "~/Context/PopUpContext";

const JoinAPlan = () => {
  const { setIsOpen, setPopUpMode } = usePopUp();
  return (
    <div className="w-full joinNowBg bg-cover bg-no-repeat flex justify-center py-[170px] px-[100px] ">
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-5 ">
        <h1 className="text-[60px] font-bold text-white text-center w-full ">
          DRIVE MORE, SPEND LESS - IDEAL FOR UBER, FLEET & PRIVATE CAR OWNERS
        </h1>
        <div
          onClick={() => {
            setIsOpen(true), setPopUpMode("subscription");
          }}
          className="flex gap-5 items-center text-white text-xl font-medium "
        >
          <PrimaryBtn content="JOIN A PLAN" />
        </div>
      </div>
    </div>
  );
};

export default JoinAPlan;
