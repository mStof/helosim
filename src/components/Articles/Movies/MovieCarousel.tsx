import Image from "next/image";
import test from "@/../public/movie/capa.png";
import { Dispatch, SetStateAction } from "react";

type MovieCorouselProps = {
  handleClick: Dispatch<
    SetStateAction<{
      mensage: string;
      title: string;
    }>
  >;
};

const MovieCarousel = ({ handleClick }: MovieCorouselProps) => {
  const moviesObj = [
    { src: test, title: "Mamma Mia", mensage: "1" },
    { src: test, title: "Mamma Mia2", mensage: "2" },
    { src: test, title: "Mamma Mia3", mensage: "3" },
    { src: test, title: "Mamma Mia4", mensage: "4" },
    { src: test, title: "Mamma Mia5", mensage: "5" },
    { src: test, title: "Mamma Mia6", mensage: "6" }
  ];

  // Lorem ipsum dolor sit amet muiioti tincidunt et dolore magna aliqu Lorem ipsum dolor

  return (
    <div className="mt-16 w-full snap-x overflow-x-auto px-2">
      <div className="flex w-fit gap-2">
        {moviesObj.map(({ src, title, mensage }) => {
          return (
            <div
              className="relative h-[4.5rem] w-32 snap-center rounded shadow-md"
              key={crypto.randomUUID()}
              onClick={() => handleClick({ mensage, title })}
            >
              <Image
                src={src}
                alt={`Capa do livro`}
                placeholder="blur"
                quality={100}
                className="pointer-events-none isolate rounded object-cover"
                fill
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCarousel;
