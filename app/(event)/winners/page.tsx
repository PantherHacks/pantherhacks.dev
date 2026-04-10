import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { SectionTitle } from "@/components/section-title";
import { HACKERS_CHOICE_WINNERS, TRACK_WINNERS } from "@/lib/winners";
import WinnerCard from "./_components/winner-card";
import WinnersHeading from "./_components/winners-heading";

import "./_components/winners.css";

const WinnersPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-black text-white">
      <Navbar />

      <main className="flex w-full flex-1 flex-col">
        <WinnersHeading />

        <section id="hackers-choice" className="flex scroll-m-40 flex-col items-center px-4 pb-24 pt-16 sm:px-8">
          <SectionTitle
            color1="#FFD700"
            color2="#996600"
            color3="#CC9900"
            color4="#FFE566"
            textShadowColor="#FFE566"
            flickerIndices={[0, 7]}
            small={true}
          >
            Hacker's Choice
          </SectionTitle>

          <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-center">
            <div className="w-full md:order-2 md:w-[38%]">
              <WinnerCard
                placement="1st"
                placementLabel="1st Place"
                imagePath={`/images/winners/hackers-choice/${0}.webp`}
                trackIconPath="/logos/pantherhacks/cyborg_pete_white.svg"
                {...HACKERS_CHOICE_WINNERS.teams[0]}
              />
            </div>

            <div className="w-full md:order-1 md:w-[30%]">
              <WinnerCard
                placement="2nd"
                placementLabel="2nd Place"
                imagePath={`/images/winners/hackers-choice/${1}.webp`}
                trackIconPath="/logos/pantherhacks/cyborg_pete_white.svg"
                {...HACKERS_CHOICE_WINNERS.teams[1]}
              />
            </div>

            <div className="w-full md:order-3 md:w-[30%]">
              <WinnerCard
                placement="3rd"
                placementLabel="3rd Place"
                imagePath={`/images/winners/hackers-choice/${2}.webp`}
                trackIconPath="/logos/pantherhacks/cyborg_pete_white.svg"
                {...HACKERS_CHOICE_WINNERS.teams[2]}
              />
            </div>
          </div>
        </section>

        {TRACK_WINNERS.map((categoryWinner) => (
          <section
            key={categoryWinner.categoryName}
            id={categoryWinner.categoryName.toLowerCase()}
            className="flex scroll-m-40 flex-col items-center px-4 pb-20 pt-12 sm:px-8"
          >
            <SectionTitle
              color1="#FFD700"
              color2="#996600"
              color3="#CC9900"
              color4="#FFE566"
              textShadowColor="#FFE566"
              small={true}
            >
              {categoryWinner.categoryName}
            </SectionTitle>

            <div className="flex w-full max-w-4xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-center">
              <div className="w-full self-stretch sm:w-[48%]">
                <WinnerCard
                  placement="1st"
                  placementLabel="Track Winner"
                  imagePath={`/images/winners/${categoryWinner.categoryName.toLowerCase()}/${0}.webp`}
                  trackIconPath={`/images/tracks/${categoryWinner.categoryName.toLowerCase()}-white.svg`}
                  track={categoryWinner.categoryName}
                  {...categoryWinner.teams[0]}
                />
              </div>
              <div className="w-full self-stretch sm:w-[38%]">
                <WinnerCard
                  placement="2nd"
                  placementLabel="Runner Up"
                  imagePath={`/images/winners/${categoryWinner.categoryName.toLowerCase()}/${1}.webp`}
                  trackIconPath={`/images/tracks/${categoryWinner.categoryName.toLowerCase()}-white.svg`}
                  track={categoryWinner.categoryName}
                  {...categoryWinner.teams[1]}
                />
              </div>
            </div>
          </section>
        ))}

        <div className="h-12" />
      </main>

      <Footer daytimeVariant={false} />
    </div>
  );
};

export default WinnersPage;
