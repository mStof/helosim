"use client";
import { Dispatch, SetStateAction, useRef } from "react";
import LettersContainer from "./Letters";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const CircleContainer = ({
  setShowMain
}: {
  setShowMain: Dispatch<SetStateAction<boolean>>;
}) => {
  const { contextSafe } = useGSAP();
  const container = useRef(null);
  const tl = useRef<GSAPTimeline>();

  const handleClick = contextSafe(() => {
    tl.current = gsap
      .timeline()
      .to(
        [".lettersContainer", ".clickMeText"],
        { opacity: 0, duration: 0.2 },
        "+=0.2"
      )
      .to(
        container.current,
        { scale: 10, duration: 2.25, onComplete: () => setShowMain(true) },
        "+=0.25"
      );
  });

  const handleMouseDown = contextSafe(() => {
    gsap.to(container.current, { scale: 0.75, duration: 0.5 });
  });
  const handleMouseUp = contextSafe(() => {
    gsap.to(container.current, { scale: 1, duration: 0.5 });
  });
  return (
    <div className="flex h-screen max-h-svh min-h-svh items-center justify-center">
      <button
        ref={container}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        className="m-auto flex size-fit cursor-pointer items-center justify-center rounded-full bg-pink-600 p-6 text-yellow-50 sm:p-9"
      >
        <LettersContainer />
        <p className="clickMeText absolute text-center font-slab text-2xl font-bold uppercase leading-normal tracking-16">
          Click <br /> me
        </p>
      </button>
    </div>
  );
};

export default CircleContainer;
