import { Dispatch, SetStateAction, useState } from "react";
import PoemBtn from "./btn";

type PoemsPickerprops = {
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
  const [active, setActive] = useState("");

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

  const handleClick = (poem: typeof poemIni) => {
    setPoems(poem);
    setActive(poem.firstParagraph[0]);
  };

  return (
    <>
      <p className="mx-auto mt-16 text-2xl leading-none text-yellow-50">
        Selecione um poema:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2 px-8">
        {poems.map((poem, index) => {
          const btnActive = active === poem.firstParagraph[0];
          return (
            <>
              <PoemBtn
                key={index}
                active={btnActive}
                handleClick={handleClick}
                poem={poem}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default PoemsPicker;
