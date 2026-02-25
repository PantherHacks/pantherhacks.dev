import PrizeCard from "@/app/(main)/_components/_prizes/prize-card";
import { SectionTitle } from "@/components/section-title";

const PRIZES = [
  {
    trackName: "HACKER'S CHOICE",
    prizeItem: "Retro Handheld Gaming Console",
    imageSrc: "retro-console.png",
    accentColor: "#FE5501",
  },
  {
    trackName: "AI TRACK WINNER",
    prizeItem: "1 TB Portable SSD",
    imageSrc: "crucial-ssd.png",
    accentColor: "#00CFFF",
  },
  {
    trackName: "CYBER TRACK WINNER",
    prizeItem: "8GB Raspberry Pi 5",
    imageSrc: "raspberry-pi.png",
    accentColor: "#00FF88",
  },
  {
    trackName: "HEALTH TRACK WINNER",
    prizeItem: "Keychron K4 Wireless Keyboard",
    imageSrc: "keychron-k4.png",
    accentColor: "#E820AB",
  },
  {
    trackName: "SUSTAINABILITY TRACK",
    prizeItem: "Lego Piranha Plant",
    imageSrc: "piranha-plant.png",
    accentColor: "#8A38F5",
  },
];

const PrizesSection = () => {
  return (
    <div
      id="prizes"
      className="relative flex flex-col w-full items-center justify-center gap-y-8 pt-40 pb-40 px-4 md:px-8 overflow-x-clip"
    >
      <div className="flex flex-col items-center justify-center text-center gap-y-4 mb-2">
        <SectionTitle
          color1="#8C02D6"
          color2="#2A183E"
          color3="#652CAF"
          color4="#8A38F5"
          textShadowColor="#FDABFE"
          flickerIndices={[0, 2, 3]}
        >
          Prizes
        </SectionTitle>
        <p className="max-w-xl text-center">
          Check out the prizes we offer! Each member of the winning teams will receive a prize (each team consists of
          1-4 people).
        </p>
      </div>

      <div className="vending-machine-outer w-full max-w-5xl">
        <div className="vending-glow-bar" />

        <div className="vending-ornate-bar">
          <div className="vending-ornate-diamond" />
          <div className="vending-ornate-line" />
          <div className="vending-ornate-diamond" />
        </div>

        <div className="vending-display-area">
          <div className="vending-corner vending-corner-tl" />
          <div className="vending-corner vending-corner-tr" />
          <div className="vending-corner vending-corner-bl" />
          <div className="vending-corner vending-corner-br" />

          <div className="prizes-grid">
            {PRIZES.map((prize) => (
              <PrizeCard key={prize.trackName} {...prize} />
            ))}
          </div>
        </div>

        <div className="vending-bottom-dots">
          {Array.from({ length: 13 }, (_, i) =>
            i % 2 === 0 ? <div key={i} className="vending-dot" /> : <div key={i} className="vending-dot-spacer" />
          )}
        </div>

        <div className="vending-selection-panel">
          <div className="vending-led-dot" />
          <span className="vending-panel-display">Make Your Selection</span>
          <div className="vending-led-dot" />
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;
