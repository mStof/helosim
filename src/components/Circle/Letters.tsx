import { tv } from "tailwind-variants";

type letterProps = {
  letter: string;
  rotate?:
    | "c1"
    | "c2"
    | "c3"
    | "c4"
    | "c5"
    | "c6"
    | "c7"
    | "c8"
    | "c9"
    | "c10"
    | "c11"
    | "c12"
    | "c13"
    | "c14"
    | "c15";
};

const span = tv(
  {
    base: "absolute flex h-full w-9 justify-center font-serif text-xl8 text-xl leading-none sm:text-5xl",
    variants: {
      rotate: {
        c1: "rotate-c1",
        c2: "rotate-c2",
        c3: "rotate-c3",
        c4: "rotate-c4",
        c5: "rotate-c5",
        c6: "rotate-c6",
        c7: "rotate-c7",
        c8: "rotate-c8",
        c9: "rotate-c9",
        c10: "rotate-c10",
        c11: "rotate-c11",
        c12: "rotate-c12",
        c13: "rotate-c13",
        c14: "rotate-c14",
        c15: "rotate-c15"
      }
    }
  },
  {
    responsiveVariants: ["sm"]
  }
);

const LettersContainer = () => {
  const lettersContent: letterProps[] = [
    { letter: "H" },
    { letter: "E", rotate: "c1" },
    { letter: "L", rotate: "c2" },
    { letter: "O", rotate: "c3" },
    { letter: "I", rotate: "c4" },
    { letter: "S", rotate: "c5" },
    { letter: "A", rotate: "c6" },
    { letter: "♡", rotate: "c7" },
    { letter: "H", rotate: "c8" },
    { letter: "E", rotate: "c9" },
    { letter: "L", rotate: "c10" },
    { letter: "O", rotate: "c11" },
    { letter: "I", rotate: "c12" },
    { letter: "S", rotate: "c13" },
    { letter: "A", rotate: "c14" },
    { letter: "♡", rotate: "c15" }
  ];

  return (
    <div
      id="btn_start_wrapper"
      className="lettersContainer relative flex size-56 -rotate-c3 items-center justify-center opacity-100 sm:size-[18.75rem]"
    >
      {lettersContent.map(({ letter, rotate }) => (
        <span key={crypto.randomUUID()} className={span({ rotate })}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LettersContainer;
