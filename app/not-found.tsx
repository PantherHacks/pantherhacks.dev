import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <main className="flex w-[100vw] flex-1">
        <div className="flex w-full flex-grow flex-col">
          <div className="flex w-full flex-col items-center justify-center gap-y-2 py-40">
            <Image
              src="/images/panther/404-panther.png"
              width={100}
              height={100}
              alt="A confused panther."
              className="h-32 w-32 select-none sm:h-64 sm:w-64"
              draggable={false}
              unoptimized
            />
            <h2 className="font-Xirod text-6xl text-primary sm:text-9xl">404</h2>
            <p className="mx-8 text-center text-white sm:mx-20 md:mx-24">
              <span className="font-bold">Paws...</span> That page doesn't exist. Click{" "}
              <Link href="/" className="underline transition-colors hover:text-primary">
                here
              </Link>{" "}
              to return home.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
