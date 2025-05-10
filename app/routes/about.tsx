import React from "react";
import AboutUs from "~/components/AboutUs";
import BookUs from "~/components/BookUs";
import Footer from "~/components/Footer";
import MeetTeam from "~/components/MeetTeam";
import WhyChooseUs from "~/components/WhyChooseUs";

const about = () => {
  return (
    <div className="flex flex-col w-full">
      <AboutUs />
      <WhyChooseUs />
      <BookUs />
      <MeetTeam />
      <Footer />
    </div>
  );
};

export default about;
