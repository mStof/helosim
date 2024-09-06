import { tv } from "tailwind-variants";

type MovieScreenProps = {
  mensage: string;
  title: string;
};

const Screen = tv({
  slots: {
    wrapperStyle: "w-full px-8",
    containerStyle:
      " min-h-40 relative flex h-fit w-full flex-col items-center justify-center gap-4 rounded border-2 border-pink-600 p-4 before:-inset-0.5 before:rounded-t before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:rotate-45 before:origin-bottom-left before:absolute before:h-10 before:w-0.5 before:bg-pink-600 after:-inset-0.5 after:rounded-t after:left-1/2 after:-translate-x-1/2 after:-translate-y-full after:-rotate-45 after:origin-bottom-right after:absolute after:h-10 after:w-0.5 after:bg-pink-600",
    mensageStyle: "text-balance text-center font-slab font-bold text-pink-600",
    titleStyle: "text-2xl text-pink-600"
  }
});

const { containerStyle, mensageStyle, titleStyle, wrapperStyle } = Screen();

const MovieScreen = ({ mensage, title }: MovieScreenProps) => {
  return (
    title &&
    mensage && (
      <div className={wrapperStyle()}>
        <div className={containerStyle()}>
          <em className={mensageStyle()}>{mensage}</em>
          <span className="h-0.5 w-full bg-pink-600"></span>
          <p className={titleStyle()}>{title}</p>
        </div>
      </div>
    )
  );
};

export default MovieScreen;
