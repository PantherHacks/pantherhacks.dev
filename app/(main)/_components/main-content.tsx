"use client";

import Heading from "@/app/(main)/_components/heading";
import MobileHeading from "./mobileheading";

const MainContent = () => {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Heading />
      <MobileHeading />
      <div className="flex flex-col items-center justify-center w-full py-40 bg-[#ffffff]">Main Content Example</div>
    </div>
  );
};

export default MainContent;
