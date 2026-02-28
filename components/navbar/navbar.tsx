"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/NavLink";
import { discordLink, gitHubLink, instagramLink } from "@/lib/links";
import { cn } from "@/lib/utils";

import "./navbar.css";

import { hackathonDateInfo } from "@/lib/dates";

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
      className="navbar-glow mx-[20px] mt-[20px] w-[calc(100vw_-_40px)] fixed top-0 left-0 y z-[49] flex items-center box-border drop-shadow-lg backdrop-blur-sm"
    >
      <div className="hidden [@media(min-width:990px)]:flex justify-between items-center w-full">
        <div className="flex flex-row items-center">
          <div className="flex items-center overflow-hidden">
            <NavLink href="/" variant={"logo"} className="h-[70px] group" aria-label="Home">
              <div className="relative w-[50px] h-[50px] transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src="/logos/pantherhacks/cyborg_pete_white.svg"
                  alt="PantherHacks Mascot"
                  fill
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 select-none object-contain"
                  draggable={false}
                  loading="eager"
                />
                <Image
                  src="/logos/pantherhacks/cyborg_pete.svg"
                  alt="PantherHacks Mascot"
                  fill
                  className="transition-opacity scale-110 duration-300 ease-in-out opacity-0 group-hover:opacity-100 select-none object-contain"
                  draggable={false}
                  loading="eager"
                />
              </div>
            </NavLink>
          </div>
          <div className="flex items-center flex-grow font-Xirod text-white text-lg">
            <NavLink href="/#about" hoverColor="#FF5500" glowColor="#FDE200">
              About
            </NavLink>
            <NavLink href="/#tracks" hoverColor="#FF1A98" glowColor="#FFFFFF">
              Tracks
            </NavLink>
            <NavLink href="/#prizes" hoverColor="#8C02D6" glowColor="#AD98FF">
              Prizes
            </NavLink>
            <NavLink href="/#faqs" hoverColor="#22CC00" glowColor="#E9FF26">
              FAQs
            </NavLink>
            <NavLink href="/#team" hoverColor="#61D7FF" glowColor="#6FB3FE">
              Team
            </NavLink>
            <NavLink href="/apply" variant="default" target="_blank" rel="noopener noreferrer">
              APPLY
            </NavLink>
            {/* <NavLink
              href="/live"
              variant="bold"
              className="bg-[rgb(75,0,0)] font-Xirod text-xl text-[#fd021d] flex flex-row justify-center items-center gap-2"
            >
              <div className="flex items-center gap-2">
                <div className="relative flex justify-center items-center">
                  <div className="absolute inline-flex w-4 h-4 bg-[#fd021d] rounded-full animate-ping duration-1000"></div>
                  <div className="relative inline-flex w-5 h-5 bg-[#fd021d] rounded-full"></div>
                </div>
                <span className="neon-text transform-gpu">LIVE</span>
              </div>
            </NavLink> */}
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
      <div className="flex flex-col w-full [@media(min-width:990px)]:hidden">
        <div className="flex items-center justify-between w-full overflow-hidden">
          <NavLink href="/" variant={"logo"} className="h-[70px]" aria-label="Home" onClick={handleMobileLinkClick}>
            <Image
              src="/logos/pantherhacks/cyborg_pete_white.svg"
              alt="Panther Hacks Logo"
              width={50}
              height={50}
              className="select-none"
              draggable={false}
              loading="eager"
            />
          </NavLink>
          <h1 className="hidden sm:block font-Xirod text-2xl text-white">PANTHERHACKS {hackathonDateInfo.year}</h1>
          <Button
            className="h-[70px] px-[16px] [&_svg]:size-6 bg-transparent hover:bg-transparent nav-link-hover rounded-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Mobile Navigation Dropdown"
          >
            <Menu />
          </Button>
        </div>
        <div className={cn("flex flex-col w-full font-Xirod text-white text-lg", isMobileOpen ? "flex" : "hidden")}>
          <NavLink
            variant="mobile"
            href="/#about"
            onClick={handleMobileLinkClick}
            hoverColor="#FF5500"
            glowColor="#FDE200"
          >
            About
          </NavLink>
          <NavLink
            variant="mobile"
            href="/#tracks"
            onClick={handleMobileLinkClick}
            hoverColor="#FF1A98"
            glowColor="#FFFFFF"
          >
            Tracks
          </NavLink>
          <NavLink
            variant="mobile"
            href="/#prizes"
            onClick={handleMobileLinkClick}
            hoverColor="#8C02D6"
            glowColor="#AD98FF"
          >
            Prizes
          </NavLink>
          <NavLink
            variant="mobile"
            href="/#faqs"
            onClick={handleMobileLinkClick}
            hoverColor="#22CC00"
            glowColor="#E9FF26"
          >
            FAQs
          </NavLink>
          <NavLink
            variant="mobile"
            href="/#team"
            onClick={handleMobileLinkClick}
            hoverColor="#4835FF"
            glowColor="#6FB3FE"
          >
            Team
          </NavLink>
          <NavLink
            href="/apply"
            variant={"mobile"}
            onClick={handleMobileLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY
          </NavLink>
          {/* <NavLink
            href="/live"
            variant={"mobile_bold"}
            className="bg-[rgb(75,0,0)] font-Xirod text-xl text-[#fd021d] flex flex-row justify-center items-center gap-2"
            onClick={handleMobileLinkClick}
          >
            <div className="flex items-center gap-2">
              <div className="relative flex justify-center items-center">
                <div className="absolute inline-flex w-4 h-4 bg-[#fd021d] rounded-full animate-ping duration-1000"></div>
                <div className="relative inline-flex w-5 h-5 bg-[#fd021d] rounded-full"></div>
              </div>
              <span className="neon-text transform-gpu">LIVE</span>
            </div>
          </NavLink> */}
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
