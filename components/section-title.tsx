import "./section-title.css";

type Props = {
  children: string;
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  textShadowColor?: string;
  flickerIndices?: number[];
};
// Deterministic pseudo-random based on seed — same value on server and client.
const seededRandom = (seed: number) => {
  const x = Math.sin(seed + 0.025) * 10000;
  return x - Math.floor(x);
};

export const SectionTitle = ({
  children,
  className = "",
  color1 = "#E820AB",
  color2 = "#2A183E",
  color3 = "#5C299E",
  color4 = "#8A38F5",
  textShadowColor = "#E377F5",
  flickerIndices = [],
}: Props) => {
  const letters = children.split("");

  return (
    <div
      className={`flex flex-col scale-50 xs:scale-[65%] sm:scale-[85%] md:scale-100 justify-center items-center w-[32rem] mb-14 ${className}`}
      style={{
        background: `linear-gradient(180deg, ${color2} 0%, #00000000 50%, ${color2} 100%)`,
      }}
    >
      <div
        className="relative z-10 pointer-events-none w-full h-3 -top-2 left-0"
        style={{
          backgroundColor: color3,
          boxShadow: `0px -4px 4px ${color4}, -1px 0px 2px ${color4}, 1px 0px 2px ${color4}, 0px -0.5px 2px ${color4}`,
        }}
      ></div>
      <h2
        className={`font-Xirod text-6xl mt-2 mb-0 select-none`}
        style={{
          color: color1,
          textShadow: `0px -2px 2px ${textShadowColor}, -1px 0px 2px ${textShadowColor}, 0px 0px 1px ${textShadowColor}, 0px -0.5px 1px ${textShadowColor}`,
        }}
      >
        {letters.map((letter, i) => {
          const flickerPos = flickerIndices.indexOf(i);
          const isFlicker = flickerPos !== -1;
          return (
            <span
              key={i}
              className={isFlicker ? "letter-flicker" : undefined}
              style={isFlicker ? { animationDelay: `${seededRandom(i) * 5}s` } : undefined}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          );
        })}
      </h2>
      <div
        className="flex flex-row justify-between px-2 relative z-10 pointer-events-none w-full h-4 -bottom-4 left-0"
        style={{
          backgroundColor: color3,
          boxShadow: `0px -4px 4px ${color4}, -1px 0px 2px ${color4}, 1px 0px 2px ${color4}, 0px -0.5px 2px ${color4}`,
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="relative w-4 h-4 top-[0.5rem]"
            style={{
              backgroundColor: color4,
            }}
          />
        ))}
      </div>
    </div>
  );
};
