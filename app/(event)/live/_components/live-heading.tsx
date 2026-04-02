import Image from "next/image";

import Countdown from "@/components/countdown/countdown";

import "./live.css";

const LiveHeading = () => {
  return (
    <div id="home" className="flex flex-col flex-1 justify-center items-center mt-48 mx-auto max-w-[50rem]">
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <div className="flex flex-col justify-center items-center text-center gap-y-6 z-30">
          <Image
            className="w-[min(40em,90vw)] select-none logo-glow"
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
      <div className="flex flex-col flex-1 w-full justify-center items-center mt-10">
        <Countdown dark />
      </div>
    </div>
  );
};

export default LiveHeading;
