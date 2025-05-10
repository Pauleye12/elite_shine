import { HeroFacebook, HeroInstagram, HeroTiktok, WhatsappIcon } from "./SVGs";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full bg-[#0D0C0C] flex flex-col pt-[130px] justify-center items-center gap-12">
      <div className="w-full px-[60px] flex justify-center items-center ">
        <div className="max-w-[1200px] flex justify-between items-start  w-full">
          <div className="flex flex-col gap-10">
            <div>
              <img className="object-cover" src="/footerLogo.png" alt="" />
            </div>
            <p className="font-medium max-w-[350px] w-full text-white text-[22px]">
              Revitalize Your Ride with Our Premium Services
            </p>
            <div className="flex gap-8 items-center mt-3 ">
              <a
                href="http://"
                className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroInstagram />
              </a>
              <a
                href="http://"
                className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroTiktok />
              </a>
              <a
                href="http://"
                className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroFacebook />
              </a>
              <a
                href="http://"
                className="border rounded-full border-white w-10 h-10 flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>
          <div className="text-white flex flex-col items-start gap-9 ">
            <h1 className="font-medium text-[34px]  ">Quick Links</h1>
            <ul className="flex flex-col font-medium text-[22px] items-start gap-7 ">
              <li>
                <Link to={""}>Home</Link>
              </li>
              <li>
                <Link to={""}>About Us</Link>
              </li>
              <li>
                <Link to={""}>Services</Link>
              </li>
              <li>
                <Link to={""}>Book an Appointment</Link>
              </li>
            </ul>
          </div>
          <div className="text-white flex flex-col items-start gap-9 ">
            <h1 className="font-medium text-[34px]  ">Legal & Privacy</h1>
            <ul className="flex flex-col font-medium text-[22px] items-start gap-7 ">
              <li>
                <Link to={""}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={""}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to={""}>Accessibility Statement</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white flex w-full justify-center items-center py-10 px-[60px] text-white font-medium text-[24px] ">
        <p>Copyright ©2025, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
