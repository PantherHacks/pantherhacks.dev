import Image from "next/image";

import "./winners.css";

import { hackathonDateInfo } from "@/lib/dates";

const WinnersHeading = () => {
  return (
    <div
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(to bottom, #020E22 0%, #020E22 40%, #000000 100%)` }}
    >
      <Image
        className="absolute left-1/2 top-60 h-screen w-auto min-w-full max-w-[5000rem] -translate-x-1/2 select-none opacity-50 xl:top-64"
        src="/images/main-background/building-background.svg"
        alt="Buildings"
        width={0}
        height={0}
        draggable={false}
        loading="eager"
      />

      <div className="relative z-10 flex flex-col items-center gap-y-5 px-4 text-center">
        <Image
          className="logo-glow w-[min(22em,70vw)] select-none"
          src="/logos/pantherhacks/pantherhacks_wordmark_2026.svg"
          alt="PantherHacks 2026"
          width={252}
          height={77}
          loading="eager"
          draggable={false}
          unoptimized
        />

        <div className="flex select-none items-center gap-4 sm:gap-6">
          <span
            className="star-pulse hidden font-Xirod text-xl sm:text-2xl lg:block"
            style={{ color: "#FFD700", textShadow: "0 0 12px #FFD700" }}
          >
            ★
          </span>
          <span
            className="star-pulse hidden font-Xirod text-base sm:text-lg lg:block"
            style={{ color: "#FFD700", textShadow: "0 0 10px #FFD700" }}
          >
            ★
          </span>
          <h1
            className="winners-hero-title select-none font-Xirod tracking-widest"
            style={{ fontSize: "clamp(2.5rem, 11vw, 6rem)" }}
          >
            WINNERS
          </h1>
          <span
            className="star-pulse hidden font-Xirod text-base sm:text-lg lg:block"
            style={{ color: "#FFD700", textShadow: "0 0 10px #FFD700" }}
          >
            ★
          </span>
          <span
            className="star-pulse hidden font-Xirod text-xl sm:text-2xl lg:block"
            style={{ color: "#FFD700", textShadow: "0 0 12px #FFD700" }}
          >
            ★
          </span>
        </div>

        <p
          className="font-UbuntuMono text-xs uppercase tracking-[0.25em] text-white/70"
          style={{ textShadow: "0 0 20px rgba(0,0,0,0.8)" }}
        >
          PantherHacks {hackathonDateInfo.year} &nbsp;·&nbsp; {hackathonDateInfo.month}, {hackathonDateInfo.startDay}-
          {hackathonDateInfo.endDay} &nbsp;·&nbsp; Chapman University
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, #000000)" }}
      />
    </div>
  );
};

export default WinnersHeading;
