import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-[100px] px-[60px] flex justify-center items-center bg-[#F2EFEA] bg-[url(/newsBG.png)] bg-no-repeat bg-cover">
      <div className="w-full flex gap-12 max-w-[1200px] justify-between items-center">
        <div className="">
          <img className="w-full object-cover" src="/Newsletter.png" alt="" />
        </div>
        <div className="flex  max-w-[600px] w-full flex-col gap-8 ">
          <h1 className="text-[70px] font-bold text-[#C7361D] ">Newsletter</h1>
          <p className="mt-2 text-[22px] font-medium text-[#4E4E4E] ">
            Get latest updates of our offer in your inbox
          </p>
          <div className="flex font-medium text-[22px] items-center">
            <input
              className="outliine-none border border-[#C7361D]  text-[#939393] h-[60px] px-4 py-2 "
              type="email"
              name=""
              placeholder="Enter your email address"
              id=""
            />{" "}
            <button className="text-white h-[60px] py-3 px-4 bg-[#C7361D] ">
              Subscribe Now
            </button>
          </div>
          <div className="flex gap-5 mt-7 items-center">
            <div>
              <img className="h-[60px]" src="subscribers.png" alt="" />
            </div>

            <p className="max-w-[230px] w-full font-medium text-[#4E4E4E] text-[22px] leading-[22px]  ">
              {" "}
              <strong>22k car lovers</strong> have already subscribed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
