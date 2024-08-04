"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const WordsContainer = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".word", {
        left: "auto",
        duration: 0.75,
        stagger: 0.2,
        delay: 0.5
      });
    },
    { scope: container }
  );

  return (
    <h1
      ref={container}
      className="flex w-full flex-col items-center gap-6 font-serif uppercase *:relative *:flex *:items-center sm:gap-8"
    >
      <span className="word sm:text-32 left-full h-9 text-5xl leading-none sm:h-24">
        Time to know
      </span>
      <span className="word sm:text-16 -left-full h-[1.125rem] text-2xl leading-none sm:h-12">
        Everything about the
      </span>
      <span className="word sm:text-8 left-full h-4 text-xl leading-none sm:h-6">
        Most beutiful person
      </span>
      <span className="word sm:text-8 -left-full h-4 text-xl leading-none sm:h-6">
        in this world
      </span>
      <span className="word left-full h-3 text-base leading-none sm:h-6 sm:text-2xl">
        Heloisa
      </span>
      <span className="word -left-full h-3 text-base leading-none sm:h-6 sm:text-2xl">
        ♡
      </span>
    </h1>
  );
};

export default WordsContainer;
