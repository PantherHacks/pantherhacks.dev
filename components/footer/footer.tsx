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
      <footer className="footer-glow flex flex-col justify-center items-center w-full space-y-2 p-4 bg-black font-UbuntuMono">
        <div className="flex items-center gap-2">
          <p className="font-Xirod text-xl text-center text-white">PantherHacks {hackathonDateInfo.year}</p>
        </div>
        <p className="text-white text-center pt-2">Made with ❤️ by the PantherHacks Team</p>
        <div className="flex flex-row justify-center items-center space-x-1" aria-label="Social Links">
          {/* eslint-disable @next/next/no-img-element */}
          <FooterSocialLink href={gitHubLink} aria-label="PantherHacks GitHub">
            <img src="/icons/github.svg" alt="GitHub Icon" className="w-6 h-6 select-none" draggable={false} />
          </FooterSocialLink>
          <FooterSocialLink href={discordLink} aria-label="PantherHacks Discord">
            <img src="/icons/discord.svg" alt="Discord Icon" className="w-6 h-6 select-none" draggable={false} />
          </FooterSocialLink>
          <FooterSocialLink href={instagramLink} aria-label="PantherHacks Instagram">
            <img src="/icons/instagram.svg" alt="Instagram Icon" className="w-6 h-6 select-none" draggable={false} />
          </FooterSocialLink>
          <FooterSocialLink href={contactEmail} aria-label="Chapman Computer Science Club Email">
            <img src="/icons/mail.svg" alt="Email Icon" className="w-6 h-6 select-none" draggable={false} />
          </FooterSocialLink>
          {/* eslint-enable @next/next/no-img-element */}
        </div>
        <YearSwitcher />
      </footer>
    </>
  );
};

export default Footer;
