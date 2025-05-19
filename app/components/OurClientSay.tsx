import { useRef, useState, useEffect } from "react";

import { LeftNavArrow, QuotesIcon, RightNavArrow } from "./SVGs";
import ClientCard from "./ClientCard";

const clientComments = [
  {
    name: "Kathryn Murphy",
    comment:
      "Great service from start to finish. They arrived on time and got straight to work. My car hadn’t been cleaned in months, and they brought it back to life. Interior looks and smells fresh. Would definitely book again.",
    image: "/client1.png",
    companyLogo: "/dyson.png",
  },
  {
    name: "Jane Cooper",
    comment:
      "Used Elite Shine for a full valet before selling my car. They were professional, efficient, and the results were spot on. The buyer even commented on how clean it was.",
    image: "/client2.png",
    companyLogo: "/amazon.png",
  },
  {
    name: "Ralph Edwards",
    comment:
      "I’ve tried a few local valeting services but these guys stand out. No upselling, just honest work. Booking was easy, they showed up on time, and the detail was impressive. Worth every penny.",
    image: "/client3.png",
    companyLogo: "/macDonalds.png",
  },
];

const OurClientSay = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // const scroll = (direction: "left" | "right") => {
  //   if (scrollRef.current) {
  //     const scrollAmount = 300;
  //     scrollRef.current.scrollBy({
  //       left: direction === "left" ? -scrollAmount : scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const updateScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    setAtStart(el.scrollLeft === 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 500;
    const offset = direction === "left" ? -scrollAmount : scrollAmount;

    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Initial check
    updateScrollPosition();

    // Listen to scroll events
    el.addEventListener("scroll", updateScrollPosition);
    return () => el.removeEventListener("scroll", updateScrollPosition);
  }, []);
  return (
    <div className="bg-white w-full flex justify-center items-center px-5 md:px-[60px] md:py-[100px] py-[50px] ">
      <div className="max-w-[1200px] w-full flex flex-col gap-14  ">
        <h1 className="flex md:flex-col md:leading-[70px] text-headingMD md:text-headingLG gap-2 md:gap-0  font-bold text-center md:text-left justify-center md:justify-start items-start">
          Our
          <span>
            <span className="text-[#C7361D] ">Client</span> Says{" "}
          </span>
        </h1>
        <div className="w-full flex justify-between gap-12 xl:items-end ">
          <div className="w-full hidden md:flex ">
            <img className="w-full object-cover" src="/clientSay.png" alt="" />
          </div>
          <div className="w-full xl:max-w-[600px] lg:max-w-[500px] max-w-[400px] flex flex-col gap-9 ">
            <div className="rounded-full w-[60px] h-[60px] bg-[#C7361d] flex justify-center items-center ">
              <QuotesIcon />
            </div>
            <div ref={scrollRef} className="overflow-x-scroll pb-5  ">
              <div className="min-w-max flex justify-between gap-6">
                {clientComments.map((client, index) => (
                  <ClientCard key={index} {...client} />
                ))}
              </div>
            </div>
            <div className="w-full flex justify-end items-center gap-5">
              <button
                onClick={() => scroll("left")}
                disabled={atStart}
                className="disabled:bg-transparent disabled:border border-black bg-[#C7361D] md:w-[50px] md:h-[50px] w-[30px] h-[30px]  justify-center flex items-center rounded-full  "
              >
                {" "}
                <RightNavArrow fill={atStart ? "black" : "white"} />{" "}
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={atEnd}
                className="disabled:bg-transparent disabled:border border-black bg-[#C7361D] md:w-[50px] md:h-[50px] w-[30px] h-[30px]  justify-center flex items-center rounded-full  "
              >
                {" "}
                <LeftNavArrow fill={atEnd ? "black" : "white"} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientSay;
