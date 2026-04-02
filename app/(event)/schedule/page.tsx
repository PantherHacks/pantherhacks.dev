import Link from "next/link";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function Schedule() {
  redirect("/live/#schedule");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Navbar />
      <main className="flex w-[100vw] flex-1">
        <div className="flex w-full flex-grow flex-col">
          <div id="about" className="flex w-full flex-col items-center justify-center py-40">
            <h2 className="pb-10 font-Xirod text-6xl text-primary">Schedule</h2>
            <p className="mx-8 text-center font-UbuntuMono text-white/70 sm:mx-20 md:mx-24">
              Redirecting you to the schedule. If this doesn't work, click{" "}
              <Link href="/live/#schedule" className="text-primary underline transition-colors hover:text-white">
                here
              </Link>
              .
            </p>
            <Loader2 className="mt-10 h-24 w-24 animate-spin text-primary" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
