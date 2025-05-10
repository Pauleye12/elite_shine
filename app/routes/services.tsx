import JoinAPlan from "~/components/JoinAPlan";
import OurPackages from "~/components/OurPackages";
import OurServices2 from "~/components/OurServices2";

const services = () => {
  return (
    <div className="flex flex-col pt-[80px] w-full">
      <OurServices2 />
      <OurPackages />
      <JoinAPlan />
    </div>
  );
};

export default services;
