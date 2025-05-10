import React from "react";
import { Link } from "react-router";
import { ArrowLink } from "./SVGs";

const ServicesCard = ({
  id,
  title,
  description,
  image,
}: {
  id: number;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div
      className={`flex max-w-[600px] w-full px-10 py-8 h-[450px] items-start flex-col justify-between  bg-cover bg-center bg-no-repeat text-white font-bold`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="text-[38px] w-full ">0{id}</p>
      <div className="flex flex-col w-full items-start gap-3">
        <h1 className="text-[38px]">{title}</h1>
        <div className="flex justify-between w-full items-end gap-5 ">
          <p className="text-[20px] max-w-[300px] w-full font-light ">
            {description}
          </p>
          <Link
            className="bg-white rounded-full flex justify-center items-center w-[50px] h-[50px]"
            to={""}
          >
            {" "}
            <ArrowLink />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
