import Image, { StaticImageData } from "next/image";
import { tv, VariantProps } from "tailwind-variants";

const book = tv({
  base: "h-[5.5rem] min-w-0 rounded shadow-lg bg-red-400 w-16 relative overflow-hidden"
});

type BookProps = VariantProps<typeof book> & {
  capa: string | StaticImageData;
  onClick: () => void;
};

const Book = ({ capa, onClick }: BookProps) => {
  return (
    <>
      <div id="books" onClick={onClick} className={book()}>
        <Image
          src={capa}
          alt={`Capa do livro`}
          placeholder="blur"
          quality={100}
          className="pointer-events-none isolate"
          fill
        />
      </div>
    </>
  );
};
export default Book;
