/* eslint-disable id-length */
import Book from "./book";
import { Dispatch, SetStateAction } from "react";
import capaInstrumentosMortais from "@/../public/Instrumentos-Mortais.jpg";
import capaManualDeAssassinato from "@/../public/Manual-de-Assassinato.jpg";
import capaPecasInfernais from "@/../public/Peças-Infernais.jpg";
import capaPrincipeCruel from "@/../public/Principe-Cruel.jpg";
import capaReiDeElfhame from "@/../public/Rei-de-Elfhame.jpg";
import capaSixOfCrows from "@/../public/SOC.jpg";
import { mensageProps } from "../BooksContainer";

type BooksCarroselProps = {
  setMensage: Dispatch<SetStateAction<mensageProps>>;
};
// TODO: Adicionar os livros com suas capas e autores
const BooksCarrosel = ({ setMensage }: BooksCarroselProps) => {
  const books = [
    {
      mensage:
        "Mais do que tudo, eu te odeio porque penso em você. Com frequência...",
      title: "Principe Cruel",
      capa: capaPrincipeCruel
    },
    {
      mensage: "O coração é uma flecha. Ele precisa de mira para acertar.",
      title: "Six of Crows",
      capa: capaSixOfCrows
    },
    {
      mensage:
        "Minha vontade e meu desejo se transformaram pelo amor, o amor que move o sol e todas as outras 'estrelas'",
      title: "Instrumentos Mortais",
      capa: capaInstrumentosMortais
    },
    {
      mensage:
        "Foram os livros que fizeram com que eu sentisse que não estava completamente sozinho.",
      title: "Peças Infernais",
      capa: capaPecasInfernais
    },
    {
      mensage:
        "Mas lembrar nem sempre é algo que fazemos por nós mesmos; às vezes, é para fazer outra pessoa sorrir.",
      title: "Manual de Assassinato para B.G",
      capa: capaManualDeAssassinato
    },
    {
      mensage:
        "Embora a cama seja pequena, Cardan não se importa quando toma Jude nos braços",
      title: "O Rei de Elfhame",
      capa: capaReiDeElfhame
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
