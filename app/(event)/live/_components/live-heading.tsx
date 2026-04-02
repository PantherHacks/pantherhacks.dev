import Image from "next/image";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import Countdown from "@/components/countdown/countdown";

import "./live.css";

const LiveHeading = () => {
  return (
    <ParallaxBanner
      className="parallax-banner h-screen"
      style={{
        background: `linear-gradient(#0c0a24 0%, #0b0b0b 30%, #000000 100%)`,
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

      <div
        id="home"
        className="absolute inset-0 z-10 mx-auto flex max-w-[60rem] flex-col items-center justify-center gap-y-8"
      >
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
        <div className="z-50 flex w-full items-center justify-center px-4 py-4 sm:px-16 md:px-20">
          <Countdown dark size="large" />
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default LiveHeading;
