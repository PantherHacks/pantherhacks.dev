import Image from "next/image";

import { FooterSocialLink } from "@/components/footer/footer-social-link";
import InterestForm from "@/components/footer/interest-form";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full space-y-2 p-4 bg-primary">
      <h1 className="font-TangoSansBold text-xl text-center text-white">PantherHacks 2025</h1>
      {/* <InterestForm /> */}
      <h1 className="text-white text-center pt-2">Made with ❤️ by the PantherHacks Team</h1>
      <div className="flex flex-row justify-center items-center space-x-1" aria-label="Social Links">
        <FooterSocialLink href="https://github.com/pantherhacks" aria-label="PantherHacks GitHub">
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
  );
};

export default Footer;
