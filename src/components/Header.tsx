import { tv, VariantProps } from "tailwind-variants";

const header = tv({
  slots: {
    title: "font-serif leading-none text-[4rem] uppercase",
    titleLine: "h-1 w-auto flex-grow",
    underline: "h-0.5 w-full"
  },
  variants: {
    color: {
      primary: {
        title: "text-pink-600",
        titleLine: "bg-pink-600",
        underline: "bg-pink-600"
      },
      secondary: {
        title: "text-yellow-50",
        titleLine: "bg-yellow-50",
        underline: "bg-yellow-50"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});

type HeaderProps = VariantProps<typeof header> & {
  headerTitle: string;
};

export const Header = ({ headerTitle = "", color }: HeaderProps) => {
  const { title, titleLine, underline } = header();

  return (
    <div className="mt-8 flex h-fit flex-col gap-8">
      <div className="flex items-center justify-center gap-3">
        <span className={titleLine({ color })}></span>
        <h2 className={title({ color })}>{headerTitle}</h2>
        <span className={titleLine({ color })}></span>
      </div>
      <span className={underline({ color })}></span>
    </div>
  );
};

export default Header;
