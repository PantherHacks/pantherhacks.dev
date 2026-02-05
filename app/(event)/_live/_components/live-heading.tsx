import Countdown from "@/components/countdown";
import { hackathonDateInfo } from "@/lib/dates";

const LiveHeading = () => {
  return (
    <div id="home" className="flex flex-col flex-1 justify-center items-center mt-48 mx-auto max-w-[50rem]">
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <h2 className="font-TangoSansBold text-6xl text-[#fd021d] flex flex-row justify-center items-center gap-2">
          <span className="text-white text-shadow-none text-7xl">[</span>
          <div className="flex items-center gap-4 translate-y-[0.5rem]">
            <div className="relative flex justify-center items-center">
              <div className="absolute inline-flex w-6 h-6 bg-[#fd021d] rounded-full animate-ping duration-1000"></div>
              <div className="relative inline-flex w-8 h-8 bg-[#fd021d] rounded-full"></div>
            </div>
            <span className="neon-text transform-gpu">LIVE</span>
          </div>
          <span className="text-white text-shadow-none text-7xl">]</span>
        </h2>
        <h2 className="font-TangoSansBold text-4xl sm:text-6xl md:text-7xl text-white text-center mx-6">
          PANTHERHACKS {hackathonDateInfo.year}
        </h2>
      </div>
      <div className="flex flex-col flex-1 w-full justify-center items-center mt-10">
        <Countdown dark />
      </div>
    </div>
  );
};

export default LiveHeading;
