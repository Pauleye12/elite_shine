const ClientCard = ({
  name,
  comment,
  image,
  companyLogo,
}: {
  name: string;
  comment: string;
  image: string;
  companyLogo: string;
}) => {
  return (
    <div className="flex xl:w-[600px] lg:w-[500px] w-[400px]  items-start flex-col gap-7 ">
      <p className="md:text-lg font-light text-[#333333] ">{comment}</p>
      <div className="w-full flex gap-4 items-center">
        <div>
          <img className="w-[60px] md:w-full" src={image} alt="" />
        </div>
        <div className="flex gap-4 items-start ">
          <div className="flex flex-col gap-1 items-start ">
            <p>{name}</p>
            <img
              className="w-[100px] md:w-[150px] lg:w-full"
              src="/5Star.png"
              alt=""
            />
          </div>
          <div className="flex tra items-center gap-3">
            <p>CEO of </p> <img src={companyLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
