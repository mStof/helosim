import { useState } from "react";
import { DiscContainer } from "./DiscContainer/DiscContainer";
import { Header } from "../../Header";
import { Paragraph } from "./Paragraph";
import { Player } from "./Player";
import { StaticImageData } from "next/image";

export type useSongProps = {
  cover: string | StaticImageData;
  path: string;
  name: string;
};

const SongContainer = () => {
  const [trackOptions, setTrackOptions] = useState<useSongProps>({
    cover: "",
    path: "",
    name: ""
  });
  return (
    <article className="mb-16 flex flex-col bg-yellow-50">
      <Header headerTitle="Songs" />
      <Paragraph />
      {trackOptions.name && <Player trackOptions={trackOptions} />}
      <DiscContainer setTrackPath={setTrackOptions} />
    </article>
  );
};

export default SongContainer;
