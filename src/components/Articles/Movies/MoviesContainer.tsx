import Header from "@/components/Header";
import MovieParagraph from "./MovieParagraph";
import MovieScreen from "./MovieScreen";
import MovieCarousel from "./MovieCarousel";
import { useState } from "react";

const MoviesContainer = () => {
  const [content, setContent] = useState({ mensage: "", title: "" });

  return (
    <article className="h-fit pb-8">
      <Header headerTitle="Movies" />
      <MovieParagraph />
      <MovieScreen mensage={content.mensage} title={content.title} />
      <MovieCarousel handleClick={setContent} />
    </article>
  );
};

export default MoviesContainer;
