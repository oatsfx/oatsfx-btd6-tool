import { formatGameEntityName } from "util/converters";

const TowerDisplay = ({
  name,
  image,
  indicator,
}: {
  name: string;
  image: string;
  indicator?: string | number;
}) => {
  return (
    <div
      className="tooltip before:z-48 before:content-[attr(data-tip)] block z-[50] !overflow-visible"
      data-tip={formatGameEntityName(name)}
    >
      {indicator ? (
        <span className="indicator-item indicator-bottom indicator-center badge font-medium shadow-lg">
          {indicator}
        </span>
      ) : null}
      <div className="avatar">
        <div className="w-8 rounded-full shadow outline outline-1 outline-white/25">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default TowerDisplay;
