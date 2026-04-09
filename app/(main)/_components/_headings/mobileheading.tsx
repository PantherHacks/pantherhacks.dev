import Image from "next/image";
import Link from "next/link";

import SpecialButton from "@/components/ui/special-button";
import { hackathonDateInfo } from "@/lib/dates";

import "./mobileheading.css";
import "./heading.css";

import { TrophyIcon } from "lucide-react";

const MobileHeading = () => {
  return (
    <div
      className="mobile-heading relative flex w-full flex-col items-center justify-start overflow-hidden pb-40"
      style={{
        background: `linear-gradient(#0c0a24 0%, #0b0b0b 30%, #000000 100%)`,
      }}
    >
      <Image
        className="pointer-events-none absolute top-[30%] w-[600%] select-none grayscale"
        src="/images/main-background/building-background.svg"
        alt="Buildings"
        width={0}
        height={0}
        draggable={false}
        loading="eager"
        unoptimized
      />
      <div className="relative z-10 flex flex-col items-center gap-y-6 px-4 pt-40">
        <Image
          className="logo-glow w-[20em] select-none"
          src="/logos/pantherhacks/pantherhacks_wordmark_2026.svg"
          alt="PantherHacks 2026"
          width={252}
          height={77}
          loading="eager"
          draggable={false}
          unoptimized
        />
        <h2 className="cursor-default font-UbuntuMonoBold text-3xl text-primary">{hackathonDateInfo.dateString}</h2>
        <Link href="/winners" rel="noopener noreferrer">
          <SpecialButton className="flex flex-row items-center gap-x-4 font-Xirod text-2xl">
            <TrophyIcon className="h-10 w-10" /> VIEW WINNERS
          </SpecialButton>
        </Link>
      </div>
    </div>
  );
};

export default MobileHeading;
