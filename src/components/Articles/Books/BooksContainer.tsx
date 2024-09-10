import Header from "@/components/Header";
import BooksParagraph from "./BooksParagraps";
import BooksCarrosel from "./BooksCarrosel";
import BooksText from "./BooksText";
import { useState } from "react";
import { StaticImageData } from "next/image";

export type mensageProps = {
  mensage: string;
  title: string;
  capa: StaticImageData | string;
};

const BooksContainer = () => {
  const [mensageObj, setMensage] = useState<mensageProps>({
    mensage: "",
    title: "",
    capa: ""
  });
  return (
    <article className="h-fit bg-pink-600 pb-8">
      <Header headerTitle="books" color="secondary" />
      <BooksParagraph />
      {mensageObj.mensage && <BooksText mensageObj={mensageObj} />}
      <BooksCarrosel setMensage={setMensage} />
    </article>
  );
};

export default BooksContainer;
