import Image from "next/image";
import Link from "next/link";
import { SiDevpost } from "@icons-pack/react-simple-icons";
import { Users } from "lucide-react";

import "./winners.css";

import { Button } from "@/components/ui/button";

export type Placement = "1st" | "2nd" | "3rd";

const PLACEMENT_CONFIG: Record<
  Placement,
  { borderClass: string; accentColor: string; defaultLabel: string; neonClass: string }
> = {
  "1st": {
    borderClass: "winner-border-gold",
    accentColor: "#FFD700",
    defaultLabel: "1st Place",
    neonClass: "neon-gold",
  },
  "2nd": {
    borderClass: "winner-border-cyan",
    accentColor: "#00D4FF",
    defaultLabel: "2nd Place",
    neonClass: "neon-cyan",
  },
  "3rd": {
    borderClass: "winner-border-orange",
    accentColor: "#FE5501",
    defaultLabel: "3rd Place",
    neonClass: "neon-orange",
  },
};

export type WinnerCardProps = {
  projectName: string;
  members: string[];
  imagePath?: string;
  placement: Placement;
  placementLabel?: string;
  track?: string;
  trackIconPath?: string;
  devpostLink?: string;
};

const WinnerCard = ({
  members,
  imagePath,
  placement,
  placementLabel,
  track,
  trackIconPath,
  projectName,
  devpostLink,
}: WinnerCardProps) => {
  const config = PLACEMENT_CONFIG[placement];
  const accent = config.accentColor;
  const label = placementLabel ?? config.defaultLabel;

  return (
    <div className={`${config.borderClass} h-full w-full transition-transform duration-200 hover:scale-105`}>
      <div
        className="relative flex h-full flex-col overflow-hidden font-UbuntuMono"
        style={{
          border: `1px solid ${accent}40`,
          background: "rgb(2, 14, 34)",
          boxShadow: `inset 0 0 60px rgba(0,0,0,0.5), 0 0 14px ${accent}18`,
        }}
      >
        <div
          className="absolute left-0 top-0 z-20 h-5 w-5"
          style={{ borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
        />
        <div
          className="absolute right-0 top-0 z-20 h-5 w-5"
          style={{ borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
        />
        <div
          className="absolute bottom-0 left-0 z-20 h-5 w-5"
          style={{ borderBottom: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
        />
        <div
          className="absolute bottom-0 right-0 z-20 h-5 w-5"
          style={{ borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
        />

        <div className="relative aspect-video w-full overflow-hidden">
          {imagePath ? (
            <Image
              src={imagePath}
              alt={`${projectName} team photo`}
              fill
              className="select-none object-cover object-center"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${accent}18, transparent 60%, ${accent}10)` }}
            >
              <Users className="h-16 w-16 opacity-15" style={{ color: accent }} />
            </div>
          )}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, transparent 45%, rgba(2,14,34,0.95) 100%)` }}
          />

          <div className="absolute left-3 top-3 z-10">
            <span
              className={`select-none px-2.5 py-1 font-Xirod text-xs tracking-widest ${config.neonClass}`}
              style={{
                backgroundColor: `${accent}18`,
                border: `1px solid ${accent}55`,
                backdropFilter: "blur(6px)",
              }}
            >
              {label}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center p-5 text-center">
          {trackIconPath && (
            <Image
              src={trackIconPath}
              alt={track ?? "track icon"}
              width={40}
              height={40}
              unoptimized
              draggable={false}
              className="select-none fill-white pb-4 opacity-90"
            />
          )}

          <div
            className="mb-3 h-px w-full"
            style={{ background: `linear-gradient(to right, transparent, ${accent}80, transparent)` }}
          />

          <h3
            className="mb-1 font-Xirod text-lg leading-tight text-white"
            style={{ textShadow: `0 0 14px ${accent}55` }}
          >
            {projectName}
          </h3>

          <div className="mt-2 flex flex-col gap-0.5">
            {members.map((member, i) => (
              <span key={i} className="text-sm text-white/65">
                {member}
              </span>
            ))}
          </div>

          <div className="flex-1" />

          {devpostLink && (
            <Link
              href={devpostLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex select-none items-center gap-1.5 text-xs tracking-wider transition-opacity hover:opacity-100"
              style={{ color: `${accent}99` }}
            >
              <Button className="h-auto w-full shrink-0 cursor-pointer rounded-none border border-primary bg-transparent px-3 py-2 font-UbuntuMono text-xs tracking-wider text-primary transition-all duration-200 hover:rounded-lg hover:bg-primary/10 sm:w-auto">
                <SiDevpost className="h-3 w-3" /> VIEW ON DEVPOST
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
