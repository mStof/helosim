import Image from "next/image";
import mouseSvg from "@/../public/CgMouse.svg";
import WordsContainer from "./Words";

const Article = () => {
  return (
    <article className="relative flex h-screen max-h-svh min-h-svh items-center justify-center bg-pink-600 text-yellow-50">
      <WordsContainer />
      <div className="absolute flex -translate-y-4 flex-col items-center gap-2 self-end text-yellow-50 sm:gap-3">
        <Image className="size-5 sm:size-6" src={mouseSvg} alt="Mouse scroll" />
        <p className="font-slab text-xs font-bold uppercase leading-none sm:text-base">
          Scroll down
        </p>
      </div>
    </article>
  );
};

export default Article;
