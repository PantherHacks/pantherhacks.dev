import Image from "next/image";

import "./track.css";

interface ITrackProps {
  name: string;
  imageSrc: string;
}

const Track: React.FC<ITrackProps> = ({ name, imageSrc }) => {
  return (
    <div className="flex flex-col items-center space-y-4 md:hover:scale-105 transition-transform duration-300 md:cursor-pointer">
      <Image src={imageSrc} width={300} height={300} alt={`${name} Track`} className="track-image" />
      <p className="font-TangoSansBold text-[#FC8332] text-3xl text-center">{name}</p>
    </div>
  );
};

export default Track;
