import { useState } from "react";
import { DiscContainer } from "./DiscContainer/DiscContainer";
import { Header } from "../../Header";
import { Paragraph } from "./Paragraph";
import { Player } from "./Player";

// TODO: ESCOLHER AS MUSICAS E AS NOSSAS FOTOS;

const SongContainer = () => {
  const [trackOptions, setTrackOptions] = useState({ path: "", name: "" });
  return (
    <article className="mb-16 flex flex-col bg-yellow-50">
      <Header headerTitle="VIADO" />
      <Paragraph />
      {trackOptions.name && <Player trackOptions={trackOptions} />}
      <DiscContainer setTrackPath={setTrackOptions} />
    </article>
  );
};

export default SongContainer;
