import Image from "next/image";
import * as Covers from "./covers";
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
    {
      src: Covers.mammaMia,
      title: "Mamma Mia",
      mensage:
        "Basicamente seu filme preferido, e eu ainda quero muito ver ele com vc (Por mais que eu odeie musicais)"
    },
    {
      src: Covers.aEscolhaPerfeita,
      title: "A Escolha Perfeita",
      mensage:
        "Continuando sua lista de filmes preferidos temos seu xodozinho que eu vou ser obrigado a ver tbm"
    },
    {
      src: Covers.aViagemDeChihiro,
      title: "A Viagem de Chihiro",
      mensage:
        "Eu sei, é um pecado eu não ter visto esse filme ainda, mas a experiência vai ser muito melhor com você"
    },
    {
      src: Covers.questaoDeTempo,
      title: "Questão de Tempo",
      mensage:
        "Eu lembro de ver esse filme qnd nem estavamos namorando ainda, e a cada segundo não pode parar de pensar em como você me encantou a tal ponto"
    },
    {
      src: Covers.HowIMetYourMother,
      title: "How I Met Your Mother",
      mensage:
        "Simplesmente sua sitcon e série favorita, nunca que eu deixaria de fora, gosto pra krl dela e ainda vou te fzr viver o romance dos momentos bom disso aqui"
    },
    {
      src: Covers.Brooklyn99,
      title: "Brooklyn 99",
      mensage:
        "Agora a minha sitcom favorita que conseguiu ficar muito melhor depois de saber que você tbm gosta, como ja dizia peralta 'esse é o nome do nosso vídeo de sexo'"
    }
  ];

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
