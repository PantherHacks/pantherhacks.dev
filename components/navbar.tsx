import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="m-[20px] w-[calc(100%_-_40px)] rounded-[10px] fixed top-0 left-0 bg-primary z-[1000] flex items-center h-[70px] box-border">
      <div className="flex items-center overflow-hidden">
        <Link
          href="/"
          className=" flex items-center justify-center h-[70px] px-[10px] hover:bg-[#83022b] hover:rounded-l-[10px]"
        >
          <Image
            src="/logos/pantherhacks/pantherhacks_mascot_light.png"
            alt="Panther Hacks Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="flex items-center flex-grow font-TangoSans text-white text-lg">
        <Link href="#home" className="flex items-center justify-center h-[70px] px-[16px] hover:bg-[#83022b]">
          Home
        </Link>
        <Link href="#about" className="flex items-center justify-center h-[70px] px-[16px] hover:bg-[#83022b]">
          About
        </Link>
        <Link href="#tracks" className="flex items-center justify-center h-[70px] px-[16px] hover:bg-[#83022b]">
          Tracks
        </Link>
        <Link href="#faqs" className="flex items-center justify-center h-[70px] px-[16px] hover:bg-[#83022b]">
          FAQs
        </Link>
        <Link href="#contact" className="flex items-center justify-center h-[70px] px-[16px] hover:bg-[#83022b]">
          Contact
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center h-[70px] px-[16px] hover:bg-[#83022b] font-TangoSansBold text-xl bg-[rgb(75,0,0)] cursor-not-allowed" // TODO: Update this when we get applying working
        >
          APPLY
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link href="https://github.com/pantherhacks" target="_blank" className="px-[10px] hover:bg-[#83022b]">
          <Image src="./icons/github.svg" alt="GitHub Icon" width={24} height={24} className="filter invert h-[70px]" />
        </Link>
        <Link href="https://discord.gg/9NSwX5PxqC" target="_blank" className="px-[10px] hover:bg-[#83022b]">
          <Image
            src="./icons/discord.svg"
            alt="Discord Icon"
            width={24}
            height={24}
            className="filter invert h-[70px]"
          />
        </Link>
        <Link
          href="https://www.instagram.com/chapmancsclub/"
          target="_blank"
          className="px-[10px] hover:bg-[#83022b] rounded-r-[10px]"
        >
          <Image
            src="./icons/instagram.svg"
            alt="Discord Icon"
            width={24}
            height={24}
            className="filter invert h-[70px]"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
