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
    <div className="bg-[#EBEBEB] w-full flex justify-center items-center lg:px-[60px] md:py-[100px] py-[20px]  ">
      <div className="max-w-[1200px] w-full flex items-center flex-col gap-8 md:gap-14  ">
        <h1 className="flex gap-5 leading-[70px] text-headingMD md:text-headingLG font-bold  items-start">
          Contact
          <span className="text-[#C7361D] ">Us</span>
        </h1>
        <div className=" w-full contactBG bg-center bg-cover lg:bg-none flex justify-center py-[50px] px-[30px] md:px-[60px] lg:px-0  lg:justify-between gap-10 items-center ">
          <div className="hidden lg:flex">
            <img
              className="w-full object-cover "
              src="/contactForm.png"
              alt=""
            />
          </div>
          <div className="max-w-[600px] w-full ">
            <form className="flex flex-col w-full gap-5 md:gap-10 " action="">
              <input
                className="bg-[#FEF4F2] md:text-lg text-[#3D3D3D] md:px-8 px-4 md:py-5 py-3 outline-none border-none "
                placeholder="Name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                name="name"
                id="name"
              />
              <input
                className="bg-[#FEF4F2] md:text-lg text-[#3D3D3D] md:px-8 px-4 md:py-5 py-3 outline-none border-none "
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                name="email"
                id="email"
              />
              <input
                className="bg-[#FEF4F2] md:text-lg text-[#3D3D3D] md:px-8 px-4 md:py-5 py-3 outline-none border-none "
                placeholder="Phone number"
                type="number"
                value={formData.phoneNumber ?? "phone number"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phoneNumber: Number(e.target.value),
                  }))
                }
                name="phoneNumber"
                id="phoneNumber"
              />
              <textarea
                className="bg-[#FEF4F2] md:text-lg text-[#3D3D3D] md:px-8 px-4 md:py-5 py-3 outline-none border-none "
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                name="message"
                id="message"
              ></textarea>

              <button className="h-[50px] bg-[#C7361D] flex justify-center items-center text-white font-medium md:text-lg ">
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
