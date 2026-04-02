import PrizesGrid from "@/app/(main)/_components/_prizes/prizes-grid";
import { SectionTitle } from "@/components/section-title";

const PrizesSection = () => {
  return (
    <div
      id="prizes"
      className="relative flex w-full flex-col items-center justify-center gap-y-8 overflow-x-clip px-4 pb-40 pt-40 md:px-8"
    >
      <div className="mb-2 flex flex-col items-center justify-center gap-y-4 text-center">
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
        <p className="mx-20 max-w-xl text-center">
          Check out the prizes we offer! Each member of the winning teams will receive a prize (each team consists of
          1-4 people).
        </p>
      </div>

      <div className="vending-machine-outer relative w-full max-w-5xl rounded-[4px] border-2 border-[#580087] p-[10px]">
        <div className="vending-glow-bar mb-[6px] h-1 rounded-[2px]" />

        <div className="mb-[6px] mt-[2px] flex items-center gap-1">
          <div className="vending-ornate-diamond h-3 w-3 shrink-0 rotate-45 bg-[#a00fef]" />
          <div className="vending-ornate-line h-[2px] flex-1" />
          <div className="vending-ornate-diamond h-3 w-3 shrink-0 rotate-45 bg-[#a00fef]" />
        </div>

        <div className="vending-display-area relative rounded-sm border border-[rgba(150,115,18,0.2)] px-[14px] py-5">
          <div className="vending-corner absolute -left-px -top-px z-[2] h-[14px] w-[14px] bg-[#a00fef]" />
          <div className="vending-corner absolute -right-px -top-px z-[2] h-[14px] w-[14px] bg-[#a00fef]" />
          <div className="vending-corner absolute -bottom-px -left-px z-[2] h-[14px] w-[14px] bg-[#a00fef]" />
          <div className="vending-corner absolute -bottom-px -right-px z-[2] h-[14px] w-[14px] bg-[#a00fef]" />

          <PrizesGrid />
        </div>

        <div className="flex items-center px-[2px] pb-[2px] pt-[7px]">
          {Array.from({ length: 13 }, (_, i) =>
            i % 2 === 0 ? (
              <div key={i} className="vending-dot h-[7px] w-[7px] shrink-0 rotate-45 bg-[#a00fef]" />
            ) : (
              <div key={i} className="vending-dot-spacer h-px flex-1" />
            )
          )}
        </div>

        <div className="mt-[6px] flex items-center justify-center gap-[10px] rounded-[2px] border border-[rgba(140,105,15,0.2)] bg-[rgba(4,4,10,0.92)] px-3 pb-1 pt-[5px]">
          <div className="vending-led-dot h-[5px] w-[5px] rounded-full bg-[#02FFFF]" />
          <span className="vending-panel-display font-DSDigital uppercase tracking-[0.2em] text-[#02FFFF]">
            Make Your Selection
          </span>
          <div className="vending-led-dot h-[5px] w-[5px] rounded-full bg-[#02FFFF]" />
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;
