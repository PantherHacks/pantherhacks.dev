import Link from "next/link";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function Schedule() {
  redirect("/live/#schedule");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <Navbar />
      <main className="flex flex-1 w-[100vw]">
        <div className="flex flex-grow flex-col w-full">
          <div id="about" className="flex flex-col items-center justify-center w-full py-40">
            <h2 className="font-Xirod text-6xl text-primary pb-10">Schedule</h2>
            <p className="mx-8 sm:mx-20 md:mx-24 text-center font-UbuntuMono text-white/70">
              Redirecting you to the schedule. If this doesn't work, click{" "}
              <Link href="/live/#schedule" className="text-primary underline hover:text-white transition-colors">
                here
              </Link>
              .
            </p>
            <Loader2 className="w-24 h-24 mt-10 animate-spin text-primary" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
