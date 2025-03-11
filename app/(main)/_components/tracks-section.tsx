import Image from "next/image";

import Track from "./track";

const TracksSection = () => {
  return (
    <div id="tracks" className="flex flex-col items-center justify-center w-full py-40 relative">
      <Image
        src="/images/oranges/orange-branch-1.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-96 h-96 absolute -left-2 top-0 -translate-y-1/2 select-none"
        draggable={false}
      />
      <h2 className="font-TangoSansBold text-6xl text-[#EE5000] pb-10">Tracks</h2>
      <div className="md:grid md:grid-cols-2 space-y-16 md:space-y-0 md:gap-16">
        <Track name="AI" imageSrc="/tracks/ai.svg" />
        <Track name="Cybersecurity" imageSrc="/tracks/cybersecurity.svg" />
        <Track name="Healthcare" imageSrc="/tracks/healthcare.svg" />
        <Track name="Sustainability" imageSrc="/tracks/sustainability.svg" />
      </div>
      <Image
        src="/images/oranges/orange-branch-2.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-96 h-96 absolute -right-2 bottom-0 translate-y-1/2 select-none"
        draggable={false}
      />
    </div>
  );
};

export default TracksSection;
