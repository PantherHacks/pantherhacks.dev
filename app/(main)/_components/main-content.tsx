"use client";

import { ParallaxProvider } from "react-scroll-parallax";

import Heading from "@/app/(main)/_components/heading";
import AboutSection from "./about-section";
import FaqsSection from "./faqs-section";
import MobileHeading from "./mobileheading";
import TracksSection from "./tracks-section";

const MainContent = () => {
  return (
    <div className="flex flex-grow flex-col w-full">
      <ParallaxProvider>
        <Heading />
      </ParallaxProvider>
      <MobileHeading />
      <AboutSection />
      <TracksSection />
      <FaqsSection />
    </div>
  );
};

export default MainContent;
