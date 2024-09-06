import Header from "@/components/.assets/Header";
import PoemsPicker from "./PoemsPicker";
import PoemsText from "./PoemsText";
import { useState } from "react";

const PoemsContainer = () => {
  const [poems, setPoems] = useState({
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
  });

  return (
    <article className="relative flex h-fit flex-col bg-pink-600 pb-16">
      <Header headerTitle="Poems" color="secondary" />
      <PoemsPicker setPoems={setPoems} poemIni={poems} />
      <PoemsText poem={poems} />
      <span className="absolute inset-0 top-full h-px w-full -translate-y-full bg-yellow-50"></span>
    </article>
  );
};

export default PoemsContainer;
