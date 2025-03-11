import { hackathonDateInfo } from "@/lib/dates";

const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center w-full py-40">
      <h2 className="font-TangoSansBold text-6xl text-primary pb-10">About</h2>
      <p className="mx-24 text-center">
        PantherHacks {hackathonDateInfo.year} is a 48-hour hackathon (team-based coding competition) held from{" "}
        {hackathonDateInfo.dateString}. It will take place in Sandhu Conference Center for the entirety of the event
        including project work time, workshops, mentorship, and more! Food will be provided. Read more below about our
        tracks!
      </p>
    </div>
  );
};

export default AboutSection;
