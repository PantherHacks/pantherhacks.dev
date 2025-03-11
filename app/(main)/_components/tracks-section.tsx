import Track from "./track";

const TracksSection = () => {
  return (
    <div id="tracks" className="flex flex-col items-center justify-center w-full py-40">
      <h2 className="font-TangoSansBold text-6xl text-[#EE5000] pb-10">Tracks</h2>
      <div className="md:grid md:grid-cols-2 md:gap-16">
        <Track name="AI" imageSrc="/tracks/ai.svg" />
        <Track name="Cybersecurity" imageSrc="/tracks/cybersecurity.svg" />
        <Track name="Healthcare" imageSrc="/tracks/healthcare.svg" />
        <Track name="Sustainability" imageSrc="/tracks/sustainability.svg" />
      </div>
    </div>
  );
};

export default TracksSection;
