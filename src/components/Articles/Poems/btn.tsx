import { tv } from "tailwind-variants";
import { poemType } from "./PoemsContainer";

const button = tv({
  base: "relative flex justify-center overflow-hidden p-2 text-base leading-none text-yellow-50 before:absolute before:top-full before:h-px before:w-full before:-translate-y-full before:bg-yellow-50 before:transition-transform before:duration-200  data-[active=true]:text-pink-600 data-[active=true]:before:scale-y-[64]"
});

type PoemBtnProps = {
  active: boolean;
  poem: poemType;
  title: string;
  handleClick: (poem: poemType) => void;
};

const PoemBtn = ({ poem, active, title, handleClick }: PoemBtnProps) => {
  return (
    <button
      data-active={active}
      className={button()}
      onClick={() => handleClick(poem)}
    >
      <span className="isolate">{title}</span>
    </button>
  );
};

export default PoemBtn;
