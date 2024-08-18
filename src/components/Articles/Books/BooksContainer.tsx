import Header from "@/components/Header";
import BooksParagraph from "./BooksParagraps";
import BooksCarrosel from "./BooksCarrosel";
import BooksText from "./BooksText";
import { useState } from "react";

const BooksContainer = () => {
  const [mensage, setMensage] = useState("");
  return (
    <article className="h-screen bg-pink-600">
      <Header headerTitle="books" color="secondary" />
      <BooksParagraph />
      <BooksText mensage={mensage} />
      <BooksCarrosel setMensage={setMensage} />
    </article>
  );
};

export default BooksContainer;
