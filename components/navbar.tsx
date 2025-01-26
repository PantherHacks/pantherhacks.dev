"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/NavLink";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="m-[20px] w-[calc(100vw_-_40px)] rounded-[10px] fixed top-0 left-0 bg-primary z-[1000] flex items-center box-border">
      <div className="hidden md:flex justify-between items-center w-full">
        <div className="flex flex-row items-center">
          <div className="flex items-center overflow-hidden">
            <NavLink href="/" variant={"icon"} className="h-[70px] rounded-l-[10px]" aria-label="Home">
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
        </div>
        <div className="flex items-center justify-center">
          <NavLink
            href="https://github.com/pantherhacks"
            target="_blank"
            variant={"icon"}
            title={"PantherHacks GitHub Link"}
            aria-label={"PantherHacks GitHub Link"}
          >
            <Image
              src="./icons/github.svg"
              alt="GitHub Icon"
              width={24}
              height={24}
              className="filter invert h-[70px]"
            />
          </NavLink>
          <NavLink
            href="https://discord.gg/9NSwX5PxqC"
            target="_blank"
            variant={"icon"}
            title={"PantherHacks Discord Link"}
            aria-label={"PantherHacks Discord Link"}
          >
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
            title={"PantherHacks Instagram Link"}
            aria-label={"PantherHacks Instagram Link"}
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
      </div>
      <div className="flex flex-col w-full md:hidden">
        <div className="flex items-center justify-between w-full overflow-hidden">
          <NavLink
            href="/"
            variant={"icon"}
            className={cn("h-[70px]", isMobileOpen ? "rounded-tl-[10px]" : "rounded-l-[10px]")}
            aria-label="Home"
          >
            <Image
              src="/logos/pantherhacks/pantherhacks_mascot_light.png"
              alt="Panther Hacks Logo"
              width={50}
              height={50}
            />
          </NavLink>
          <Button
            className={cn(
              "h-[70px] px-[16px] hover:bg-[#83022b] [&_svg]:size-6 rounded-l-none rounded-tr-[10px]",
              isMobileOpen ? "rounded-br-none" : "rounded-r-[10px]"
            )}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Mobile Navigation Dropdown"
          >
            <Menu />
          </Button>
        </div>
        <div
          className={cn(
            "flex flex-col w-full bg-primary font-TangoSans text-white text-lg rounded-b-[10px]",
            isMobileOpen ? "flex" : "hidden"
          )}
        >
          <NavLink variant="mobile" href="#home">
            Home
          </NavLink>
          <NavLink variant="mobile" href="#about">
            About
          </NavLink>
          <NavLink variant="mobile" href="#tracks">
            Tracks
          </NavLink>
          <NavLink variant="mobile" href="#faqs">
            FAQs
          </NavLink>
          <NavLink variant="mobile" href="#contact">
            Contact
          </NavLink>
          <NavLink
            href="#"
            variant={"mobile_bold"}
            className="bg-[rgb(75,0,0)] cursor-not-allowed" // TODO: Update this when we get applying working
          >
            APPLICATION OPEN SOON
          </NavLink>
          <div className="flex items-center justify-center">
            <NavLink
              href="https://github.com/pantherhacks"
              target="_blank"
              variant={"mobile_icon"}
              title={"PantherHacks GitHub Link"}
              aria-label={"PantherHacks GitHub Link"}
            >
              <Image
                src="./icons/github.svg"
                alt="GitHub Icon"
                width={24}
                height={24}
                className="filter invert h-[70px]"
              />
            </NavLink>
            <NavLink
              href="https://discord.gg/9NSwX5PxqC"
              target="_blank"
              variant={"mobile_icon"}
              title={"PantherHacks Discord Link"}
              aria-label={"PantherHacks Discord Link"}
            >
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
              title={"PantherHacks Instagram Link"}
              aria-label={"PantherHacks Instagram Link"}
              target="_blank"
              variant={"mobile_icon"}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
