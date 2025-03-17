import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <main className="flex flex-1 w-[100vw]">
        <div className="flex flex-grow flex-col w-full">
          <div className="flex flex-col items-center justify-center w-full py-40 gap-y-2">
            <Image
              src="/images/panther/404-panther.png"
              width={100}
              height={100}
              alt="A confused panther."
              className="select-none w-32 h-32 sm:w-64 sm:h-64"
              draggable={false}
              unoptimized
            />
            <h2 className="font-TangoSansBold text-6xl sm:text-9xl text-primary">404</h2>
            <p className="mx-8 sm:mx-20 md:mx-24 text-center">
              <span className="font-bold">Paws...</span> That page doesn't exist. Click{" "}
              <Link href="/" className="underline hover:text-primary transition-colors">
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
