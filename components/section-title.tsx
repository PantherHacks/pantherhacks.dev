import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  textShadowColor?: string;
};
export const SectionTitle = ({
  children,
  className = "",
  color1 = "#E820AB",
  color2 = "#2A183E",
  color3 = "#5C299E",
  color4 = "#8A38F5",
  textShadowColor = "#E377F5",
}: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-[32rem] mb-14 ${className}`}
      style={{
        backgroundColor: color2,
      }}
    >
      <div
        className="relative z-10 pointer-events-none w-full h-3 -top-4 left-0"
        style={{
          backgroundColor: color3,
          boxShadow: `0px -4px 4px ${color4}, -1px 0px 2px ${color4}, 1px 0px 2px ${color4}, 0px -0.5px 2px ${color4}`,
        }}
      ></div>
      <h2
        className={`font-Xirod text-6xl -mb-3 select-none`}
        style={{
          color: color1,
          textShadow: `0px -2px 2px ${textShadowColor}, -1px 0px 2px ${textShadowColor}, 0px 0px 1px ${textShadowColor}, 0px -0.5px 1px ${textShadowColor}`,
        }}
      >
        {children}
      </h2>
      <div
        className="flex flex-row justify-between px-2 relative z-10 pointer-events-none w-full h-4 -bottom-6 left-0"
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
