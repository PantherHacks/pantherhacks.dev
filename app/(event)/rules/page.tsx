import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { formatHourTo12Hour, hackathonDateInfo } from "@/lib/dates";

const RulesPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <main
        className="flex flex-1 w-[100vw] justify-center items-center text-white pb-10"
        id="rules"
        aria-label="Rules Section"
      >
        <div className="flex flex-col flex-1 w-full justify-center items-center mt-48 mx-8 sm:mx-20 md:mx-64 max-w-[50rem]">
          <h2 className="font-Xirod text-6xl text-primary pb-10 text-center">Rules</h2>
          <div className="flex flex-col flex-1 w-full justify-center items-center mt-10">
            <h3 className="font-Xirod text-2xl pb-5 text-[#EE5000] text-center">The Hackathon Spirit</h3>
            <p className="text-center pb-4">
              The goal of any hackathon is to encourage participants to learn, build, and share.
            </p>
            <ul style={{ listStyleType: "circle" }} className="ml-3">
              <li>
                <span className="font-bold">Learn</span>
                <ul style={{ listStyleType: "square" }} className="ml-8">
                  <li>Learn new things.</li>
                  <li>Step outside of your comfort zone.</li>
                  <li>Experiment and make mistakes.</li>
                  <li>Don't be afraid to ask for help from fellow hackers, mentors, or organizers.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Build</span>
                <ul style={{ listStyleType: "square" }} className="ml-8">
                  <li>Build cool stuff.</li>
                  <li>If you're not able to finish your project by the deadline, that's totally fine.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Share</span>
                <ul style={{ listStyleType: "square" }} className="ml-8">
                  <li>Communicate with fellow hackers and teams.</li>
                  <li>Collaborate with others and help each other out.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 w-full justify-center items-center mt-10">
            <h3 className="font-Xirod text-2xl pb-5 text-[#EE5000] text-center">Competition Rules</h3>
            <ul style={{ listStyleType: "circle" }} className="list-spacing ml-3">
              <li>Only current undergraduate students are eligible to participate in the competition as hackers. </li>
              <li>Teams are limited to a minimum of one person and a maximum of four people.</li>
              <li>
                Every team is eligible to submit exactly one project to only one of the four development tracks
                (Cybersecurity, Entertainment, Healthcare, Sustainability).
              </li>
              <li>
                All team members must be present during event check-in, judging, and the awards ceremony. Leaving the
                venue during the event to work elsewhere is fine.
              </li>
              <li>
                Teams are encouraged to receive feedback and support from fellow hackers, mentors, and organizers.
              </li>
              <li>
                All project work must be done within the 48-hour hacking period (
                {formatHourTo12Hour(hackathonDateInfo.startHour)} on
                {" " + hackathonDateInfo.month + " " + hackathonDateInfo.startDay + ", " + hackathonDateInfo.year} to
                {" " + formatHourTo12Hour(hackathonDateInfo.endHour)} on
                {" " + hackathonDateInfo.month + " " + hackathonDateInfo.endDay + ", " + hackathonDateInfo.year}). Teams
                can use an idea they had before the event.
              </li>
              <li>
                Teams can work on ideas that have already been done. If somebody wants to work on a common idea they
                should be allowed to do so and should be judged on the quality of their hack.
              </li>
              <li>
                Teams can work on an idea that they have worked on before (as long as they do not reuse any code).
              </li>
              <li>
                Teams can use libraries, frameworks, or open-source code in their projects. Working on a project before
                the event and open-sourcing it for the sole purpose of using the code during the event is against the
                spirit of the rules and is not allowed.
              </li>
              <li>
                Adding new features to existing projects is allowed. Judges will only consider new functionality
                introduced or new features added during the hackathon in determining the winners.
              </li>
              <li>
                Teams can be disqualified from the competition at the organizers' discretion. Reasons might include but
                are not limited to violating one or more of the above competition rules.
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 w-full justify-center items-center mt-10">
            <p className="text-center text-white/70">
              These rules are based on the{" "}
              <a
                href="https://github.com/MLH/mlh-hackathon-rules/blob/master/Rules.md#hackathon-rules"
                className="underline hover:text-primary"
              >
                hackathon rules
              </a>{" "}
              created by{" "}
              <a href="https://mlh.io/" className="underline hover:text-primary">
                Major League Hacking
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RulesPage;
