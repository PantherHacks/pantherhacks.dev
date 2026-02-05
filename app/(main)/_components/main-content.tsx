"use client";

import { hackathonDateInfo } from "@/lib/dates";

const MainContent = () => {
  return (
    <div className="flex flex-grow flex-col w-full min-h-screen">
      <div
        className="flex-grow flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, #0a0e27 0%, #1a1042 50%, #2d1b69 100%)`,
        }}
      >
        <div className="absolute inset-0 z-0">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 3;
            const duration = Math.random() * 2 + 2;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: Math.random() * 0.5 + 0.5,
                }}
              />
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center gap-8 px-4 z-10">
          <h1 className="font-Xirod text-xl sm:text-2xl lg:text-5xl xl:text-6xl text-[#FF5500] drop-shadow-lg text-center">
            PANTHERHACKS {hackathonDateInfo.year}
          </h1>

          <h2 className="font-UbuntuMono text-lg sm:text-xl lg:text-4xl xl:text-5xl text-[#00EEFF] drop-shadow-md text-center">
            [ coming soon
            <span className="animate-blink">_</span>
            {" ]"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
