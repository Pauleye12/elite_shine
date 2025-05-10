import type { Route } from "./+types/Home";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Elite Shine" },
    {
      name: "Elite Mobile and Unit-Based Car Detailing",
      content:
        "At Elite Shine Detailing Ltd, we specialise in professional car valeting and  detailing across Bolton and Greater Manchester.",
    },
  ];
}

export default function AppWrapper() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Navbar />
      <Outlet />
    </div>
  );
}
