import { Fragment } from "react";

type PoemsTextProps = {
  poem: {
    firstParagraph: string[];
    secondParagraph: string[];
    thirdParagraph: string[];
    fourthParagraph: string[];
  };
};

const PoemsText = ({ poem }: PoemsTextProps) => {
  const { firstParagraph, secondParagraph, thirdParagraph, fourthParagraph } =
    poem;
  return (
    <div className="mt-16 px-8 font-normal">
      <p className="font-slab text-base leading-normal text-yellow-50">
        {firstParagraph.map((line) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              {line} <br />
            </Fragment>
          );
        })}
      </p>
      <br />
      <p className="font-slab text-base leading-normal text-yellow-50">
        {secondParagraph.map((line) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              {line} <br />
            </Fragment>
          );
        })}
      </p>
      <br />
      <p className="font-slab text-base leading-normal text-yellow-50">
        {thirdParagraph.map((line) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              {line} <br />
            </Fragment>
          );
        })}
      </p>
      <br />
      <p className="font-slab text-base leading-normal text-yellow-50">
        {fourthParagraph.map((line) => {
          return (
            <Fragment key={crypto.randomUUID()}>
              {line} <br />
            </Fragment>
          );
        })}
      </p>
    </div>
  );
};

export default PoemsText;
