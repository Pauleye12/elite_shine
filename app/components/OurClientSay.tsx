import { LeftNavArrow, QuotesIcon, RightNavArrow } from "./SVGs";
import ClientCard from "./ClientCard";

const clientComments = [
  {
    name: "Kathryn Murphy",
    comment:
      "I had an amazing experience at Elite Shine! From the moment I arrived, the staff was friendly and professional, guiding me through their range of services. I opted for the full detailing package, and I couldn’t be more impressed with the result. My car looks brand new, with every inch meticulously cleaned and polished.",
    image: "/client1.png",
    companyLogo: "/dyson.png",
  },
  {
    name: "Jane Cooper",
    comment:
      "Elite Shine exceeded my expectations! I brought in my SUV after a long road trip, and it was in desperate need of some care. The team was efficient, courteous, and clearly passionate about what they do. When I picked it up, I was honestly shocked—it looked like it just rolled out of the showroom. I’ll definitely be back!",
    image: "/client2.png",
    companyLogo: "/amazon.png",
  },
  {
    name: "Ralph Edwards",
    comment:
      "Elite Shine exceeded my expectations. Booking was easy, and they were right on time. The team was super detailed and took great care of my car. I got the interior deep clean and honestly, it feels like I’m driving a new car. Even the little things like the dashboard and cup holders were spotless. Highly recommend!",
    image: "/client3.png",
    companyLogo: "/macDonalds.png",
  },
];

const OurClientSay = () => {
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
            <div className="overflow-x-scroll pb-5  ">
              <div className="min-w-max flex justify-between gap-6">
                {clientComments.map((client, index) => (
                  <ClientCard key={index} {...client} />
                ))}
              </div>
            </div>
            <div className="w-full flex justify-end items-center gap-5">
              <button
                disabled
                className="disabled:bg-transparent disabled:border border-black bg-[#C7361D] md:w-[50px] md:h-[50px] w-[30px] h-[30px]  justify-center flex items-center rounded-full  "
              >
                {" "}
                <RightNavArrow />{" "}
              </button>
              <button className="disabled:bg-transparent disabled:border border-black bg-[#C7361D] md:w-[50px] md:h-[50px] w-[30px] h-[30px]  justify-center flex items-center rounded-full  ">
                {" "}
                <LeftNavArrow />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientSay;
