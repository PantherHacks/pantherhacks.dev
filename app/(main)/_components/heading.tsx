"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./parallax.css";

import { useEffect, useRef, useState } from "react";

const Heading = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [backgroundPercentage, setBackgroundPercentage] = useState(0);

  const parallaxRef = useRef(null);
  const titleTextRef = useRef(null);
  const mountain1Ref = useRef(null);
  const mountain2Ref = useRef(null);
  const keckRef = useRef(null);
  const redSquareRef = useRef(null);
  const secondaryTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "1500px bottom", // Using vh instead of fixed px
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackgroundPercentage(Math.ceil(40 + self.progress * 20));
          },
        },
      });
      tl.to(
        titleTextRef.current,
        {
          y: "+=10vh", // 10vh instead of 100px
          opacity: 0,
          duration: 0.75,
        },
        0
      );
      tl.to(
        mountain1Ref.current,
        {
          y: "-=100px",
        },
        0
      );
      tl.to(
        mountain2Ref.current,
        {
          y: "-=150px",
        },
        0
      );
      tl.to(
        redSquareRef.current,
        {
          y: "-=200px",
        },
        0
      );
      tl.to(
        keckRef.current,
        {
          y: "-=240px",
        },
        0
      );
      tl.to(
        secondaryTitleRef.current,
        {
          y: "-=150px",
          opacity: 1,
          delay: 0.5,
        },
        0
      );
    });
    return () => ctx.revert();
  }, [setBackgroundPercentage]);

  return (
    <div
      className={"parallax"}
      ref={parallaxRef}
      style={{
        background: `linear-gradient(#195B7B 0%, #4DC9CC ${backgroundPercentage}%, #BEFCFD 100%)`,
      }}
    >
      <Image
        className={"parallax_img mountain-1"}
        src={"/images/main-background/mountain-1-cropped.svg"}
        alt={"Mountain"}
        width={0}
        height={0}
        ref={mountain1Ref}
      />
      <Image
        className={"parallax_img mountain-2"}
        src={"/images/main-background/mountain-2-cropped.svg"}
        alt={"Mountain"}
        width={0}
        height={0}
        ref={mountain2Ref}
      />
      <Image
        className={"parallax_img keck"}
        src={"/images/main-background/keck-cropped-cropped.svg"}
        alt={"Keck Center"}
        width={0}
        height={0}
        ref={keckRef}
      />
      <div ref={redSquareRef} className="w-full bg-[#3F1324] redSquare parallax_img" />
      <div ref={titleTextRef} className="flex w-full justify-center items-center text-center z-1 pantherhacks-title">
        <h1 className="font-TangoSansBold text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#befcfd] max-w-[calc(100vw-4rem)]">
          PANTHERHACKS 2025
        </h1>
      </div>
      <div
        ref={secondaryTitleRef}
        className="flex flex-col w-full justify-center items-center text-center z-10 gap-y-8 secondary-title"
      >
        <h2 className="font-TangoSansBold text-xl sm:text-5xl text-white cursor-default">April X-X, 2025</h2>
      </div>
    </div>
  );
};

export default Heading;
