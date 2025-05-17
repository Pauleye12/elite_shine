const WhyChooseUsCard = ({
  icon,
  name,
  details,

  different,
}: {
  icon: string;
  name: string;
  details: string;

  different: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-[100px] md:gap-[130px] px-5 md:px-8 pt-10 md:pt-13 pb-8  ${
        different ? "bg-[#C7361D] text-white" : " bg-white  "
      } `}
    >
      <div className="flex gap-3 items-center">
        <img src={icon} alt="" />
      </div>
      <div className="flex flex-col gap-1 items-start ">
        <h1
          className={` text-2xl md:text-[40px] font-bold ${
            different ? "text-white" : "text-black"
          }  `}
        >
          {name}
        </h1>
        <p
          className={`text-base font-light  ${
            different ? "text-white" : "text-[#333333]"
          }  `}
        >
          {details}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
