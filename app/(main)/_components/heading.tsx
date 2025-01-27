"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./parallax.css";

import { useEffect, useRef } from "react";

const Heading = () => {
  gsap.registerPlugin(ScrollTrigger);

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
          end: "1500 bottom",
          scrub: true,
          pin: true,
        },
      });
      tl.to(
        titleTextRef.current,
        {
          y: "+=100",
          opacity: 0,
          duration: 0.75,
        },
        0
      );
      tl.to(
        mountain1Ref.current,
        {
          y: "-=100",
        },
        0
      );
      tl.to(
        mountain2Ref.current,
        {
          y: "-=150",
        },
        0
      );
      tl.to(
        redSquareRef.current,
        {
          y: "-=200",
        },
        0
      );
      tl.to(
        keckRef.current,
        {
          y: "-=220",
        },
        0
      );
      tl.to(
        secondaryTitleRef.current,
        {
          y: "-=150",
          opacity: 1,
          delay: 0.5,
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={"parallax"} ref={parallaxRef}>
      <Image
        className={"parallax_img"}
        src={"/images/main-background/skybackground.png"}
        alt={"Keck Center Background Image"}
        width={0}
        height={0}
      />
      <Image
        className={"parallax_img mountain-1"}
        src={"/images/main-background/mountain-1.png"}
        alt={"Mountain"}
        width={0}
        height={0}
        ref={mountain1Ref}
      />
      <Image
        className={"parallax_img mountain-2"}
        src={"/images/main-background/mountain-2.png"}
        alt={"Mountain"}
        width={0}
        height={0}
        ref={mountain2Ref}
      />
      <Image
        className={"parallax_img keck"}
        src={"/images/main-background/keck.png"}
        alt={"Keck Center"}
        width={0}
        height={0}
        ref={keckRef}
      />
      <div ref={redSquareRef} className="w-full bg-[#3F1324] redSquare parallax_img" />
      <div ref={titleTextRef} className="w-full justify-center items-center text-center z-1 pantherhacks-title">
        <h1 className="font-TangoSansBold text-2xl sm:text-4xl md:text-7xl lg:text-8xl text-[#befcfd]">PANTHERHACKS</h1>
      </div>
      <div ref={secondaryTitleRef} className="flex w-full justify-center items-center text-center z-10 secondary-title">
        <h1 className="font-TangoSansBold text-2xl sm:text-4xl md:text-6xl text-white">COMING APRIL 2025</h1>
      </div>
    </div>
  );
};

export default Heading;
