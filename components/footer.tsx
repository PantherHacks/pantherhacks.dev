import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full space-y-2 p-4 bg-primary">
      <h1 className="font-TangoSansBold text-xl text-white">PantherHacks 2025</h1>
      <div className="space-y-1">
        <p className="text-white">Let us know you're interested by submitting your email!</p>
        <div className="flex flex-row space-x-1">
          <Input placeholder="petethepanther@example.com" />
          <Button variant="secondary">Submit</Button>
        </div>
      </div>
      <h1 className="text-white pt-2">Made with ❤️ by the PantherHacks Team</h1>
      <div className="flex flex-row space-x-1">
        <Link href="https://github.com/pantherhacks" target="_blank">
          <Button size="icon">
            <Image src="./icons/github.svg" alt="GitHub Icon" width={24} height={24} className="filter invert" />
          </Button>
        </Link>
        <Link href="https://discord.gg/9NSwX5PxqC" target="_blank">
          <Button size="icon">
            <Image src="./icons/discord.svg" alt="Discord Icon" width={24} height={24} className="filter invert" />
          </Button>
        </Link>
        <Link href="https://www.instagram.com/chapmancsclub/" target="_blank">
          <Button size="icon">
            <Image src="./icons/instagram.svg" alt="Discord Icon" width={24} height={24} className="filter invert" />
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
