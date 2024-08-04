/* eslint-disable no-plusplus */
/* eslint-disable id-length */
import test from "@/../public/capa.png";

import { Dispatch, SetStateAction, useState } from "react";
import Disc from "./Disc";

import enchanted from "../../../../../public/Enchanted.mp3";

export const DiscContainer = ({
  setTrackPath
}: {
  setTrackPath: Dispatch<
    SetStateAction<{
      path: string;
      name: string;
    }>
  >;
}) => {
  const arr = [
    { path: enchanted, name: "Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" },
    { path: enchanted, name: "1Enchanted" }
  ];
  const [active, setActive] = useState<string | undefined>("");
  const handleClick = (
    e: React.PointerEvent<HTMLButtonElement>,
    song: { path: string; name: string }
  ) => {
    setActive(e.currentTarget.parentElement?.id);
    setTrackPath(song);
  };

  return (
    <div
      id="disksContainer"
      className="mx-auto flex w-fit flex-wrap items-center justify-center gap-x-6 pt-14"
    >
      {arr.map((song, index) => {
        const dataActive = active === `id_${index}`;
        return (
          <Disc
            key={index}
            id={`id_${index}`}
            bgCd={test}
            dataActive={dataActive}
            handleClick={(e) => handleClick(e, song)}
          />
        );
      })}
    </div>
  );
};
