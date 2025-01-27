"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Heading = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const imageRatio = 1.4;

  useEffect(() => {
    let width = screen.width;
    if (width < 600) {
      width = 600;
    }
    setImageWidth(width);
    setImageHeight(width / imageRatio);
  }, [imageRatio, setImageWidth, setImageHeight]);

  return (
    <div className={"relative w-screen"}>
      <Image
        className={"w-full object-cover min-w-[700px]"}
        src={"/images/keckbackground.png"}
        alt={"Keck Center Background Image"}
        width={imageWidth}
        height={imageHeight}
      />
      <div className="absolute inset-0 flex items-center justify-center p-16">
        <h1 className="font-TangoSansBold text-4xl md:text-6xl translate-y-[-6rem] md:translate-y-[-6rem] md:translate-x-[-5rem] md:mr-16 md:mb-16 lg:mr-24 lg:mb-48 lg:ml-24 lg:text-8xl xl:ml-48 xl:mr-44 xl:mb-80 xl:text-9xl text-[#befcfd]">
          PANTHERHACKS
        </h1>
      </div>
    </div>
  );
};

export default Heading;
