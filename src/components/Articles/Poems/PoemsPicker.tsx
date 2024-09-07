/* eslint-disable id-length */
import { Dispatch, SetStateAction } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "relative flex justify-center overflow-hidden p-2 text-base leading-none text-yellow-50 before:absolute before:top-full before:h-px before:w-full before:-translate-y-full before:bg-yellow-50 before:transition-transform before:duration-200 active:text-pink-600 active:before:scale-y-[64] data-[active=true]:text-pink-600 data-[active=true]:before:scale-y-[64]"
});

type PoemsPickerprops = VariantProps<typeof button> & {
  setPoems: Dispatch<
    SetStateAction<{
      firstParagraph: string[];
      secondParagraph: string[];
      thirdParagraph: string[];
      fourthParagraph: string[];
    }>
  >;
  poemIni: {
    firstParagraph: string[];
    secondParagraph: string[];
    thirdParagraph: string[];
    fourthParagraph: string[];
  };
};

const PoemsPicker = ({ setPoems, poemIni }: PoemsPickerprops) => {
  const poems = [
    {
      firstParagraph: [
        "Lembro-me de ti",
        "Pois não quero te ver ir",
        "A minha saudade é tanta",
        "Que prefiro estar aqui"
      ],
      secondParagraph: [
        "Oh minha Helo, por você zelarei",
        "Oh minha Helo, por você viverei",
        "Não importa o que aconteça",
        "Estarei aqui até que anoiteça"
      ],
      thirdParagraph: [
        "Sei que não sou perfeito",
        "E sim, tenho muitos defeitos,",
        "Mas quero te amar",
        "Custe o que custar"
      ],
      fourthParagraph: [
        "Chego ao fim dessa canção",
        "Com uma grande questão",
        "Onde vai meu amor",
        "A não ser até a imensidão"
      ]
    },
    {
      firstParagraph: [
        "Lembro-me de ti2",
        "Pois não quero te ver ir",
        "A minha saudade é tanta",
        "Que prefiro estar aqui"
      ],
      secondParagraph: [
        "Oh minha Helo, por você zelarei",
        "Oh minha Helo, por você viverei",
        "Não importa o que aconteça",
        "Estarei aqui até que anoiteça"
      ],
      thirdParagraph: [
        "Sei que não sou perfeito",
        "E sim, tenho muitos defeitos,",
        "Mas quero te amar",
        "Custe o que custar"
      ],
      fourthParagraph: [
        "Chego ao fim dessa canção",
        "Com uma grande questão",
        "Onde vai meu amor",
        "A não ser até a imensidão"
      ]
    },
    {
      firstParagraph: [
        "Lembro-me de ti3",
        "Pois não quero te ver ir",
        "A minha saudade é tanta",
        "Que prefiro estar aqui"
      ],
      secondParagraph: [
        "Oh minha Helo, por você zelarei",
        "Oh minha Helo, por você viverei",
        "Não importa o que aconteça",
        "Estarei aqui até que anoiteça"
      ],
      thirdParagraph: [
        "Sei que não sou perfeito",
        "E sim, tenho muitos defeitos,",
        "Mas quero te amar",
        "Custe o que custar"
      ],
      fourthParagraph: [
        "Chego ao fim dessa canção",
        "Com uma grande questão",
        "Onde vai meu amor",
        "A não ser até a imensidão"
      ]
    },
    {
      firstParagraph: [
        "Lembro-me de ti4",
        "Pois não quero te ver ir",
        "A minha saudade é tanta",
        "Que prefiro estar aqui"
      ],
      secondParagraph: [
        "Oh minha Helo, por você zelarei",
        "Oh minha Helo, por você viverei",
        "Não importa o que aconteça",
        "Estarei aqui até que anoiteça"
      ],
      thirdParagraph: [
        "Sei que não sou perfeito",
        "E sim, tenho muitos defeitos,",
        "Mas quero te amar",
        "Custe o que custar"
      ],
      fourthParagraph: [
        "Chego ao fim dessa canção",
        "Com uma grande questão",
        "Onde vai meu amor",
        "A não ser até a imensidão"
      ]
    },
    {
      firstParagraph: [
        "Lembro-me de ti5",
        "Pois não quero te ver ir",
        "A minha saudade é tanta",
        "Que prefiro estar aqui"
      ],
      secondParagraph: [
        "Oh minha Helo, por você zelarei",
        "Oh minha Helo, por você viverei",
        "Não importa o que aconteça",
        "Estarei aqui até que anoiteça"
      ],
      thirdParagraph: [
        "Sei que não sou perfeito",
        "E sim, tenho muitos defeitos,",
        "Mas quero te amar",
        "Custe o que custar"
      ],
      fourthParagraph: [
        "Chego ao fim dessa canção",
        "Com uma grande questão",
        "Onde vai meu amor",
        "A não ser até a imensidão"
      ]
    }
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    poem: typeof poemIni
  ) => {
    setPoems(poem);
    console.log(e);
  };

  return (
    <>
      <p className="mx-auto mt-16 text-2xl leading-none text-yellow-50">
        Selecione um poema:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2 px-8">
        {poems.map((poem) => {
          return (
            <button
              key={crypto.randomUUID()}
              data-active={poem.firstParagraph[0] === poemIni.firstParagraph[0]}
              className={button()}
              onClick={(e) => handleClick(e, poem)}
            >
              <span className="isolate">Aquele que fiz</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default PoemsPicker;
