import { TileDisplay } from "components/TileDisplay";
import React, { useEffect, useMemo, useState } from "react";

import bannerImage from "images/ct/banner_s.webp";
import relicImage from "images/ct/relic_s.webp";
import blankImage from "images/ct/regular_s.webp";
import { CTData, Relic, Tile, TileType } from "types/ct";
import { relicImages } from "util/formatters";
import { formatGameEntityName } from "util/converters";

const TileSelector = ({
  data,
  loading,
  selectedTile,
  relics,
  changeTile,
}: {
  data: CTData;
  loading: boolean;
  selectedTile: string;
  relics: Relic[];
  changeTile: (tile: string) => void;
}) => {
  const [tileFilter, setTileFilter] = useState<TileType | "all">("all");
  const [filteredTileCodes, setFilteredTileCodes] = useState<{
    [key: string]: Tile;
  }>({});

  const handleFilter = (e: any) => {
    setTileFilter(e.target.value);
  };

  const handleSelection = (e: any) => {
    const tile = e.target.value as string;
    changeTile(tile);
  };

  const handleRelicSelection = (e: any) => {
    setTileFilter("relic");
    changeTile(e.target.id);
    (document.getElementById("tile-select") as HTMLSelectElement).value =
      e.target.id;
  };

  useEffect(() => {
    const filtered = Object.keys(data.tiles)
      .sort()
      .reduce((filtered: { [key: string]: Tile }, key) => {
        if (
          data.tiles[key].game_type === "least_cash" &&
          (tileFilter === "all" || data.tiles[key].tile_type === tileFilter)
        ) {
          filtered[key] = data.tiles[key];
        }
        return filtered;
      }, {});
    if (!Object.keys(filtered).includes(selectedTile) && selectedTile !== "") {
      changeTile(Object.keys(filtered).at(0) as any);
    }

    setFilteredTileCodes(filtered);
  }, [tileFilter, data]);

  return (
    <div className="w-64">
      <div className="w-full justify-center">
        <p className="text-lg font-medium text-center">
          What tile was this scored on?
        </p>
        {!loading ? (
          <>
            <div className="flex gap-4 py-1 justify-center">
              <label className="label flex-col cursor-pointer">
                <input
                  type="radio"
                  name="radio-1"
                  value="banner"
                  className="radio"
                  checked={tileFilter === "banner"}
                  onChange={handleFilter}
                />
                <img className="w-[28px] py-2" src={bannerImage} />
              </label>
              <label className="label flex-col cursor-pointer">
                <input
                  type="radio"
                  name="radio-1"
                  value="relic"
                  className="radio"
                  checked={tileFilter === "relic"}
                  onChange={handleFilter}
                />
                <img className="w-[28px] py-2" src={relicImage} />
              </label>
              <label className="label flex-col cursor-pointer">
                <input
                  type="radio"
                  name="radio-1"
                  value="regular"
                  className="radio"
                  checked={tileFilter === "regular"}
                  onChange={handleFilter}
                />
                <img className="w-[28px] py-2" src={blankImage} />
              </label>
              <label className="label flex-col cursor-pointer">
                <input
                  type="radio"
                  name="radio-1"
                  value="all"
                  className="radio"
                  checked={tileFilter === "all"}
                  onChange={handleFilter}
                />
                <p className="text-sm py-3">All</p>
              </label>
            </div>
            <div className="flex gap-6">
              <select
                id="tile-select"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelection}
                defaultValue={"Select a tile"}
              >
                <option disabled>Select a tile</option>
                {Object.entries(filteredTileCodes).map((tileCode) => (
                  <option id={tileCode[0]} key={tileCode[0]}>
                    {tileCode[0]}
                  </option>
                ))}
              </select>
              <details className="dropdown dropdown-right dropdown-center">
                <summary className="btn w-24">Quick Relic</summary>
                <ul className="p-2 shadow-xl menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  {Object.entries(data.tiles).map((tile) =>
                    tile[1].tile_type === "relic" &&
                    tile[1].game_type === "least_cash" ? (
                      <li key={tile[1].relic as string}>
                        <a id={tile[0]} onClick={handleRelicSelection}>
                          <img
                            className="w-[20px]"
                            src={
                              relicImages[
                                tile[1].relic as keyof typeof relicImages
                              ]
                            }
                          />
                          {formatGameEntityName(tile[1].relic as string)}
                        </a>
                      </li>
                    ) : null
                  )}
                </ul>
              </details>
            </div>
            {selectedTile ? (
              <TileDisplay
                tileCode={selectedTile}
                tile={data.tiles[selectedTile]}
              />
            ) : (
              <p className="text-center">No tile selected.</p>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-2 w-full py-2 items-center">
            <div className="skeleton h-12 w-full" />
            <div className="skeleton h-3 w-full" />
            <div className="flex gap-2">
              <div className="skeleton w-8 h-8 rounded-full shrink-0" />
              <div className="skeleton w-8 h-8 rounded-full shrink-0" />
              <div className="skeleton w-8 h-8 rounded-full shrink-0" />
              <div className="skeleton w-8 h-8 rounded-full shrink-0" />
              <div className="skeleton w-8 h-8 rounded-full shrink-0" />
              <div className="skeleton w-8 h-8 rounded-full shrink-0" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TileSelector;
