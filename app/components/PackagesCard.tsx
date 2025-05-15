import { usePopUp } from "~/Context/PopUpContext";

const PackagesCard = ({
  name,
  price,
  details,
  different,
}: {
  name: string;
  price: string;
  details: string;
  different: boolean;
}) => {
  const { setIsOpen, setPopUpMode } = usePopUp();
  return (
    <div
      className={`flex flex-col items-start gap-5 px-8 pt-10 pb-5  ${
        different ? "bg-[#C7361D] text-white" : " bg-white  "
      } `}
    >
      <div className="flex gap-3 items-center">
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
          className={`text-[40px] font-bold ${
            different ? "text-white" : "text-[#C7361D]"
          }  `}
        >
          {price}
        </h1>
      </div>
      <h1
        className={`text-[40px] font-bold ${
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
      <button
        onClick={() => {
          setIsOpen(true), setPopUpMode("subscription");
        }}
        className={`border w-[145px] h-[60px] flex justify-center items-center bg-white border-[#c7361d] text-[#c7361d] transition-all duration-400 ${
          different
            ? "hover:bg-[#ffffffee]"
            : "hover:text-white hover:bg-[#c7361d] "
        } `}
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default PackagesCard;
