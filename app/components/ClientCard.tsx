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
    <div className="flex w-[600px]  items-start flex-col gap-7 ">
      <p className="text-lg font-light text-[#333333] ">{comment}</p>
      <div className="w-full flex gap-4 items-center">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="flex gap-4 items-start ">
          <div className="flex flex-col gap-1 items-start ">
            <p>{name}</p>
            <img src="/5Star.png" alt="" />
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
