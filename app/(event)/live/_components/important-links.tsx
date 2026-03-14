import { CircleHelp, Code, Hourglass, Scale } from "lucide-react";

import { hackathonDateInfo } from "@/lib/dates";
import { devpostUrl, discordLink } from "@/lib/links";
import ImportantLink from "./important-link";

const ImportantLinksSection = () => {
  return (
    <div id="important-links" className="flex flex-col items-center justify-center text-center w-full pt-40 py-20">
      <h2 className="font-TangoSansBold text-4xl sm:text-6xl text-white pb-10 mx-4">Important Links</h2>
      <p className="mx-8 sm:mx-20 md:mx-64 text-center max-w-[50rem] pb-10">
        Below you can find important links you may need for PantherHacks {hackathonDateInfo.year}.
      </p>
      <div className="pt-8 pb-4 flex flex-row flex-wrap gap-3 md:gap-6 px-4 sm:px-8 md:px-16 max-w-[60rem] justify-center items-center">
        <ImportantLink name="Devpost" url={devpostUrl} icon={Code} />
        <ImportantLink name="Rules" url="/rules" icon={Scale} />
        <ImportantLink name="FAQs" url="/#faqs" icon={CircleHelp} />
        <ImportantLink name="Discord" url={discordLink} iconUrl="/icons/discord_white.svg" />
        <ImportantLink name="Countdown" url="/countdown" icon={Hourglass} />
      </div>
    </div>
  );
};

export default ImportantLinksSection;
