import { tv } from "tailwind-variants";
import { mensageProps } from "./BooksContainer";
import Image from "next/image";

const booksText = tv({
  slots: {
    container: "mb-16 flex h-fit w-full justify-center gap-0.5 px-6",
    book: "my-auto min-w-24 h-32 self-stretch rounded-md bg-blue-500 relative overflow-hidden shadow-lg6c",

    mensageContainer:
      "flex w-fit flex-col justify-between rounded-xl bg-yellow-50 gap-2 py-4 pl-4 pr-4 rounded-l-md",
    bookMensage:
      "font-slab text-sm italic font-bold leading-tight text-pink-600",
    bookTitle: "font-slab text-xs font-bold text-pink-600"
  }
});

const { book, bookMensage, bookTitle, container, mensageContainer } =
  booksText();

const BooksText = ({ mensageObj }: { mensageObj: mensageProps }) => {
  return (
    <article className={container()}>
      <div className={book()}>
        <Image
          src={mensageObj.capa}
          alt="Capa do disco"
          placeholder="blur"
          quality={100}
          className="pointer-events-none isolate"
          fill
          sizes="96px"
        />
      </div>
      <article className={mensageContainer()}>
        <em className={bookMensage()}>{`“${mensageObj.mensage}”`}</em>
        <p className={bookTitle()}>- {mensageObj.title}</p>
      </article>
    </article>
  );
};
export default BooksText;
