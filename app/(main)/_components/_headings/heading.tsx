"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import SpecialButton from "@/components/ui/special-button";
import { hackathonDateInfo } from "@/lib/dates";

import "./heading.css";

import { TrophyIcon } from "lucide-react";

const Heading = () => {
  return (
    <>
      <ParallaxBanner
        className="parallax-banner h-screen"
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
            className="absolute left-1/2 top-60 z-20 h-screen w-auto min-w-full max-w-[5000rem] -translate-x-1/2 select-none grayscale xl:top-64"
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
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-y-6 text-center">
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
            <h2 className="cursor-default rounded-lg p-4 font-UbuntuMonoBold text-xl text-primary sm:text-5xl">
              {hackathonDateInfo.dateString}
            </h2>
            <Link href="/winners" target="_blank" rel="noopener noreferrer">
              <SpecialButton className="flex flex-row items-center gap-x-4 font-Xirod text-4xl">
                <TrophyIcon className="h-10 w-10" /> VIEW WINNERS
              </SpecialButton>
            </Link>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Heading;
