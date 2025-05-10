import { ArrowRight } from "./SVGs";

const BookUs = () => {
  return (
    <div className="w-full bookNowBg bg-cover bg-no-repeat flex justify-center py-[170px] px-[100px] ">
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-5 ">
        <h1 className="text-[60px] font-bold text-white text-center w-full ">
          JOIN DOZENS OF SATISFIED CAR OWNERS WHO TRUST ELITE SHINE
        </h1>
        <div className="flex gap-5 items-center text-white text-xl font-medium ">
          <button className="px-4 py-3 bg-[#C7361D]  ">BOOK NOW</button>
          <button className="px-4 border border-white flex gap-2 py-3 bg-transparent items-center ">
            SEE OUR SERVICES <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookUs;
