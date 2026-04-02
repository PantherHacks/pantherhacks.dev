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
      className={`flex w-full scroll-m-40 flex-col items-center space-y-4 transition-transform duration-300 ${left ? "md:translate-x-[-4rem] lg:translate-x-[-6rem] xl:translate-x-[-12rem] 2xl:translate-x-[-20rem]" : right ? "md:translate-x-[4rem] lg:translate-x-[6rem] xl:translate-x-[12rem] 2xl:translate-x-[20rem]" : ""}`}
    >
      <div className="3xl:w-[60rem] z-3 relative mx-6 flex w-auto flex-col rounded-none p-2 sm:p-6 md:mx-0 md:w-[40rem] lg:w-[50rem]">
        <div
          className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(244, 126, 209, 0.15), transparent, rgba(244, 126, 209, 0.15))",
          }}
        />
        <div
          className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-full"
          style={{
            backgroundImage: left
              ? "linear-gradient(to right, rgba(244, 126, 209, 0.15), transparent)"
              : right
                ? "linear-gradient(to left, rgba(244, 126, 209, 0.15), transparent)"
                : undefined,
          }}
        />
        <div
          className={`track-frame pointer-events-none absolute top-0 z-[9] h-full w-6 bg-primaryPink ${left ? "left-0" : right ? "right-0" : ""}`}
        />
        <div className="track-frame pointer-events-none absolute -top-[0.25rem] left-0 z-10 h-3 w-full bg-primaryPink" />
        <div className="track-frame pointer-events-none absolute bottom-0 left-0 z-[8] h-3 w-full bg-primaryPink" />
        <div
          className={`track-beam pointer-events-none absolute top-[20%] z-[5] h-10 w-screen ${left ? "right-full" : right ? "left-full" : ""}`}
          style={{ backgroundImage: "linear-gradient(to bottom, #9b72a4, #374151, #000000)" }}
        />
        <div
          className={`track-beam pointer-events-none absolute top-[70%] z-[5] h-10 w-screen ${left ? "right-full" : right ? "left-full" : ""}`}
          style={{ backgroundImage: "linear-gradient(to bottom, #9b72a4, #374151, #000000)" }}
        />
        <div
          className={`my-3 flex flex-row items-center gap-x-8 md:my-5 ${left ? "ml-4 mr-2 flex-row lg:ml-12 lg:mr-8" : right ? "ml-2 mr-4 flex-row lg:ml-8 lg:mr-12" : ""}`}
        >
          <Image
            src={`/images/tracks/${name.toLowerCase()}.svg`}
            width={0}
            height={0}
            alt={`${name} Track`}
            className={`track-image hidden h-20 w-20 transform-gpu select-none sm:h-36 sm:w-36 lg:block lg:h-40 lg:w-40`}
            draggable={false}
          />
          <div className="flex h-full flex-col items-start justify-start gap-y-2 p-4">
            <div className="flex flex-row items-center gap-x-2">
              <Image
                src={`/images/tracks/${name.toLowerCase()}.svg`}
                width={0}
                height={0}
                alt={`${name} Track`}
                className={`track-image block h-10 w-10 transform-gpu select-none lg:hidden`}
                draggable={false}
              />
              <h2 className="track-title font-Xirod text-lg font-bold text-primaryPink sm:text-xl lg:text-2xl">
                {name} <br /> Track
              </h2>
            </div>
            <hr className="track-frame w-[10rem] border-t-2 border-primaryPink" />
            <p className="font-UbuntuMonoItalic text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
