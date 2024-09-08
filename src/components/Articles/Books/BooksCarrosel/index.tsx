import Book from "./book";
import { Dispatch, SetStateAction } from "react";
import * as Covers from "../covers";
import { mensageProps } from "../BooksContainer";

type BooksCarroselProps = {
  setMensage: Dispatch<SetStateAction<mensageProps>>;
};
const BooksCarrosel = ({ setMensage }: BooksCarroselProps) => {
  const books = [
    {
      mensage:
        "Mais do que tudo, eu te odeio porque penso em você. Com frequência...",
      title: "Principe Cruel",
      capa: Covers.capaPrincipeCruel
    },
    {
      mensage: "O coração é uma flecha. Ele precisa de mira para acertar.",
      title: "Six of Crows",
      capa: Covers.capaSixOfCrows
    },
    {
      mensage:
        "Minha vontade e meu desejo se transformaram pelo amor, o amor que move o sol e todas as outras 'estrelas'",
      title: "Instrumentos Mortais",
      capa: Covers.capaInstrumentosMortais
    },
    {
      mensage:
        "Foram os livros que fizeram com que eu sentisse que não estava completamente sozinho.",
      title: "Peças Infernais",
      capa: Covers.capaPecasInfernais
    },
    {
      mensage:
        "Mas lembrar nem sempre é algo que fazemos por nós mesmos; às vezes, é para fazer outra pessoa sorrir.",
      title: "Manual de Assassinato para B.G",
      capa: Covers.capaManualDeAssassinato
    },
    {
      mensage:
        "Embora a cama seja pequena, Cardan não se importa quando toma Jude nos braços",
      title: "O Rei de Elfhame",
      capa: Covers.capaReiDeElfhame
    }
  ];
  // Saiba que és meu amor mais que perfeito lindo maravilhoso incrivel dinivo, lindeza

  return (
    <div className="relative w-full overflow-hidden bg-yellow-50 py-4">
      <div className="hover:pause flex w-[calc(4rem*12+1rem*12)] animate-infiniteScroll gap-4">
        {books.map((obj) => {
          const onClick = () => setMensage(obj);
          return (
            <Book onClick={onClick} key={crypto.randomUUID()} capa={obj.capa} />
          );
        })}
        {books.map((obj) => {
          const onClick = () => setMensage(obj);
          return (
            <Book onClick={onClick} key={crypto.randomUUID()} capa={obj.capa} />
          );
        })}
      </div>
    </div>
  );
};
export default BooksCarrosel;
