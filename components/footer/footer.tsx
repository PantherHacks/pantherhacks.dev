import Image from "next/image";

import { FooterSocialLink } from "@/components/footer/footer-social-link";
import { YearSwitcher } from "@/components/footer/year-switcher";
import { hackathonDateInfo } from "@/lib/dates";
import { contactEmail, discordLink, gitHubLink, instagramLink } from "@/lib/links";

import "./footer.css";

interface FooterProps {
  daytimeVariant?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="footer-glow flex w-full flex-col items-center justify-center space-y-2 bg-black p-4 font-UbuntuMono">
        <div className="flex items-center gap-2">
          <p className="text-center font-Xirod text-xl text-white">PantherHacks {hackathonDateInfo.year}</p>
        </div>
        <p className="pt-2 text-center text-white">Made with ❤️ by the PantherHacks Team</p>
        <div className="flex flex-row items-center justify-center space-x-1" aria-label="Social Links">
          <FooterSocialLink href={gitHubLink} aria-label="PantherHacks GitHub">
            <Image
              src="/icons/github.svg"
              alt="GitHub Icon"
              width={0}
              height={0}
              className="icon-neon h-6 w-6 transform-gpu select-none"
              unoptimized
              draggable={false}
            />
          </FooterSocialLink>
          <FooterSocialLink href={discordLink} aria-label="PantherHacks Discord">
            <Image
              src="/icons/discord.svg"
              alt="Discord Icon"
              width={0}
              height={0}
              className="icon-neon h-6 w-6 transform-gpu select-none"
              unoptimized
              draggable={false}
            />
          </FooterSocialLink>
          <FooterSocialLink href={instagramLink} aria-label="PantherHacks Instagram">
            <Image
              src="/icons/instagram.svg"
              alt="Instagram Icon"
              width={0}
              height={0}
              className="icon-neon h-6 w-6 transform-gpu select-none"
              unoptimized
              draggable={false}
            />
          </FooterSocialLink>
          <FooterSocialLink href={contactEmail} aria-label="Chapman Computer Science Club Email">
            <Image
              src="/icons/mail.svg"
              alt="Instagram Icon"
              width={0}
              height={0}
              className="icon-neon h-6 w-6 transform-gpu select-none"
              unoptimized
              draggable={false}
            />
          </FooterSocialLink>
        </div>
        <YearSwitcher />
      </footer>
    </>
  );
};

export default Footer;
