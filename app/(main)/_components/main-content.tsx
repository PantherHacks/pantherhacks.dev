"use client";

import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";

import Heading from "@/app/(main)/_components/heading";
import AboutSection from "./about-section";
import FaqsSection from "./faqs-section";
import MobileHeading from "./mobileheading";
import TracksSection from "./tracks-section";

const MainContent = () => {
  return (
    <div className="flex flex-grow flex-col w-full">
      <div className="hidden [@media(min-width:750px)]:block">
        <ParallaxProvider>
          <Heading />
        </ParallaxProvider>
      </div>
      <MobileHeading />
      <Image
        src="/images/main-background/main-header-transition.svg"
        width={100}
        height={100}
        alt=""
        aria-hidden
        className="w-[100%] -translate-y-1"
      />
      <AboutSection />
      <TracksSection />
      <FaqsSection />
    </div>
  );
};

export default MainContent;
