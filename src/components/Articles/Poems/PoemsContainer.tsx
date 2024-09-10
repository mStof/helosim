import Header from "@/components/Header";
import PoemsPicker from "./PoemsPicker";
import PoemsText from "./PoemsText";
import { useState } from "react";

export type poemType = {
  title: string;
  poem: {
    firstParagraph: string[];
    secondParagraph: string[];
    thirdParagraph: string[];
    fourthParagraph: string[];
  };
};

const PoemsContainer = () => {
  const [poems, setPoems] = useState<poemType | null>(null);

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
