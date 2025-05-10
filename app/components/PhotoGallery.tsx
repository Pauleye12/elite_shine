import React from "react";

const images = [
  "/PG1.png",
  "/PG2.png",
  "/PG3.png",
  "/PG4.png",
  "/PG5.png",
  "/PG6.png",
  "/PG7.png",
  "/PG8.png",
];
const PhotoGallery = () => {
  return (
    <div className="w-full flex items-center bg-[#0D0C0C] flex-col py-[100px] gap-[50px] ">
      <div className="w-full px-[60px]  ">
        <h1 className="max-w-[1200px] px-[60px] w-full text-white font-bold text-[70px] leading-[70px]  ">
          Photo <span className="text-[#c7361d]">Gallery</span>{" "}
        </h1>
      </div>
      <div className="w-full flex flex-wrap gap-x-6 gap-y-5 ">
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              src={image}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
