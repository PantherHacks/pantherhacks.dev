"use client";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

import "./_components/live.css";

import ImportantLinksSection from "./_components/important-links";
import LiveHeading from "./_components/live-heading";
import ScheduleSection from "./_components/schedule";

const LivePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-black text-white">
      <Navbar />
      <main className="flex flex-1 flex-col" id="live-schedule" aria-label="Live Schedule Section">
        <LiveHeading />
        <ImportantLinksSection />
        <ScheduleSection />
      </main>
      <Footer daytimeVariant={false} />
    </div>
  );
};

export default LivePage;
