"use client";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

import "./_components/live.css";

import LiveHeading from "./_components/heading";
import ScheduleSection from "./_components/schedule";

const LivePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-1 flex-col" id="rules" aria-label="Rules Section">
        <LiveHeading />
        <ScheduleSection />
      </main>
      <Footer daytimeVariant={false} />
    </div>
  );
};

export default LivePage;
