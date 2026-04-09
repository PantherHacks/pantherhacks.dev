import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Users } from "lucide-react";

import "./winners.css";

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
  devpostLink?: string;
};

const WinnerCard = ({
  members,
  imagePath,
  placement,
  placementLabel,
  track,
  projectName,
  devpostLink,
}: WinnerCardProps) => {
  const config = PLACEMENT_CONFIG[placement];
  const accent = config.accentColor;
  const label = placementLabel ?? config.defaultLabel;

  return (
    <div className={`${config.borderClass} w-full`}>
      <div
        className="relative flex flex-col overflow-hidden font-UbuntuMono"
        style={{
          border: `1px solid ${accent}40`,
          background: "rgb(2, 14, 34)",
          boxShadow: `inset 0 0 60px rgba(0,0,0,0.5), 0 0 14px ${accent}18`,
        }}
      >
        {/* Corner brackets */}
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

        {/* Team photo */}
        <div className="relative aspect-video w-full overflow-hidden">
          {imagePath ? (
            <Image src={imagePath} alt={`${projectName} team photo`} fill className="object-cover object-center" />
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
              className={`px-2.5 py-1 font-Xirod text-xs tracking-widest ${config.neonClass}`}
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

        <div className="flex flex-col items-center p-5 text-center">
          {track && (
            <p className="mb-1.5 text-xs uppercase tracking-[0.22em]" style={{ color: `${accent}aa` }}>
              {track}
            </p>
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

          {devpostLink && (
            <Link
              href={devpostLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1.5 text-xs tracking-wider transition-opacity hover:opacity-100"
              style={{ color: `${accent}99` }}
            >
              <ExternalLink className="h-3 w-3" />
              View on Devpost
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
