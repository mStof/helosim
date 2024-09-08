import { tv } from "tailwind-variants";

const button = tv({
  base: "relative flex justify-center overflow-hidden p-2 text-base leading-none text-yellow-50 before:absolute before:top-full before:h-px before:w-full before:-translate-y-full before:bg-yellow-50 before:transition-transform before:duration-200  data-[active=true]:text-pink-600 data-[active=true]:before:scale-y-[64]"
});

type PoemBtnProps = {
  active: boolean;
  poem: {
    firstParagraph: string[];
    secondParagraph: string[];
    thirdParagraph: string[];
    fourthParagraph: string[];
  };
  handleClick: (poem: {
    firstParagraph: string[];
    secondParagraph: string[];
    thirdParagraph: string[];
    fourthParagraph: string[];
  }) => void;
};

const PoemBtn = ({ poem, active, handleClick }: PoemBtnProps) => {
  return (
    <button
      data-active={active}
      className={button()}
      onClick={() => handleClick(poem)}
    >
      <span className="isolate">Aquele que fiz</span>
    </button>
  );
};

export default PoemBtn;
