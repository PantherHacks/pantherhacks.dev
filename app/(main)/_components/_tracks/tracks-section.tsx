import Image from "next/image";

import { SectionTitle } from "@/components/section-title";
import Track from "./track";

const TracksSection = () => {
  return (
    <div
      id="tracks"
      className="relative flex w-full flex-col items-center justify-center overflow-x-clip pb-40 pt-40 md:pb-20 md:pt-20"
    >
      <Image
        src="/logos/pantherhacks/cyborg_pete_orange.svg"
        alt="A cyberpunk-style coffee cup."
        width={100}
        height={100}
        className="absolute top-0 hidden h-40 w-40 -translate-y-3/4 select-none drop-shadow-[0_0_5px_#FE5501] transition-all hover:-rotate-12 md:block"
        draggable={false}
      />
      <Image
        src="/images/dividers/mobile-divider.svg"
        alt="An circuit wire divider."
        width={100}
        height={100}
        className="absolute top-0 block h-64 w-64 -translate-y-1/2 select-none sm:h-96 sm:w-96 md:hidden"
        draggable={false}
      />
      <SectionTitle flickerIndices={[1, 4, 5]}>Tracks</SectionTitle>
      <p className="">Learn more about the tracks we offer.</p>
      <div className="flex flex-col space-y-20 pb-16 pt-16">
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
        src="/images/artifacts/coffee_cup.svg"
        alt="A cyberpunk-style coffee cup."
        width={100}
        height={100}
        className="absolute bottom-0 hidden h-40 w-40 translate-y-1/2 select-none drop-shadow-[0_0_10px_#FE5501] transition-all hover:-rotate-12 md:block md:-translate-x-[14rem] lg:-translate-x-[20rem]"
        draggable={false}
      />
      <Image
        src="/images/artifacts/glasses.svg"
        alt="Cyberpunk-style glasses."
        width={100}
        height={100}
        className="absolute bottom-0 hidden h-72 w-72 translate-y-1/2 select-none drop-shadow-[0_0_10px_#FE5501] transition-all hover:rotate-12 md:block md:translate-x-[14rem] lg:translate-x-[20rem]"
        draggable={false}
      />
      <Image
        src="/images/dividers/mobile-divider.svg"
        alt="An circuit wire divider."
        width={100}
        height={100}
        className="absolute bottom-0 block h-64 w-64 translate-y-1/2 select-none sm:h-96 sm:w-96 md:hidden"
        draggable={false}
      />
    </div>
  );
};

export default TracksSection;
