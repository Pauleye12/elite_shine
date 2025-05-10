import React from "react";
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

const Home = () => {
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
      <Footer />
    </div>
  );
};

export default Home;
