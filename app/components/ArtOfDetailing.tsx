import PrimaryBtn from "./PrimaryBtn";

const ArtOfDetailing = () => {
  return (
    <div
      className=" py-[140px] px-[60px] flex justify-center items-center "
      style={{ backgroundImage: `url(/artOfDetailing.png)` }}
    >
      <div className="max-w-[1200px] w-full flex justify-between gap-6 items-center ">
        <div className="flex w-full max-w-[590px] flex-col items-start gap-5">
          <h1 className="text-[65px] w-full leading-[70px] flex flex-col font-bold text-white ">
            {" "}
            WE HAVE MASTERED THE
            <span className="text-[#c7361d]">ART OF DETAILING</span>
          </h1>
          <p className="text-xl text-white font-light">
            Elite Shine provides a variety of customizable services tailored to
            your unique needs.
          </p>
          <PrimaryBtn content="Contact Us" />
        </div>
        <div
          className="backdrop-blur-lg max-w-[550px] w-full bg-[#C7361D1A] border border-white text-white px-9 py-9 flex flex-col items-start gap-5
] "
        >
          <p className="font-bold text-xl ">Key Benefits:</p>
          <p className="font-light text-lg">
            <span className="font-semibold">Detailing with Passion:</span>{" "}
            Expert hands, meticulous detail — your car deserves nothing less.
          </p>
          <p className="font-light text-lg">
            <span className="font-semibold">Eco-Smart Products:</span> Only the
            finest, eco-conscious products for a spotless, safe finish.
          </p>
          <p className="font-light text-lg">
            <span className="font-semibold">Great Value, Always:</span> Top-tier
            service at fair, competitive prices that don’t cut corners.
          </p>
          <p className="font-light text-lg">
            <span className="font-semibold">For All Clients:</span> From
            personal rides to full fleets, we serve both private and commercial
            customers with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtOfDetailing;
