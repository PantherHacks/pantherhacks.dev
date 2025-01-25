import Image from "next/image";

import { NavLink } from "@/components/ui/NavLink";

const Navbar = () => {
  return (
    <nav className="m-[20px] w-[calc(100%_-_40px)] rounded-[10px] fixed top-0 left-0 bg-primary z-[1000] flex items-center h-[70px] box-border">
      <div className="flex items-center overflow-hidden">
        <NavLink href="/" variant={"icon"} className="h-[70px] rounded-l-[10px]">
          <Image
            src="/logos/pantherhacks/pantherhacks_mascot_light.png"
            alt="Panther Hacks Logo"
            width={50}
            height={50}
          />
        </NavLink>
      </div>
      <div className="flex items-center flex-grow font-TangoSans text-white text-lg">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#tracks">Tracks</NavLink>
        <NavLink href="#faqs">FAQs</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink
          href="#"
          variant={"bold"}
          className="bg-[rgb(75,0,0)] cursor-not-allowed" // TODO: Update this when we get applying working
        >
          APPLY
        </NavLink>
      </div>
      <div className="flex items-center justify-center">
        <NavLink href="https://github.com/pantherhacks" target="_blank" variant={"icon"}>
          <Image src="./icons/github.svg" alt="GitHub Icon" width={24} height={24} className="filter invert h-[70px]" />
        </NavLink>
        <NavLink href="https://discord.gg/9NSwX5PxqC" target="_blank" variant={"icon"}>
          <Image
            src="./icons/discord.svg"
            alt="Discord Icon"
            width={24}
            height={24}
            className="filter invert h-[70px]"
          />
        </NavLink>
        <NavLink
          href="https://www.instagram.com/chapmancsclub/"
          target="_blank"
          variant="icon"
          className="rounded-r-[10px]"
        >
          <Image
            src="./icons/instagram.svg"
            alt="Discord Icon"
            width={24}
            height={24}
            className="filter invert h-[70px]"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
