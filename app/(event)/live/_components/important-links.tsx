import { CircleHelp, Code, Hourglass, Scale, Trophy } from "lucide-react";

import { SectionTitle } from "@/components/section-title";
import { hackathonDateInfo } from "@/lib/dates";
import { devpostUrl, discordLink } from "@/lib/links";
import ImportantLink from "./important-link";

const ImportantLinksSection = () => {
  return (
    <div id="important-links" className="flex w-full flex-col items-center justify-center py-20 pt-40 text-center">
      <SectionTitle
        color1="#FF0000"
        color2="#CC0000"
        color3="#FF0000"
        color4="#CC0000"
        textShadowColor="#CC0000"
        flickerIndices={[0, 1, 2, 4]}
      >
        LINKS
      </SectionTitle>
      <p className="mx-8 max-w-[50rem] pb-10 text-center text-white/70 sm:mx-20 md:mx-64">
        Below you can find important links you may need for PantherHacks {hackathonDateInfo.year}.
      </p>
      <div className="flex max-w-[60rem] flex-row flex-wrap items-center justify-center gap-3 px-4 pb-4 pt-8 sm:px-8 md:gap-6 md:px-16">
        <ImportantLink name="Devpost" url={devpostUrl} icon={Code} />
        <ImportantLink name="Rules" url="/rules" icon={Scale} />
        <ImportantLink name="FAQs" url="/#faqs" icon={CircleHelp} />
        <ImportantLink name="Discord" url={discordLink} iconUrl="/icons/discord.svg" />
        <ImportantLink name="Countdown" url="/countdown" icon={Hourglass} />
        <ImportantLink name="Winners" url="/winners" icon={Trophy} />
      </div>
    </div>
  );
};

export default ImportantLinksSection;
