"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/NavLink";
import { applicationLink, discordLink, gitHubLink, instagramLink } from "@/lib/links";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // If the navbar is open and the click is outside the navbar, close it
      if (isMobileOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileOpen]);

  // Close mobile menu when a mobile nav link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="m-[20px] w-[calc(100vw_-_40px)] rounded-[10px] fixed top-0 left-0 bg-primary z-[49] flex items-center box-border drop-shadow-lg"
    >
      <div className="hidden [@media(min-width:850px)]:flex justify-between items-center w-full">
        <div className="flex flex-row items-center">
          <div className="flex items-center overflow-hidden">
            <NavLink href="/" variant={"logo"} className="h-[70px] rounded-l-[10px] group" aria-label="Home">
              <Image
                src="/logos/pantherhacks/pantherhacks_mascot_light.png"
                alt="PantherHacks Logo"
                width={50}
                height={50}
                className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 select-none"
                draggable={false}
                loading="eager"
              />
            </NavLink>
          </div>
          <div className="flex items-center flex-grow font-TangoSans text-white text-lg">
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#tracks">Tracks</NavLink>
            <NavLink href="/#prizes">Prizes</NavLink>
            <NavLink href="/#faqs">FAQs</NavLink>
            <NavLink href="/#team">Team</NavLink>
            <NavLink href={applicationLink} variant="bold" className="bg-[rgb(75,0,0)]" target="_blank">
              APPLY
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <NavLink
            href={gitHubLink}
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
              className="h-[70px] select-none"
              draggable={false}
              loading="eager"
            />
          </NavLink>
          <NavLink
            href={discordLink}
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
              className="h-[70px] select-none"
              draggable={false}
              loading="eager"
            />
          </NavLink>
          <NavLink
            href={instagramLink}
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
              className="h-[70px] select-none"
              draggable={false}
              loading="eager"
            />
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col w-full [@media(min-width:850px)]:hidden">
        <div className="flex items-center justify-between w-full overflow-hidden">
          <NavLink
            href="/"
            variant={"logo"}
            className={cn("h-[70px]", isMobileOpen ? "rounded-tl-[10px]" : "rounded-l-[10px]")}
            aria-label="Home"
            onClick={handleMobileLinkClick}
          >
            <Image
              src="/logos/pantherhacks/pantherhacks_mascot_light.png"
              alt="Panther Hacks Logo"
              width={50}
              height={50}
              className="select-none"
              draggable={false}
              loading="eager"
            />
          </NavLink>
          <h1 className="hidden sm:block font-TangoSansBold text-2xl text-white">PANTHERHACKS</h1>
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
          <NavLink variant="mobile" href="/#home" onClick={handleMobileLinkClick}>
            Home
          </NavLink>
          <NavLink variant="mobile" href="/#about" onClick={handleMobileLinkClick}>
            About
          </NavLink>
          <NavLink variant="mobile" href="/#tracks" onClick={handleMobileLinkClick}>
            Tracks
          </NavLink>
          <NavLink variant="mobile" href="/#prizes" onClick={handleMobileLinkClick}>
            Prizes
          </NavLink>
          <NavLink variant="mobile" href="/#faqs" onClick={handleMobileLinkClick}>
            FAQs
          </NavLink>
          <NavLink variant="mobile" href="/#team" onClick={handleMobileLinkClick}>
            Team
          </NavLink>
          <NavLink
            href={applicationLink}
            variant={"mobile_bold"}
            className="bg-[rgb(75,0,0)]"
            onClick={handleMobileLinkClick}
            target="_blank"
          >
            APPLY
          </NavLink>
          <div className="flex items-center justify-center">
            <NavLink
              href={gitHubLink}
              target="_blank"
              variant={"mobile_icon"}
              title={"PantherHacks GitHub Link"}
              aria-label={"PantherHacks GitHub Link"}
              onClick={handleMobileLinkClick}
            >
              <Image
                src="./icons/github.svg"
                alt="GitHub Icon"
                width={24}
                height={24}
                className="h-[70px] select-none"
                draggable={false}
                loading="eager"
              />
            </NavLink>
            <NavLink
              href={discordLink}
              target="_blank"
              variant={"mobile_icon"}
              title={"PantherHacks Discord Link"}
              aria-label={"PantherHacks Discord Link"}
              onClick={handleMobileLinkClick}
            >
              <Image
                src="./icons/discord.svg"
                alt="Discord Icon"
                width={24}
                height={24}
                className="h-[70px] select-none"
                draggable={false}
                loading="eager"
              />
            </NavLink>
            <NavLink
              href={instagramLink}
              title={"PantherHacks Instagram Link"}
              aria-label={"PantherHacks Instagram Link"}
              target="_blank"
              variant={"mobile_icon"}
              onClick={handleMobileLinkClick}
            >
              <Image
                src="./icons/instagram.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
                className="h-[70px] select-none"
                draggable={false}
                loading="eager"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
