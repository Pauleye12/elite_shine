const OurContact = () => {
  return (
    <div className="bg-[#FFFFFF] px-5 md:px-[60px] md:py-[100px] py-[50px] flex flex-col justify-center items-center  ">
      <h1 className="flex lg:hidden mb-13 gap-5 leading-[70px] text-headingMD md:text-headingLG font-bold  items-start">
        Our <span className="text-[#C7361d]">Contact</span>{" "}
      </h1>
      <div className="max-w-[1200px] w-full flex md:flex-row flex-col-reverse justify-between items-center gap-10">
        <div className="flex md:flex-col justify-between md:justify-center gap-10 items-start">
          <h1 className="lg:flex flex-col hidden leading-[70px] text-headingMD md:text-headingLG   font-bold  items-start">
            Our <span className="text-[#C7361d]">Contact</span>{" "}
          </h1>
          <div className="flex md:mt-5 flex-col gap-1 max-w-[350px] w-full ">
            <h2 className="font-bold text-[#000000] md:text-[30px]  ">
              Address:
            </h2>
            <p className="font-medium md:text-[22px] text-[#4E4E4E] ">
              <strong>We are mobile!</strong>
              Serving Greater Manchester and its surrounding areas with
              top-quality mobile car detailing and valeting services.
            </p>
          </div>
          <div className="flex flex-col gap-1 max-w-[350px] w-full ">
            <h2 className="font-bold text-[#000000] md:text-[30px]  ">
              Whatsapp:
            </h2>
            <p className="font-medium md:text-[22px] text-[#4E4E4E] ">
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
