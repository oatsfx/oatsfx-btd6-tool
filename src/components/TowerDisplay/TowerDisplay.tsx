import { formatGameEntityName } from "util/converters";
import boxOfMonkeyImage from "images/relics/box_of_monkey.webp";

const TowerDisplay = ({
  name,
  image,
  indicator,
  boxOfMonkey,
}: {
  name: string;
  image: string;
  indicator?: string | number;
  boxOfMonkey?: boolean;
}) => {
  return (
    <div
      className="tooltip before:z-50 before:content-[attr(data-tip)] "
      data-tip={formatGameEntityName(name)}
    >
      {indicator ? (
        <span className="indicator-item indicator-bottom indicator-center badge px-2 outline outline-white/25 outline-1 rounded-[4px] font-medium shadow-lg">
          {indicator}
        </span>
      ) : (
        <></>
      )}
      {boxOfMonkey ? (
        <span className="indicator-item indicator-top font-medium shadow-lg">
          <img src={boxOfMonkeyImage} className="w-[24px]" />
        </span>
      ) : (
        <></>
      )}
      <div className="avatar">
        <div className="w-8 rounded-full shadow outline outline-1 outline-white/25">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default TowerDisplay;
