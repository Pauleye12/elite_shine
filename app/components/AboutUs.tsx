const AboutUs = () => {
  return (
    <div className="w-full flex pt-[100px] bg-[#ebebeb]  justify-center items-center px-[60px]  ">
      <div className="max-w-[1200px] w-full items-center flex flex-col ">
        <div className="flex w-full items-start gap-5 justify-between  ">
          <div className="flex max-w-[500px] flex-col w-full gap-3 items-start ">
            <h1 className="text-black text-[70px] font-bold ">
              About <span className="text-[#C7361D]">Us</span>
            </h1>
            <p className="text-[#3D3D3D] max-w-[400px] w-full text-[20px] font-light  ">
              At Elite Shine Detailing Ltd, we specialise in professional car
              valeting and detailing across Bolton and Greater Manchester.
            </p>
          </div>
          <div className="  ">
            <img className="object-fit" src="/aboutUs1.png" alt="" />
          </div>
        </div>
        <div className="flex w-full flex-row-reverse translate-y-[-90px] items-end gap-10 justify-between  ">
          <div className="flex flex-col max-w-[500px] w-full gap-4 items-start ">
            <p className="text-[#3D3D3D]  text-[20px] font-light ">
              Whether you’re looking for a quick valet or a full detail, our
              mobile and unit-based service gives your car the VIP treatment —
              at your convenience.
            </p>
            <button className="border px-5 py-3 border-[#c7361d] text-[#c7361d]  ">
              Learn More
            </button>
          </div>
          <div className="w-full">
            <img className="object-fit" src="/aboutUs2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
