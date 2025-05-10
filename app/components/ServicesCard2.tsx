const ServicesCard2 = ({
  name,
  duration,
  price,
  details,
  different,
}: {
  name: string;
  duration: string;
  price: number;
  details: string;
  different: boolean;
}) => {
  return (
    <div
      className={`pt-9 pb-5 px-10 flex flex-col items-start gap-5 ${
        different
          ? "bg-[#C7361D] text-white "
          : "bg-[#FEF4F2] border border-[#C7361D]"
      }  `}
    >
      <div className="flex gap-3 items-start">
        <span
          className={`rounded-full flex h-8 w-8 justify-center items-center ${
            different ? "bg-white" : "bg-[#C7361D]"
          }`}
        >
          <span
            className={`rounded-full border-3 h-4 w-4 ${
              different ? "border-[#c7361d]" : "border-white"
            } `}
          ></span>
        </span>
        <h1
          className={`text-[40px] leading-[30px] font-bold gap-3 flex flex-col ${
            different ? "text-white" : "text-[#C7361D]"
          }  `}
        >
          {name}
          <span
            className={`font-bold text-2xl ${
              different ? "text-white" : "text-black"
            } `}
          >
            {duration}
          </span>
        </h1>
      </div>

      <p
        className={`text-lg ml-11 ${different ? "text-white" : "text-black"}  `}
      >
        {details}
      </p>

      <p
        className={` ml-11 ${
          different ? "text-white" : "text-[#C7361D]"
        } font-bold text-[38px] `}
      >
        £ {price}
      </p>

      <button
        className={`border w-[145px] ml-11 h-[60px] font-medium text-[22px] flex justify-center items-center ${
          different ? "bg-white" : "bg-transparent"
        }  border-[#c7361d] text-[#c7361d]  `}
      >
        Book Now
      </button>
    </div>
  );
};

export default ServicesCard2;
