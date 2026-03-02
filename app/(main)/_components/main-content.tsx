"use client";

import { ParallaxProvider } from "react-scroll-parallax";

import Heading from "@/app/(main)/_components/_headings/heading";
import PrizesSection from "@/app/(main)/_components/_prizes/prizes-section";
import MobileHeading from "./_headings/mobileheading";
import TeamSection from "./_team/team-section";
import TracksSection from "./_tracks/tracks-section";
import AboutSection from "./about-section";
import FaqsSection from "./faqs-section";

const MainContent = () => {
  return (
    <div className="flex flex-grow flex-col w-full text-white">
      <div className="hidden [@media(min-width:750px)]:block">
        <ParallaxProvider>
          <Heading />
        </ParallaxProvider>
      </div>
      <MobileHeading />
      <AboutSection />
      <TracksSection />
      <PrizesSection />
      <FaqsSection />
      <TeamSection />
    </div>
  );
};

export default MainContent;
