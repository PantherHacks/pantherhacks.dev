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
      id={`${name.toLowerCase()}-track`}
      className={`scroll-m-40 flex flex-col items-center space-y-4 w-full transition-transform duration-300 ${left ? "md:translate-x-[-4rem] lg:translate-x-[-6rem] xl:translate-x-[-12rem] 2xl:translate-x-[-20rem]" : right ? "md:translate-x-[4rem] lg:translate-x-[6rem] xl:translate-x-[12rem] 2xl:translate-x-[20rem]" : ""}`}
    >
      <div className="relative flex flex-col rounded-none p-2 sm:p-6 w-auto mx-6 md:mx-0 md:w-[40rem] lg:w-[50rem] 3xl:w-[60rem] z-3">
        <div
          className="absolute z-[1] pointer-events-none w-full h-full top-0 left-0"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(244, 126, 209, 0.15), transparent, rgba(244, 126, 209, 0.15))" }}
        />
        <div
          className="absolute z-[1] pointer-events-none w-full h-full top-0 left-0"
          style={{ backgroundImage: left ? "linear-gradient(to right, rgba(244, 126, 209, 0.15), transparent)" : right ? "linear-gradient(to left, rgba(244, 126, 209, 0.15), transparent)" : undefined }}
        />
        <div
          className={`track-frame absolute z-[9] pointer-events-none w-6 h-full top-0 bg-primaryPink ${left ? "left-0" : right ? "right-0" : ""}`}
        />
        <div className="track-frame absolute z-10 pointer-events-none w-full h-3 -top-[0.25rem] left-0 bg-primaryPink" />
        <div className="track-frame absolute z-[8] pointer-events-none w-full h-3 bottom-0 left-0 bg-primaryPink" />
        <div
          className={`track-beam absolute z-[5] pointer-events-none w-screen h-10 top-[20%] bg-gradient-to-b from-[#9b72a4] via-gray-700 to-gray-900 ${left ? "right-full" : right ? "left-full" : ""}`}
        />
        <div
          className={`track-beam absolute z-[5] pointer-events-none w-screen h-10 top-[70%] bg-gradient-to-b from-[#9b72a4] via-gray-700 to-gray-900 ${left ? "right-full" : right ? "left-full" : ""}`}
        />
        <div
          className={`flex flex-row gap-x-8 items-center my-3 md:my-5 ${left ? "flex-row ml-4 mr-2 lg:ml-12 lg:mr-8" : right ? "flex-row mr-4 ml-2 lg:mr-12 lg:ml-8" : ""}`}
        >
          <Image
            src={`/images/tracks/${name.toLowerCase()}.svg`}
            width={0}
            height={0}
            alt={`${name} Track`}
            className={`track-image w-20 h-20 sm:w-36 sm:h-36 lg:w-40 lg:h-40 select-none hidden lg:block transform-gpu`}
            draggable={false}
          />
          <div className="flex flex-col h-full gap-y-2 justify-start items-start p-4">
            <div className="flex flex-row gap-x-2 items-center">
              <Image
                src={`/images/tracks/${name.toLowerCase()}.svg`}
                width={0}
                height={0}
                alt={`${name} Track`}
                className={`track-image w-10 h-10 lg:hidden select-none block transform-gpu`}
                draggable={false}
              />
              <h2 className="text-primaryPink font-Xirod font-bold text-lg sm:text-xl lg:text-2xl track-title">
                {name} <br /> Track
              </h2>
            </div>
            <hr className="border-primaryPink border-t-2 w-[10rem] track-frame" />
            <p className="text-white font-UbuntuMonoItalic">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
