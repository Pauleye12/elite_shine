import AboutUs from "~/components/AboutUs";
import ArtOfDetailing from "~/components/ArtOfDetailing";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import Newsletter from "~/components/Newsletter";
import OurClientSay from "~/components/OurClientSay";
import OurContact from "~/components/OurContact";
import OurPackages from "~/components/OurPackages";
import OurServices from "~/components/OurServices";
import PhotoGallery from "~/components/PhotoGallery";
// import { usePopUp } from "~/Context/PopUpContext";
// import PopUp from "~/components/PopUp";

const Home = () => {
  // const { isOpen } = usePopUp();
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutUs />
      <OurServices />
      <ArtOfDetailing />
      <OurClientSay />
      <OurPackages />
      <PhotoGallery />
      <Newsletter />
      <OurContact />
    </div>
  );
};

export default Home;
