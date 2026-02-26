import PrizeCard from "@/app/(main)/_components/_prizes/prize-card";
import { SectionTitle } from "@/components/section-title";
import { prizes } from "@/lib/prizes";

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

      <div className="vending-machine-outer relative w-full max-w-5xl border-2 border-[#7a5c10] rounded-[4px] p-[10px]">
        <div className="vending-glow-bar h-1 rounded-[2px] mb-[6px]" />

        <div className="flex items-center gap-1 mt-[2px] mb-[6px]">
          <div className="vending-ornate-diamond w-3 h-3 shrink-0 bg-[#c8a020] rotate-45" />
          <div className="vending-ornate-line flex-1 h-[2px]" />
          <div className="vending-ornate-diamond w-3 h-3 shrink-0 bg-[#c8a020] rotate-45" />
        </div>

        <div className="vending-display-area relative border border-[rgba(150,115,18,0.2)] rounded-sm py-5 px-[14px]">
          <div className="vending-corner absolute w-[14px] h-[14px] bg-[#c8a020] z-[2] -top-px -left-px" />
          <div className="vending-corner absolute w-[14px] h-[14px] bg-[#c8a020] z-[2] -top-px -right-px" />
          <div className="vending-corner absolute w-[14px] h-[14px] bg-[#c8a020] z-[2] -bottom-px -left-px" />
          <div className="vending-corner absolute w-[14px] h-[14px] bg-[#c8a020] z-[2] -bottom-px -right-px" />

          <div className="prizes-grid grid grid-cols-[repeat(auto-fill,minmax(min(130px,45%),1fr))] md:grid-cols-[repeat(auto-fill,minmax(130px,200px))] lg:grid-cols-5 gap-3.5 pb-1 justify-center">
            {prizes.map((prize) => (
              <PrizeCard key={prize.trackName} {...prize} />
            ))}
          </div>
        </div>

        <div className="flex items-center pt-[7px] px-[2px] pb-[2px]">
          {Array.from({ length: 13 }, (_, i) =>
            i % 2 === 0 ? (
              <div key={i} className="vending-dot w-[7px] h-[7px] shrink-0 bg-[#c8a020] rotate-45" />
            ) : (
              <div key={i} className="vending-dot-spacer flex-1 h-px" />
            )
          )}
        </div>

        <div className="flex items-center justify-center gap-[10px] pt-[5px] px-3 pb-1 mt-[6px] bg-[rgba(4,4,10,0.92)] border border-[rgba(140,105,15,0.2)] rounded-[2px]">
          <div className="vending-led-dot w-[5px] h-[5px] rounded-full bg-[#00ff88]" />
          <span className="vending-panel-display font-DSDigital text-[#00ff88] tracking-[0.2em] uppercase">
            Make Your Selection
          </span>
          <div className="vending-led-dot w-[5px] h-[5px] rounded-full bg-[#00ff88]" />
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;
