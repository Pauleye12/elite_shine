import React from "react";

const OurContact = () => {
  return (
    <div className="bg-[#FFFFFF] px-[60px] py-[100px] flex justify-center items-center ">
      <div className="max-w-[1200px] w-full flex justify-between items-center gap-10">
        <div className="flex flex-col gap-10 items-start">
          <h1 className="flex flex-col leading-[70px] text-[70px] font-bold  items-start">
            Our <span className="text-[#C7361d]">Contact</span>{" "}
          </h1>
          <div className="flex mt-5 flex-col gap-1 max-w-[350px] w-full ">
            <h2 className="font-bold text-[#000000] text-[30px]  ">Address:</h2>
            <p className="font-medium text-[22px] text-[#4E4E4E] ">
              Unit 7, Cliffsed Industrial Estate, Grays, Essex, UR74 5XY
            </p>
          </div>
          <div className="flex flex-col gap-1 max-w-[350px] w-full ">
            <h2 className="font-bold text-[#000000] text-[30px]  ">
              Whatsapp:
            </h2>
            <p className="font-medium text-[22px] text-[#4E4E4E] ">
              (+44) 79 0492-9935
            </p>
          </div>
        </div>
        <div className="max-w-[700px] w-full">
          <img className="w-full object-cover" src="/map.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurContact;
