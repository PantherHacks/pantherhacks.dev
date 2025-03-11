import Image from "next/image";

import "./track.css";

interface ITrackProps {
  name: string;
}

const Track: React.FC<ITrackProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center space-y-4 md:hover:scale-105 transition-transform duration-300">
      <Image
        src={`/images/tracks/${name.toLowerCase()}.svg`}
        width={300}
        height={300}
        alt={`${name} Track`}
        className="track-image select-none hidden md:block"
        draggable={false}
      />
      <Image
        src={`/images/tracks/${name.toLowerCase()}-mobile.svg`}
        width={300}
        height={300}
        alt={`${name} Track`}
        className="track-image select-none block md:hidden"
        draggable={false}
      />
      <p className="font-TangoSansBold text-[#FC8332] text-3xl text-center">{name}</p>
    </div>
  );
};

export default Track;
