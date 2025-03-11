"use client";

import Image from "next/image";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import { hackathonDateInfo } from "@/lib/dates";

const Heading = () => {
  return (
    <>
      <ParallaxBanner
        className="h-[60rem] [@media(min-width:1000px)]:h-[70rem] [@media(min-width:1800px)]:h-[80rem] parallax-banner"
        style={{
          background: `linear-gradient(#195B7B 0%, #4DC9CC 30%, #BEFCFD 100%)`,
        }}
      >
        <ParallaxBannerLayer speed={1}>
          <Image
            className="absolute w-[200%] top-[22rem] z-10"
            src="/images/main-background/mountain-1-cropped.svg"
            alt="Mountain"
            width={0}
            height={0}
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={10}>
          <Image
            className="absolute w-[200%] top-[32rem] z-20"
            src="/images/main-background/mountain-2-cropped.svg"
            alt="Mountain"
            width={0}
            height={0}
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={20}>
          <div className="absolute w-full bg-[#3F1324] top-[54rem] h-[100rem] z-30" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={30}>
          <Image
            className="absolute w-[200%] top-[48rem] z-40"
            src="/images/main-background/keck-cropped-cropped.svg"
            alt="Keck Center"
            width={0}
            height={0}
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={20}>
          <div className="absolute w-full flex justify-center items-center text-center top-[26rem] z-50">
            <h1 className="font-TangoSansBold text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#befcfd] max-w-[calc(100vw-4rem)]">
              PANTHERHACKS {hackathonDateInfo.year}
            </h1>
          </div>
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={20}>
          <div className="absolute w-full flex flex-col justify-center items-center text-center gap-y-8 top-[64rem] [@media(min-width:1000px)]:top-[72rem] [@media(min-width:1550px)]:top-[77rem] [@media(min-width:1800px)]:top-[85rem] z-[60]">
            <h2 className="font-TangoSansBold text-xl sm:text-5xl text-white cursor-default [@media(min-width:1800px)]:bg-[#3F1324] p-4 rounded-lg">
              {hackathonDateInfo.dateString}
            </h2>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Heading;
