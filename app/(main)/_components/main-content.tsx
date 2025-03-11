"use client";

import Heading from "@/app/(main)/_components/heading";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import FaqsSection from "./faqs-section";
import MobileHeading from "./mobileheading";
import TracksSection from "./tracks-section";

const MainContent = () => {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Heading />
      <MobileHeading />
      <AboutSection />
      <TracksSection />
      <FaqsSection />
      <ContactSection />
    </div>
  );
};

export default MainContent;
