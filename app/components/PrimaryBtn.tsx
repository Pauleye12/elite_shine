import React from "react";
import { ArrowRight } from "./SVGs";
const PrimaryBtn = ({ content }: { content: string }) => {
  return (
    <button className="bg-[#C7361D] text-[20px] text-white font-medium items-center flex gap-2 px-4 py-2   ">
      {content} <ArrowRight />{" "}
    </button>
  );
};

export default PrimaryBtn;
