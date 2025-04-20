"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";

import Countdown from "@/components/countdown";
import { Button } from "@/components/ui/button";

const CountdownPage = () => {
  const [showButton, setShowButton] = useState<boolean>(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setShowButton(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setShowButton(false), 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Link href="/">
        <Button
          className={`absolute top-4 left-4 px-3 py-2 bg-transparent hover:bg-[#83022b] transition-opacity duration-300 ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          <Home />
        </Button>
      </Link>
      <Countdown dark size="large" />
    </div>
  );
};

export default CountdownPage;
