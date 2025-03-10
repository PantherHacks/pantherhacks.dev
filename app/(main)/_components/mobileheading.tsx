import Image from "next/image";
import Link from "next/link";

import "./mobileheading.css";

const MobileHeading = () => {
  return (
    <div className="mobile-heading bg-[#3F1324] flex w-full flex-col items-center justify-center text-center">
      <div
        className="flex flex-col flex-1 items-center justify-center w-full pt-44"
        style={{ background: "linear-gradient(#195B7B 0%, #4DC9CC 50%, #BEFCFD 100%)" }}
      >
        <h1 className="flex flex-wrap font-TangoSansBold pantherhacks-title text-5xl sm:text-6xl text-[#befcfd] w-full px-4 sm:px-16">
          PANTHERHACKS 2025
        </h1>
        <Image
          className="w-full mt-32 sm:mt-20"
          src="/images/keck_blank_mobile_sharp.png"
          alt="Keck Center"
          width={0}
          height={0}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center text-center z-10 gap-y-8 pt-5 pb-10 secondary-title">
        <h2 className="font-TangoSansBold text-3xl text-white cursor-default">April X-X, 2025</h2>
        <Link href="/apply">
          <h1 className="font-TangoSansBold text-4xl text-white cursor-pointer hover:text-[#fe8e8e] transition-colors duration-300">
            APPLY NOW
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default MobileHeading;
