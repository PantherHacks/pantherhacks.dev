import Image from "next/image";

import Countdown from "@/components/countdown/countdown";

import "./live.css";

const LiveHeading = () => {
  return (
    <div id="home" className="mx-auto mt-48 flex max-w-[50rem] flex-1 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <div className="z-30 flex flex-col items-center justify-center gap-y-6 text-center">
          <Image
            className="logo-glow w-[min(40em,90vw)] select-none"
            src="/logos/pantherhacks/pantherhacks_wordmark_2026.svg"
            alt="PantherHacks 2026"
            width={252}
            height={77}
            loading="eager"
            draggable={false}
            unoptimized
          />
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1 flex-col items-center justify-center">
        <Countdown dark />
      </div>
    </div>
  );
};

export default LiveHeading;
