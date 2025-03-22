"use client";

import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";

import Heading from "@/app/(main)/_components/_headings/heading";
import PrizesSection from "@/app/(main)/_components/_prizes/prizes-section";
import Countdown from "@/app/(main)/_components/countdown";
import MobileHeading from "./_headings/mobileheading";
import TeamSection from "./_team/team-section";
import TracksSection from "./_tracks/tracks-section";
import AboutSection from "./about-section";
import FaqsSection from "./faqs-section";

const MainContent = () => {
  return (
    <div className="flex flex-grow flex-col w-full">
      <div className="hidden [@media(min-width:750px)]:block">
        <ParallaxProvider>
          <Heading />
        </ParallaxProvider>
      </div>
      <MobileHeading />
      <div className="flex w-100vw overflow-x-hidden overflow-y-hidden">
        <Image
          src="/images/main-background/main-header-transition.svg"
          width={100}
          height={100}
          alt=""
          aria-hidden
          className="w-full scale-x-[125%] -translate-x-[1rem] h-auto -translate-y-2"
          loading="eager"
        />
      </div>
      <AboutSection />
      <Countdown />
      <TracksSection />
      <PrizesSection />
      <FaqsSection />
      <TeamSection />
    </div>
  );
};

export default MainContent;
