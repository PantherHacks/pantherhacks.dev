import Countdown from "@/components/countdown/countdown";
import { SectionTitle } from "@/components/section-title";
import { hackathonDateInfo } from "@/lib/dates";

const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center w-full pb-40 md:pt-40">
      <SectionTitle
        color1="#FE5501"
        color2="#4d1900"
        color3="#EE5000"
        color4="#ff6d12"
        textShadowColor="#FFE300"
        flickerIndices={[0, 3]}
      >
        About
      </SectionTitle>
      <p className="mx-8 sm:mx-20 md:mx-64 text-center max-w-[50rem] pb-10 font-UbuntuMono">
        <span className="font-bold text-primary">PantherHacks {hackathonDateInfo.year}</span> is a 48-hour hackathon
        (team-based coding competition) held from{" "}
        <span className="font-bold text-primary">{hackathonDateInfo.dateString}</span>. It will take place in{" "}
        <span className="font-bold text-primary">Sandhu Conference Center</span> for the entirety of the event including
        project work time, workshops, mentorship, and more! Food will be provided. Read further for more details on
        PantherHacks {hackathonDateInfo.year}!
      </p>
      <Countdown />
    </div>
  );
};

export default AboutSection;
