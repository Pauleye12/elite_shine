import React from "react";
const Team = [
  {
    img: "/robert.png",
    name: "Robert Fox",
    position: "Lead Detailer",
  },
  {
    img: "/esther.png",
    name: "Esther Howard",
    position: "Operations Manager",
  },
  {
    img: "/cameron.png",
    name: "Cameron Williamson",
    position: "Quality Assurance Lead",
  },
  {
    img: "/devon.png",
    name: "Devon Lane",
    position: "Customer Relations",
  },
];
const MeetTeam = () => {
  return (
    <div className="bg-white w-full flex justify-center items-center px-5 md:px-[60px] md:py-[100px] py-[50px]  ">
      <div className="max-w-[1200px] gap-13 w-full flex flex-col items-center ">
        <h1 className="font-bold text-headingMD md:text-headingLG   text-black text-center w-full ">
          Meet The <span className="text-[#C7361D]">Team</span>
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 gap-y-14 mt-10 w-full justify-between">
          {Team.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-6 ">
              <div>
                <img className="w-full object-cover " src={item.img} alt="" />
              </div>
              <div className="flex  flex-col items-center gap-3 ">
                <h3 className="text-[#333333] text-center font-bold text-xl md:text-2xl  ">
                  {item.name}
                </h3>
                <p className="text-[#333333] text-center md:text-xl ">
                  {item.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
