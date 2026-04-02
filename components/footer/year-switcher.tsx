"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { hackathonDateInfo } from "@/lib/dates";
import { cn } from "@/lib/utils";

const years: { year: number; url: string }[] = [
  { year: 2026, url: "https://pantherhacks.dev" },
  { year: 2025, url: "https://2025.pantherhacks.dev" },
];

export function YearSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        className="year-switcher-btn"
        data-open={open}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {hackathonDateInfo.year}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-150", open ? "rotate-180" : "rotate-0")} />
      </button>

      {open && (
        <div className="year-dropdown-menu" role="listbox">
          {years.map(({ year, url }) => {
            const isCurrent = year === hackathonDateInfo.year;
            return isCurrent ? (
              <span key={year} className="year-dropdown-item current-year" role="option" aria-selected>
                {year}
              </span>
            ) : (
              <a
                key={year}
                href={url}
                className="year-dropdown-item"
                role="option"
                aria-selected={false}
                onClick={() => setOpen(false)}
              >
                {year}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
