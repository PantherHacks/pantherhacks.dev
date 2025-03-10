import Image from "next/image";

import { FooterSocialLink } from "@/components/footer/footer-social-link";
import { hackathonDateInfo } from "@/lib/dates";

const Footer = () => {
  return (
    <>
      <Image
        src="/images/arch/Arch.svg"
        alt="The Schmid Gate"
        width={100000}
        height={10000}
        className="translate-y-2"
      />
      <footer className="flex flex-col justify-center items-center w-full space-y-2 p-4 bg-primary">
        <h1 className="font-TangoSansBold text-xl text-center text-white">PantherHacks {hackathonDateInfo.year}</h1>
        {/* <InterestForm /> */}
        <h1 className="text-white text-center pt-2">Made with ❤️ by the PantherHacks Team</h1>
        <div className="flex flex-row justify-center items-center space-x-1" aria-label="Social Links">
          <FooterSocialLink href="https://github.com/PantherHacks/pantherhacks.dev" aria-label="PantherHacks GitHub">
            <Image src="/icons/github.svg" alt="GitHub Icon" width={24} height={24} className="filter invert" />
          </FooterSocialLink>
          <FooterSocialLink href="https://discord.gg/9NSwX5PxqC" aria-label="PantherHacks Discord">
            <Image src="/icons/discord.svg" alt="Discord Icon" width={24} height={24} className="filter invert" />
          </FooterSocialLink>
          <FooterSocialLink href="https://www.instagram.com/chapmancsclub/" aria-label="PantherHacks Instagram">
            <Image src="/icons/instagram.svg" alt="Instagram Icon" width={24} height={24} className="filter invert" />
          </FooterSocialLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
