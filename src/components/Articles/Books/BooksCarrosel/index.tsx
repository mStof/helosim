/* eslint-disable id-length */
import Book from "./book";
import { Dispatch, SetStateAction } from "react";

type BooksCarroselProps = {
  setMensage: Dispatch<SetStateAction<string>>;
};

const BooksCarrosel = ({ setMensage }: BooksCarroselProps) => {
  const width = [
    { mensage: "livro1", capa: "", color: "bg-blue-500" },
    { mensage: "livro2", capa: "", color: "bg-green-600" },
    { mensage: "livro3", capa: "", color: "bg-yellow-700" },
    { mensage: "livro4", capa: "", color: "bg-stone-800" },
    { mensage: "livro5", capa: "", color: "bg-orange-900" },
    { mensage: "livro6", capa: "", color: "bg-red-900" }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-yellow-50 py-4">
      <div className="hover:pause flex w-[calc(4rem*12+1rem*12)] animate-infiniteScroll gap-4">
        {width.map(({ mensage, color }) => {
          const onClick = () => setMensage(mensage);
          return (
            <Book
              onClick={onClick}
              key={crypto.randomUUID()}
              className={color}
            />
          );
        })}
        {width.map(({ mensage, color }) => {
          const onClick = () => setMensage(mensage);
          return (
            <Book
              onClick={onClick}
              key={crypto.randomUUID()}
              className={color}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BooksCarrosel;
