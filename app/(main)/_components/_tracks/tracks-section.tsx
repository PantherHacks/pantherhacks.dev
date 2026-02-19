import Image from "next/image";

import Track from "./track";

const TracksSection = () => {
  return (
    <div id="tracks" className="flex flex-col items-center justify-center w-full py-40 relative overflow-x-clip">
      <Image
        src="/images/oranges/orange-branch-1.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-96 h-96 absolute -left-2 top-0 -translate-y-1/2 select-none"
        draggable={false}
      />
      <Image
        src="/images/oranges/orange-branch-mobile-divider.svg"
        alt="An orange branch divider."
        width={100}
        height={100}
        className="block md:hidden w-64 h-64 sm:w-96 sm:h-96 absolute top-0 -translate-y-1/2 select-none"
        draggable={false}
      />
      <h2 className="font-Xirod text-6xl text-[#EE5000] pb-10">Tracks</h2>
      <p className="">Learn more about the tracks we offer.</p>
      <div className="flex flex-col pt-8 pb-4 md:grid md:grid-cols-2 space-y-16 md:space-y-0 md:gap-16">
        <Track
          name="AI"
          popupNameOverride="Artificial Intelligence"
          popupDescription="Use artificial intelligence to solve real-world problems or improve everyday experiences. Create intelligent chatbots, personalized recommendation systems, computer vision applications, predictive analytics tools, or natural language processing solutions. Your AI project can take many forms - we encourage creative approaches that explore the potential of this technology."
          leftOffset={true}
        />
        <Track
          name="Cybersecurity"
          popupDescription="Protect digital information, enhance privacy, and improve online safety for users and organizations. Develop password management systems, network threat detection tools, secure communication platforms, encryption applications, or educational resources. The cybersecurity challenges you tackle are up to you - from personal data protection to large-scale security solutions."
          rightOffset={true}
        />
        <Track
          name="Healthcare"
          popupDescription="Improve medical care delivery, promote wellness, and tackle public health challenges. Build telehealth solutions, diagnostic tools, mental health tracking applications, accessibility technologies, or fitness platforms. Healthcare innovation has endless possibilities - we welcome all ideas that could make a positive impact on health outcomes."
          leftOffset={true}
        />
        <Track
          name="Sustainability"
          popupDescription="Address environmental challenges and promote eco-friendly practices through innovative technology. Design carbon footprint tracking apps, smart waste management systems, renewable energy tools, sustainable transportation solutions, or eco-friendly marketplaces. Environmental problems take many forms - your sustainability project can focus on any aspect of creating a healthier planet."
          rightOffset={true}
        />
      </div>
      <Image
        src="/images/oranges/orange-branch-2.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-96 h-96 absolute -right-2 bottom-0 translate-y-1/2 select-none"
        draggable={false}
      />
      <Image
        src="/images/oranges/orange-branch-mobile-divider.svg"
        alt="An orange branch divider."
        width={100}
        height={100}
        className="block md:hidden w-64 h-64 sm:w-96 sm:h-96 absolute bottom-0 translate-y-1/2 select-none"
        draggable={false}
      />
    </div>
  );
};

export default TracksSection;
