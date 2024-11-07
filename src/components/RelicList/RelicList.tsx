import { costInfluencingRelics } from "configs/relics.config";
import React, { useEffect, useState } from "react";
import { CTData, Relic } from "types/ct";

const RelicList = ({
  data,
  loading,
  relics,
  handleRelicFilterClick,
}: {
  data: CTData;
  loading: boolean;
  relics: Relic[];
  handleRelicFilterClick: (relic: Relic) => void;
}) => {
  const [relicList, setRelicList] = useState<string[]>([]);

  const handleCheck = (e: any) => {
    handleRelicFilterClick(e.target.id);
  };

  useEffect(() => {
    let relics: string[] = [];

    Object.entries(data.tiles).map((tile) => {
      if (tile[1].relic) {
        relics.push(tile[1].relic);
      }
    });

    setRelicList(relics);
  }, [data]);

  return (
    <div className="w-64">
      <p className="text-lg font-medium text-center">
        What Relics did the team have?
      </p>
      <div className="w-full">
        {!loading ? (
          costInfluencingRelics.map((relic) => (
            <div
              className="tooltip flex"
              data-tip={
                relicList.includes(relic.id)
                  ? relic.description
                  : "Not available this event."
              }
              key={relic.id}
            >
              <label
                className={
                  "label w-full" +
                  (!relicList.includes(relic.id)
                    ? " cursor-not-allowed opacity-40"
                    : " cursor-pointer")
                }
              >
                <img src={relic.image} className="w-[28px]" />
                <span className="label-text">{relic.name}</span>
                <input
                  type="checkbox"
                  checked={relics.includes(relic.id as Relic)}
                  className="checkbox checkbox-sm"
                  id={relic.id}
                  disabled={!relicList.includes(relic.id)}
                  onChange={handleCheck}
                />
              </label>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-2 w-full py-2 items-center">
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RelicList;
