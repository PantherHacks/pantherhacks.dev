"use client";

import { useEffect, useRef, useState } from "react";

import PrizeCard from "@/app/(main)/_components/_prizes/prize-card";
import { prizes } from "@/lib/prizes";

export default function PrizesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [emptyCount, setEmptyCount] = useState(0);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // this is some bullshit i cooked up. don't ask me how it works - dylan ravel
    function updateEmpty() {
      const cols = getComputedStyle(grid!).gridTemplateColumns.split(" ").length;
      const remainder = prizes.length % cols;
      setEmptyCount(remainder === 0 ? 0 : cols - remainder);
    }

    updateEmpty();
    const ro = new ResizeObserver(updateEmpty);
    ro.observe(grid);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={gridRef}
      className="prizes-grid grid grid-cols-[repeat(auto-fill,minmax(min(130px,45%),1fr))] justify-center gap-3.5 pb-1 md:grid-cols-4 lg:grid-cols-5"
    >
      {prizes.map((prize) => (
        <PrizeCard key={prize.trackName} {...prize} />
      ))}
      {Array.from({ length: emptyCount }, (_, i) => (
        <PrizeCard key={`empty-${i}`} isEmpty />
      ))}
    </div>
  );
}
