import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { SectionTitle } from "@/components/section-title";
import { HACKERS_CHOICE_WINNERS } from "@/lib/winners";
import WinnerCard from "./_components/winner-card";
import WinnersHeading from "./_components/winners-heading";

import "./_components/winners.css";

const WinnersPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-black text-white">
      <Navbar />

      <main className="flex w-full flex-1 flex-col">
        <WinnersHeading />

        <section className="flex flex-col items-center px-4 pb-24 pt-16 sm:px-8">
          <SectionTitle
            color1="#FFD700"
            color2="#996600"
            color3="#CC9900"
            color4="#FFE566"
            textShadowColor="#FFE566"
            flickerIndices={[0, 7]}
          >
            Hacker's Choice
          </SectionTitle>

          <p className="-mt-8 mb-10 font-UbuntuMono text-sm text-white/50">Voted by the hackers themselves</p>

          <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-center">
            <div className="w-full md:order-1 md:w-[30%]">
              <WinnerCard
                placement="2nd"
                placementLabel="2nd Place"
                imagePath={`/images/winners/hackers-choice/${1}.webp`}
                {...HACKERS_CHOICE_WINNERS.teams[1]}
              />
            </div>

            <div className="w-full md:order-2 md:w-[38%]">
              <WinnerCard
                placement="1st"
                placementLabel="1st Place"
                imagePath={`/images/winners/hackers-choice/${0}.webp`}
                {...HACKERS_CHOICE_WINNERS.teams[0]}
              />
            </div>

            <div className="w-full md:order-3 md:w-[30%]">
              <WinnerCard
                placement="3rd"
                placementLabel="3rd Place"
                imagePath={`/images/winners/hackers-choice/${2}.webp`}
                {...HACKERS_CHOICE_WINNERS.teams[2]}
              />
            </div>
          </div>
        </section>

        <div
          className="mx-auto mb-8 h-px w-[min(90vw,56rem)]"
          style={{ background: "linear-gradient(to right, transparent, #FF550044, transparent)" }}
        />
        {/* 
        {TRACK_WINNERS.map(({ track, icon, titleColors, winner, runnerUp }) => (
          <section key={track} className="flex flex-col items-center px-4 pb-20 pt-12 sm:px-8">
            <div className="mb-2 flex items-center gap-3">
              <Image
                src={icon}
                alt={`${track} track icon`}
                width={36}
                height={36}
                className="select-none opacity-80"
                style={{ filter: `drop-shadow(0 0 6px ${titleColors.color1}88)` }}
              />
            </div>

            <SectionTitle
              color1={titleColors.color1}
              color2={titleColors.color2}
              color3={titleColors.color3}
              color4={titleColors.color4}
              textShadowColor={titleColors.textShadowColor}
            >
              {track}
            </SectionTitle>

            <div className="flex w-full max-w-4xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-center">
              <div className="w-full sm:w-[48%]">
                <WinnerCard placement="1st" placementLabel="Track Winner" track={`${track} Track`} {...winner} />
              </div>
              <div className="w-full sm:w-[48%]">
                <WinnerCard placement="2nd" placementLabel="Runner Up" track={`${track} Track`} {...runnerUp} />
              </div>
            </div>
          </section>
        ))} */}

        <div className="h-12" />
      </main>

      <Footer daytimeVariant={false} />
    </div>
  );
};

export default WinnersPage;
