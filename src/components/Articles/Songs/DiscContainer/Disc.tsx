import cdImage from "@/../public//music/CdImage.png";
import Image, { StaticImageData } from "next/image";
import { tv } from "tailwind-variants";

const cd = tv({
  slots: {
    disk: `object-cove absolute mx-auto size-full transition-transform duration-500 data-[active=true]:-translate-y-1/2`,
    btn: `relative size-24 overflow-hidden rounded-md shadow-normal before:size-full before:absolute before:bg-black before:opacity-35 before:inset-0 before:z-10`
  }
});

const { btn, disk } = cd();

type DiscPrpos = {
  bgCd: StaticImageData;
  dataActive: boolean;
  handleClick: (e: React.PointerEvent<HTMLButtonElement>) => void;
  id: string;
};

const Disc = ({ bgCd, dataActive, handleClick, id }: DiscPrpos) => {
  return (
    <div id={id} className="relative z-20 -mt-7 flex h-fit w-fit flex-col">
      <Image
        src={cdImage}
        alt="CD img"
        className={disk()}
        data-active={dataActive}
      />
      <button onClick={handleClick} id="cdBox" className={btn()}>
        <Image
          src={bgCd}
          alt="Capa do disco"
          placeholder="blur"
          quality={100}
          className="pointer-events-none isolate"
          fill
          sizes="96px"
        />
      </button>
    </div>
  );
};

export default Disc;
