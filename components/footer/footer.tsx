import Image from "next/image";
import { Mail } from "lucide-react";

import { FooterSocialLink } from "@/components/footer/footer-social-link";
import { hackathonDateInfo } from "@/lib/dates";
import { contactEmail, discordLink, gitHubLink, instagramLink } from "@/lib/links";

interface FooterProps {
  daytimeVariant?: boolean;
}

const Footer: React.FC<FooterProps> = ({ daytimeVariant = true }) => {
  return (
    <>
      <Image
        src="/images/arch/Arch.svg"
        alt="The Schmid Gate"
        width={100000}
        height={10000}
        className="translate-y-4 pt-36"
        style={{
          background: daytimeVariant
            ? `linear-gradient(#FFFFFF 0%, #4DC9CC 98%, #00000000 98.1%, #00000000 100%)`
            : `linear-gradient(#000000, #1F214D, #50366F, #BF3475, #EE6C45, #FFCE61, #FFE58A 98%, #00000000 98.1%, #00000000 100%)`,
        }}
      />
      <footer className="flex flex-col justify-center items-center w-full space-y-2 p-4 bg-primary">
        <p className="font-TangoSansBold text-xl text-center text-white">PantherHacks {hackathonDateInfo.year}</p>
        <p className="text-white text-center pt-2">Made with ❤️ by the PantherHacks Team</p>
        <div className="flex flex-row justify-center items-center space-x-1" aria-label="Social Links">
          <FooterSocialLink href={gitHubLink} aria-label="PantherHacks GitHub">
            <Image
              src="/icons/github.svg"
              alt="GitHub Icon"
              width={24}
              height={24}
              className="select-none"
              draggable={false}
            />
          </FooterSocialLink>
          <FooterSocialLink href={discordLink} aria-label="PantherHacks Discord">
            <Image
              src="/icons/discord.svg"
              alt="Discord Icon"
              width={24}
              height={24}
              className="select-none"
              draggable={false}
            />
          </FooterSocialLink>
          <FooterSocialLink href={instagramLink} aria-label="PantherHacks Instagram">
            <Image
              src="/icons/instagram.svg"
              alt="Instagram Icon"
              width={24}
              height={24}
              className="select-none"
              draggable={false}
            />
          </FooterSocialLink>
          <FooterSocialLink href={contactEmail} aria-label="Chapman Computer Science Club Email">
            <Mail className="w-[24px] h-[24px] text-white" />
          </FooterSocialLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
