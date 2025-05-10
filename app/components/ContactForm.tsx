import { useState } from "react";

const formDetails: {
  name: string;
  email: string;
  phoneNumber: number | null;
  message: string;
} = {
  name: "",
  email: "",
  phoneNumber: null,
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(formDetails);
  return (
    <div className="bg-[#EBEBEB] w-full flex justify-center items-center px-[60px] py-[100px]  ">
      <div className="max-w-[1200px] w-full flex items-center flex-col gap-14  ">
        <h1 className="flex gap-5 leading-[70px] text-[70px] font-bold  items-start">
          Contact
          <span className="text-[#C7361D] ">Us</span>
        </h1>
        <div className=" w-full flex justify-between gap-10 items-center ">
          <div>
            <img
              className="w-full object-cover "
              src="/contactForm.png"
              alt=""
            />
          </div>
          <div className="max-w-[600px] w-full ">
            <form className="flex flex-col w-full gap-10 " action="">
              <input
                className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-8 py-5 outline-none border-none "
                placeholder="Name"
                type="text"
                name="name"
                id="name"
              />
              <input
                className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-8 py-5 outline-none border-none "
                placeholder="Email"
                type="email"
                name="email"
                id="email"
              />
              <input
                className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-8 py-5 outline-none border-none "
                placeholder="Phone number"
                type="number"
                name="phoneNumber"
                id="phoneNumber"
              />
              <textarea
                className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-8 py-5 outline-none border-none "
                placeholder="Message"
                name="message"
                id="message"
              ></textarea>

              <button className="h-[50px] bg-[#C7361D] flex justify-center items-center text-white font-medium text-lg ">
                Send a message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
