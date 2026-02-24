import Image from "next/image";

import "./track.css";

interface ITrackProps {
  name: string;
  description: string;
  left?: boolean;
  right?: boolean;
}

const Track: React.FC<ITrackProps> = ({ name, description, left = false, right = false }) => {
  return (
    <div
      className={`flex flex-col items-center space-y-4 w-full transition-transform duration-300 ${left ? "translate-x-[-10rem]" : right ? "translate-x-[10rem]" : ""}`}
    >
      <div className="relative flex flex-col rounded-none p-6 w-[28rem] lg:w-[50rem] z-3">
        <div
          className={`absolute z-1 pointer-events-none w-full h-full top-0 left-0 bg-gradient-to-b from-primaryPink/15 via-transparent to-primaryPink/15`}
        />
        <div
          className={`absolute z-1 pointer-events-none w-full h-full top-0 left-0 from-primaryPink/15 to-transparent ${left ? "bg-gradient-to-r" : right ? "bg-gradient-to-l" : ""}`}
        />
        <div
          className={`track-frame absolute z-[9] pointer-events-none w-6 h-full top-0 bg-primaryPink ${left ? "left-0" : right ? "right-0" : ""}`}
        />
        <div className="track-frame absolute z-10 pointer-events-none w-full h-3 -top-[0.25rem] left-0 bg-primaryPink" />
        <div className="track-frame absolute z-[8] pointer-events-none w-full h-3 bottom-0 left-0 bg-primaryPink" />
        <div
          className={`track-beam absolute z-[5] pointer-events-none w-full h-10 top-[20%] bg-gradient-to-b from-[#9b72a4] via-gray-700 to-gray-900 ${left ? "right-full" : right ? "left-full" : ""}`}
        />
        <div
          className={`track-beam absolute z-[5] pointer-events-none w-full h-10 top-[70%] bg-gradient-to-b from-[#9b72a4] via-gray-700 to-gray-900 ${left ? "right-full" : right ? "left-full" : ""}`}
        />
        <div
          className={`flex flex-row gap-x-8 items-center ${left ? "flex-row ml-12 mr-8" : right ? "flex-row mr-12 ml-8" : ""}`}
        >
          <Image
            src={`/images/tracks/${name.toLowerCase()}.svg`}
            width={0}
            height={0}
            alt={`${name} Track`}
            className={`track-image w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 select-none block transform-gpu`}
            draggable={false}
          />
          <div className="flex flex-col h-full gap-y-2 justify-start items-start p-4">
            <h2 className="text-primaryPink font-Xirod font-bold text-xl lg:text-2xl track-title">
              {name} <br /> Track
            </h2>
            <hr className="border-primaryPink border-t-2 w-[10rem]" />
            <p className="text-white font-UbuntuMonoItalic">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
