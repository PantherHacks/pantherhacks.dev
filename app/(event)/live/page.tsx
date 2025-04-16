import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

import "./_components/live.css";

import { hackathonDateInfo } from "@/lib/dates";

const LivePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <main className="flex flex-1 w-[100vw] justify-center items-center" id="rules" aria-label="Rules Section">
        <div className="flex flex-col flex-1 w-full justify-center items-center mt-48 mx-8 sm:mx-20 md:mx-64 max-w-[50rem]">
          <div className="flex flex-col items-center justify-center space-y-4 pb-10">
            <h2 className="font-TangoSansBold text-6xl text-[#fd021d] flex flex-row justify-center items-center gap-2">
              <span className="text-black" style={{ textShadow: "none" }}>
                [
              </span>
              <div className="flex items-center gap-4">
                <div className="relative flex justify-center items-center">
                  <div className="absolute inline-flex w-6 h-6 bg-[#fd021d] rounded-full animate-ping duration-1000"></div>
                  <div className="relative inline-flex w-8 h-8 bg-[#fd021d] rounded-full"></div>
                </div>
                <span className="neon-text transform-gpu">LIVE</span>
              </div>
              <span className="text-black" style={{ textShadow: "none" }}>
                ]
              </span>
            </h2>
            <h2 className="font-TangoSansBold text-6xl text-primary">PANTHERHACKS {hackathonDateInfo.year}</h2>
          </div>
          <div className="flex flex-col flex-1 w-full justify-center items-center mt-10">
            <p>Test</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LivePage;
