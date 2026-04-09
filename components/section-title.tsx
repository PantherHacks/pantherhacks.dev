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
  small?: boolean;
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
  color2 = "#B3007C",
  color3 = "#E820AB",
  color4 = "#E377F5",
  textShadowColor = "#E377F5",
  flickerIndices = [],
  small = false,
}: Props) => {
  const letters = children.split("");

  return (
    <div
      className={`section-title-container mb-14 flex w-[90vw] max-w-[24rem] flex-col items-center justify-center md:max-w-[32rem] ${className}`}
      style={{
        background: `linear-gradient(180deg, ${color2} 0%, #00000000 50%, ${color2} 100%)`,
      }}
    >
      <div
        className="pointer-events-none relative -top-2 left-0 z-10 h-3 w-full"
        style={{
          backgroundColor: color3,
          boxShadow: `0px -4px 4px ${color4}, -1px 0px 2px ${color4}, 1px 0px 2px ${color4}, 0px -0.5px 2px ${color4}`,
        }}
      ></div>
      <h2
        className={`mb-0 mt-2 select-none whitespace-nowrap font-Xirod`}
        style={{
          fontSize: small ? "clamp(1rem, 11cqw, 2.25rem)" : "clamp(1rem, 11cqw, 3.75rem)",
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
        className="pointer-events-none relative -bottom-4 left-0 z-10 flex h-4 w-full flex-row justify-between px-2"
        style={{
          backgroundColor: color3,
          boxShadow: `0px -4px 4px ${color4}, -1px 0px 2px ${color4}, 1px 0px 2px ${color4}, 0px -0.5px 2px ${color4}`,
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="relative top-[0.5rem] h-4 w-4"
            style={{
              backgroundColor: color4,
            }}
          />
        ))}
      </div>
    </div>
  );
};
