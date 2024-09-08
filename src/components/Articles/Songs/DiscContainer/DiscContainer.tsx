import { Dispatch, SetStateAction, useState } from "react";
import Disc from "./Disc";
import * as Song from "../songs";
import { useSongProps } from "../SongContainer";

type DiscContainerProps = {
  setTrackPath: Dispatch<SetStateAction<useSongProps>>;
};

export const DiscContainer = ({ setTrackPath }: DiscContainerProps) => {
  const arr = [
    {
      cover: Song.covers.cover1,
      path: Song.songs.Enchanted,
      name: "Enchanted"
    },
    {
      cover: Song.covers.cover2,
      path: Song.songs.Afterglow,
      name: "Afterglow"
    },
    {
      cover: Song.covers.cover3,
      path: Song.songs.All_To_Well,
      name: "All To Well"
    },
    {
      cover: Song.covers.cover4,
      path: Song.songs.Amour_plastique,
      name: "Amour plastique"
    },
    { cover: Song.covers.cover5, path: Song.songs.Daylight, name: "Daylight" },
    { cover: Song.covers.cover6, path: Song.songs.Espresso, name: "Espresso" },
    {
      cover: Song.covers.cover7,
      path: Song.songs.How_You_Get_The_Girl,
      name: "How You Get The Girl"
    },
    {
      cover: Song.covers.cover8,
      path: Song.songs.Long_Live,
      name: "Long Live"
    },
    {
      cover: Song.covers.cover9,
      path: Song.songs.Love_Story,
      name: "Love Story"
    },
    {
      cover: Song.covers.cover10,
      path: Song.songs.New_Romantics,
      name: "New Romantics"
    },
    {
      cover: Song.covers.cover11,
      path: Song.songs.Please_Please_Please,
      name: "Please Please Please"
    },
    {
      cover: Song.covers.cover12,
      path: Song.songs.So_High_School,
      name: "So High School"
    },
    {
      cover: Song.covers.cover13,
      path: Song.songs.So_Long_London,
      name: "So Long London"
    },
    {
      cover: Song.covers.cover14,
      path: Song.songs.Steal_The_Show,
      name: "Steal The Show"
    },
    {
      cover: Song.covers.cover15,
      path: Song.songs.Stubborn_Love,
      name: "Stubborn Love"
    }
  ];

  const [active, setActive] = useState("");
  const handleClick = (
    e: React.PointerEvent<HTMLButtonElement>,
    song: useSongProps
  ) => {
    if (e.currentTarget.parentElement) {
      setActive(e.currentTarget.parentElement?.id);
      setTrackPath(song);
    }
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
            bgCd={song.cover}
            dataActive={dataActive}
            handleClick={(e) => handleClick(e, song)}
          />
        );
      })}
    </div>
  );
};
