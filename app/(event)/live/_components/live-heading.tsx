import Image from "next/image";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import Countdown from "@/components/countdown/countdown";

import "./live.css";

const LiveHeading = () => {
  return (
    <ParallaxBanner
      className="parallax-banner h-screen"
      style={{
        background: `linear-gradient(#020E22 0%, #020E22 30%, #000000 100%)`,
      }}
    >
      <ParallaxBannerLayer speed={10} style={{ zIndex: 1 }}>
        <Image
          className="absolute left-1/2 top-60 h-screen w-auto min-w-full max-w-[5000rem] -translate-x-1/2 select-none xl:top-64"
          src="/images/main-background/building-background.svg"
          alt="Buildings"
          width={0}
          height={0}
          draggable={false}
          loading="eager"
        />
      </ParallaxBannerLayer>

      <div id="home" className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-8">
        <Image
          className="logo-glow w-[min(24em,70vw)] select-none"
          src="/logos/pantherhacks/pantherhacks_wordmark_2026.svg"
          alt="PantherHacks 2026"
          width={252}
          height={77}
          loading="eager"
          draggable={false}
          unoptimized
        />
        <div className="flex flex-row items-center justify-center z-50 w-[calc(100%-2rem)] py-4 sm:w-[calc(100%-8rem)] md:w-[calc(100%-10rem)]">
          <Countdown dark size="large" />
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default LiveHeading;
