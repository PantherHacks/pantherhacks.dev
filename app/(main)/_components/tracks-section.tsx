import Image from "next/image";

const TracksSection = () => {
  return (
    <div id="tracks" className="flex flex-col items-center justify-center w-full py-40">
      <h2 className="font-TangoSansBold text-6xl text-[#EE5000] p-4">Tracks</h2>
      <div className="md:grid md:grid-cols-2 md:gap-16">
        <div className="flex flex-col items-center space-y-4">
          <Image src="/tracks/ai.svg" width={300} height={300} alt="AI Track" />
          <p className="font-TangoSansBold text-[#FC8332] text-3xl text-center">AI</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image src="/tracks/cybersecurity.svg" width={300} height={300} alt="Cybersecurity Track" />
          <p className="font-TangoSansBold text-[#FC8332] text-3xl text-center">Cybersecurity</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image src="/tracks/healthcare.svg" width={300} height={300} alt="Healthcare Track" />
          <p className="font-TangoSansBold text-[#FC8332] text-3xl text-center">Healthcare</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image src="/tracks/sustainability.svg" width={300} height={300} alt="Sustainability Track" />
          <p className="font-TangoSansBold text-[#FC8332] text-3xl text-center">Sustainability</p>
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
