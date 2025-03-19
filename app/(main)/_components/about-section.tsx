import { hackathonDateInfo } from "@/lib/dates";

const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center w-full py-40">
      <h2 className="font-TangoSansBold text-6xl text-primary pb-10">About</h2>
      <p className="mx-8 sm:mx-20 md:mx-64 text-center max-w-[50rem]">
        <span className="font-bold">PantherHacks {hackathonDateInfo.year}</span> is a 48-hour hackathon (team-based
        coding competition) held from <span className="font-bold">{hackathonDateInfo.dateString}</span>. It will take
        place in <span className="font-bold">Sandhu Conference Center</span> for the entirety of the event including
        project work time, workshops, mentorship, and more! Food will be provided. Read further for more details on
        PantherHacks {hackathonDateInfo.year}!
      </p>
      {/*<Link href="/apply">*/}
      {/*  <Button className="mt-6 p-6 font-TangoSansBold text-3xl hover:bg-primary">APPLY NOW</Button>*/}
      {/*</Link>*/}
    </div>
  );
};

export default AboutSection;
