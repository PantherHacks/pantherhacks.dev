import Image from "next/image";

import { SectionTitle } from "@/components/section-title";
import Track from "./track";

const TracksSection = () => {
  return (
    <div
      id="tracks"
      className="flex flex-col items-center justify-center w-full pt-40 md:pt-20 pb-40 md:pb-20 relative overflow-x-clip"
    >
      <Image
        src="/images/artifacts/coffee.svg"
        alt="A cyberpunk-style coffee cup."
        width={100}
        height={100}
        className="hidden md:block w-40 h-40 absolute md:translate-x-[16rem] lg:translate-x-[24rem] top-0 -translate-y-3/4 select-none drop-shadow-[0_0_10px_#FE5501] hover:-rotate-12 transition-all"
        draggable={false}
      />
      <Image
        src="/logos/pantherhacks/cyborg_pete_orange.svg"
        alt="A cyberpunk-style coffee cup."
        width={100}
        height={100}
        className="hidden md:block w-40 h-40 absolute md:-translate-x-[16rem] lg:-translate-x-[24rem] top-0 -translate-y-3/4 select-none drop-shadow-[0_0_5px_#FE5501] hover:-rotate-12 transition-all"
        draggable={false}
      />
      <Image
        src="/images/dividers/mobile-divider.svg"
        alt="An circuit wire divider."
        width={100}
        height={100}
        className="block md:hidden w-64 h-64 sm:w-96 sm:h-96 absolute top-0 -translate-y-1/2 select-none"
        draggable={false}
      />
      <SectionTitle flickerIndices={[1, 4, 5]}>Tracks</SectionTitle>
      <p className="">Learn more about the tracks we offer.</p>
      <div className="flex flex-col pt-16 pb-4 space-y-20">
        <Track
          name="Entertainment"
          description="Create innovative solutions for the entertainment industry, including gaming, streaming, content creation, and immersive experiences. Build a game with a unique twist, design a tool for streamers to engage their audience, develop an app that enhances content creation, or explore new forms of digital entertainment. The possibilities are endless - we welcome all creative ideas that could make an impact in the world of entertainment."
          left={true}
        />
        <Track
          name="Cybersecurity"
          description="Protect digital information, enhance privacy, and improve online safety for users and organizations. Develop password management systems, network threat detection tools, secure communication platforms, encryption applications, or educational resources. The cybersecurity challenges you tackle are up to you - from personal data protection to large-scale security solutions."
          right={true}
        />
        <Track
          name="Healthcare"
          description="Improve medical care delivery, promote wellness, and tackle public health challenges. Build telehealth solutions, diagnostic tools, mental health tracking applications, accessibility technologies, or fitness platforms. Healthcare innovation has endless possibilities - we welcome all ideas that could make a positive impact on health outcomes."
          left={true}
        />
        <Track
          name="Sustainability"
          description="Address environmental challenges and promote eco-friendly practices through innovative technology. Design carbon footprint tracking apps, smart waste management systems, renewable energy tools, sustainable transportation solutions, or eco-friendly marketplaces. Environmental problems take many forms - your sustainability project can focus on any aspect of creating a healthier planet."
          right={true}
        />
      </div>
      <Image
        src="/images/artifacts/glasses.svg"
        alt="Cyberpunk-style glasses."
        width={100}
        height={100}
        className="hidden md:block w-72 h-72 absolute md:translate-x-[14rem] lg:translate-x-[20rem] bottom-0 translate-y-1/2 select-none drop-shadow-[0_0_10px_#FE5501] hover:rotate-12 transition-all"
        draggable={false}
      />
      <Image
        src="/images/dividers/mobile-divider.svg"
        alt="An circuit wire divider."
        width={100}
        height={100}
        className="block md:hidden w-64 h-64 sm:w-96 sm:h-96 absolute bottom-0 translate-y-1/2 select-none"
        draggable={false}
      />
    </div>
  );
};

export default TracksSection;
