import { CircleHelp, Code, Hourglass, Scale } from "lucide-react";

import { SectionTitle } from "@/components/section-title";
import { hackathonDateInfo } from "@/lib/dates";
import { devpostUrl, discordLink } from "@/lib/links";
import ImportantLink from "./important-link";

const ImportantLinksSection = () => {
  return (
    <div id="important-links" className="flex flex-col items-center justify-center text-center w-full pt-40 py-20">
      <SectionTitle
        color1="#00C896"
        color2="#007A5A"
        color3="#00E8A8"
        color4="#80FFD4"
        textShadowColor="#80FFD4"
        flickerIndices={[0, 1, 2, 4]}
      >
        LINKS
      </SectionTitle>
      <p className="mx-8 sm:mx-20 md:mx-64 text-center max-w-[50rem] pb-10">
        Below you can find important links you may need for PantherHacks {hackathonDateInfo.year}.
      </p>
      <div className="pt-8 pb-4 flex flex-row flex-wrap gap-3 md:gap-6 px-4 sm:px-8 md:px-16 max-w-[60rem] justify-center items-center">
        <ImportantLink name="Devpost" url={devpostUrl} icon={Code} />
        <ImportantLink name="Rules" url="/rules" icon={Scale} />
        <ImportantLink name="FAQs" url="/#faqs" icon={CircleHelp} />
        <ImportantLink name="Discord" url={discordLink} iconUrl="/icons/discord.svg" />
        <ImportantLink name="Countdown" url="/countdown" icon={Hourglass} />
      </div>
    </div>
  );
};

export default ImportantLinksSection;
