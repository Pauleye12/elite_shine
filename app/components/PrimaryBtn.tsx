import { ArrowRight } from "./SVGs";
const PrimaryBtn = ({ content }: { content: string }) => {
  return (
    <button className="bg-[#C7361D] hover:bg-[#c7371da0] transition-all duration-400 text-base md:text-[20px] text-white font-medium items-center flex gap-2 px-5 py-4    ">
      {content} <ArrowRight />{" "}
    </button>
  );
};

export default PrimaryBtn;
