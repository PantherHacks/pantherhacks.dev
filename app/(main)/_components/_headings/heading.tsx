"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import SpecialButton from "@/components/ui/special-button";
import { hackathonDateInfo } from "@/lib/dates";

import "./heading.css";

const Heading = () => {
  return (
    <>
      <ParallaxBanner
        className="h-screen parallax-banner"
        style={{
          background: `linear-gradient(#0c0a24 0%, #0b0b0b 30%, #000000 100%)`,
        }}
      >
        {/* <ParallaxBannerLayer speed={1}>
          <Image
            className="absolute w-[200%] top-1/2 z-10"
            src="/images/main-background/mountain-1-cropped.svg"
            alt="Mountain"
            width={0}
            height={0}
            loading="eager"
          />
        </ParallaxBannerLayer> */}

        <ParallaxBannerLayer speed={10}>
          <Image
            className="absolute h-screen min-w-full w-auto max-w-[5000rem] xl:top-0 top-60 left-1/2 -translate-x-1/2 z-20 grayscale"
            src="/images/main-background/building-background.svg"
            alt="Buildings"
            width={0}
            height={0}
            draggable={false}
            loading="eager"
          />
        </ParallaxBannerLayer>

        {/* <ParallaxBannerLayer speed={20}>
          <div className="absolute w-full bg-[#000000] top-[62rem] h-[100rem] z-30" />
        </ParallaxBannerLayer> */}

        {/* <ParallaxBannerLayer speed={30}>
          <Image
            className="absolute w-[200%] top-1/2 z-40"
            src="/images/main-background/keck-cropped-cropped.svg"
            alt="Keck Center"
            width={0}
            height={0}
            loading="eager"
          />
        </ParallaxBannerLayer> */}

        <ParallaxBannerLayer speed={20}>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-y-6 z-30">
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
            <h2 className="font-UbuntuMonoBold text-xl sm:text-5xl text-primary cursor-default p-4 rounded-lg">
              {hackathonDateInfo.dateString}
            </h2>
            <Link href="/apply" target="_blank" rel="noopener noreferrer">
              <SpecialButton className="font-Xirod text-4xl">APPLY NOW</SpecialButton>
            </Link>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Heading;
