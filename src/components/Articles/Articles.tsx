import BooksContainer from "./Books/BooksContainer";
import Footer from "./Footer/Footer";
import MoviesContainer from "./Movies/MoviesContainer";
import PoemsContainer from "./Poems/PoemsContainer";
import SongContainer from "./Songs/SongContainer";
import { TextContainer } from "./Text";

const Articles = () => {
  return (
    <>
      <TextContainer />
      <SongContainer />
      <BooksContainer />
      <MoviesContainer />
      <PoemsContainer />
      <Footer />
    </>
  );
};

export default Articles;
