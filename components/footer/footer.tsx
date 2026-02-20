import Image from "next/image";

import { FooterSocialLink } from "@/components/footer/footer-social-link";
import { hackathonDateInfo } from "@/lib/dates";
import { contactEmail, discordLink, gitHubLink, instagramLink } from "@/lib/links";

import "./footer.css";

interface FooterProps {
  daytimeVariant?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="footer-glow flex flex-col justify-center items-center w-full space-y-2 p-4 bg-black font-UbuntuMono">
        <p className="font-Xirod text-xl text-center text-white">PantherHacks {hackathonDateInfo.year}</p>
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
            <Image
              src="/icons/mail.svg"
              alt="Instagram Icon"
              width={24}
              height={24}
              className="select-none"
              draggable={false}
            />
          </FooterSocialLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
