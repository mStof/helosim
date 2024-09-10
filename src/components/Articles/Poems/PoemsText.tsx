import { Fragment } from "react";
import { poemType } from "./PoemsContainer";

type PoemsTextProps = {
  poem: poemType | null;
};

const PoemsText = ({ poem }: PoemsTextProps) => {
  return (
    poem && (
      <div className="mt-16 px-8 font-normal">
        <p className="font-slab text-base leading-normal text-yellow-50">
          {poem.poem.firstParagraph.map((line) => {
            return (
              <Fragment key={crypto.randomUUID()}>
                {line} <br />
              </Fragment>
            );
          })}
        </p>
        <br />
        <p className="font-slab text-base leading-normal text-yellow-50">
          {poem.poem.secondParagraph.map((line) => {
            return (
              <Fragment key={crypto.randomUUID()}>
                {line} <br />
              </Fragment>
            );
          })}
        </p>
        <br />
        <p className="font-slab text-base leading-normal text-yellow-50">
          {poem.poem.thirdParagraph.map((line) => {
            return (
              <Fragment key={crypto.randomUUID()}>
                {line} <br />
              </Fragment>
            );
          })}
        </p>
        <br />
        <p className="font-slab text-base leading-normal text-yellow-50">
          {poem.poem.fourthParagraph.map((line) => {
            return (
              <Fragment key={crypto.randomUUID()}>
                {line} <br />
              </Fragment>
            );
          })}
        </p>
      </div>
    )
  );
};

export default PoemsText;
