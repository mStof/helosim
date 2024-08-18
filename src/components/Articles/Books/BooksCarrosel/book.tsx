import { tv, VariantProps } from "tailwind-variants";

const book = tv({
  base: "h-20 min-w-0 rounded border bg-red-400 w-16"
});

type BookProps = VariantProps<typeof book> & {
  className?: string;
  onClick: () => void;
};

const Book = ({ className, onClick }: BookProps) => {
  return (
    <>
      <div id="books" onClick={onClick} className={book({ className })}></div>
    </>
  );
};
export default Book;
