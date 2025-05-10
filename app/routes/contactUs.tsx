import React from "react";
import ContactForm from "~/components/ContactForm";
import OurContact from "~/components/OurContact";

const contactUs = () => {
  return (
    <div className="flex flex-col pt-[80px] w-full">
      <ContactForm />
      <OurContact />
    </div>
  );
};

export default contactUs;
