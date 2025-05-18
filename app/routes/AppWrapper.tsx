import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

import PopUp from "~/components/PopUp";
import { usePopUp } from "~/Context/PopUpContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Elite Shine" },
    {
      name: "Elite Mobile and Unit-Based Car Detailing",
      content:
        "At Elite Shine Detailing Ltd, we specialise in professional car valeting and  detailing across Bolton and Greater Manchester.",
      description:
        "At Elite Shine Detailing Ltd, we specialise in professional car valeting and detailing across Bolton and Greater Manchester. - Elite shine",
      keywords:
        "mobile car detailing Manchester, car valet Manchester, interior car cleaning, exterior car wash, affordable car detailing, mobile valeting service",
    },
  ];
}

export default function AppWrapper() {
  const { isOpen } = usePopUp();
  return (
    <div className="w-full bg-black overflow-x-hidden flex flex-col items-center ">
      <Navbar />
      <Outlet />
      <Footer />
      {isOpen && <PopUp />}
    </div>
  );
}
