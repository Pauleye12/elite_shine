import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full md:py-[100px] py-[50px] px-5 md:px-[60px] flex justify-center items-center bg-[#F2EFEA] bg-[url(/newsBG.png)] bg-no-repeat bg-cover">
      <div className="w-full flex gap-12 max-w-[1200px] justify-between items-center">
        <div className="w-full hidden lg:flex ">
          <img className="w-full object-cover" src="/Newsletter.png" alt="" />
        </div>
        <div className="flex  max-w-[600px] w-full flex-col md:gap-8 gap-3 ">
          <h1 className="text-headingMD md:text-headingLG   font-bold text-[#C7361D] text-center md:text-left">
            Newsletter
          </h1>
          <p className="md:mt-2 md:text-[22px] font-light md:font-medium text-[#4E4E4E] text-center md:text-left">
            Get latest updates of our offer in your inbox
          </p>
          <div className="flex flex-col lg:flex-row font-medium text-[22px] gap-4 lg:gap-0 items-center">
            <input
              className="outliine-none border border-[#C7361D] w-full lg:w-fit text-[#939393] h-12 md:h-[60px] px-4 py-2 "
              type="email"
              name=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              id=""
            />{" "}
            <button className="text-white w-full lg:w-fit h-12 md:h-[60px] py-3 px-4 bg-[#C7361D] ">
              Subscribe Now
            </button>
          </div>
          <div className="flex gap-5 mt-7 items-center">
            <div className="w-full">
              <img
                className="h-[60px] object-cover  "
                src="subscribers.png"
                alt=""
              />
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
