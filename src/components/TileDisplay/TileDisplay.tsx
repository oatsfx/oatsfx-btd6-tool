import {
  towerImages,
  mapImages,
  relicImages,
  tileImages,
  gameTypeImages,
  heroImages,
} from "util/formatters";
import { Tile, allHeroes } from "types/ct";

import noSellingImage from "images/modifiers/selling_disabled.webp";
import noMkImage from "images/modifiers/monkey_knowledge_disabled.webp";
import { TowerDisplay } from "components/TowerDisplay";
import { formatGameEntityName } from "util/converters";

const TileDisplay = ({ tileCode, tile }: { tileCode: string; tile: Tile }) => {
  return (
    <div
      className={
        "indicator w-full flex flex-col outline outline-1 outline-white/50 rounded-xl items-center my-8 py-4 pb-6 bg-no-repeat bg-top bg-cover bg-clip-border " +
        mapImages[tile.map as keyof typeof mapImages]
      }
    >
      <div className="indicator-item indicator-top indicator-center badge badge-ghost font-semibold gap-1 px-5 py-3 outline outline-1 outline-white/25">
        <img
          src={gameTypeImages[tile.game_type as keyof typeof gameTypeImages]}
          className="w-[16px]"
        />
        {formatGameEntityName(tile.game_type as string)}
      </div>
      <p className="font-bold text-2xl text-center">{tileCode}</p>
      <p className="font-medium text-md text-center">
        {formatGameEntityName(tile.map as string)} //{" "}
        {formatGameEntityName(tile.difficulty as string)}
      </p>
      <p className="text-md text-center">
        {`$${tile.cash?.toLocaleString()} // `}{" "}
        {`Round ${tile.start_round}-${tile.end_round}`}
      </p>
      <div className="flex flex-wrap gap-2 pt-2 justify-center items-center">
        {!tile.selling ? (
          <div
            className="tooltip indicator before:z-50"
            data-tip={"Selling Disabled"}
          >
            <img src={noSellingImage} className="w-[34px]" />
          </div>
        ) : (
          <></>
        )}
        {!tile.monkey_knowledge ? (
          <div
            className="tooltip indicator before:z-50"
            data-tip={"Monkey Knowledge Disabled"}
          >
            <img src={noMkImage} className="w-[34px]" />
          </div>
        ) : (
          <></>
        )}
        {tile.tile_type === "relic" ? (
          <div
            className="tooltip indicator before:z-50"
            data-tip={formatGameEntityName(tile.relic as string)}
          >
            <img
              src={relicImages[tile.relic as keyof typeof relicImages]}
              className="w-[34px]"
            />
          </div>
        ) : (
          <div
            className="tooltip indicator before:z-50"
            data-tip={formatGameEntityName(tile.tile_type as string)}
          >
            <img src={tileImages[tile.tile_type]} className="w-[34px]" />
          </div>
        )}
      </div>
      {tile.heroes.length ? (
        <>
          <div className="divider px-4">
            {tile.heroes.length > 8 ? "Heroes Excluded" : "Heroes"}
          </div>
          <div className="flex flex-wrap gap-2 gap-y-3 justify-center">
            {tile.heroes.length > 8
              ? allHeroes
                  .filter((hero) => !tile.heroes.includes(hero))
                  .map((hero) => (
                    <TowerDisplay
                      name={hero}
                      image={heroImages[hero]}
                      key={hero}
                    />
                  ))
              : tile.heroes.map((hero) => (
                  <TowerDisplay
                    name={hero}
                    image={heroImages[hero]}
                    key={hero}
                  />
                ))}
          </div>
        </>
      ) : null}
      <div className="divider px-4">Towers</div>
      <div className="flex flex-wrap gap-2 gap-y-3 justify-center">
        {tile.towers.map((tower) => (
          <TowerDisplay
            name={tower.tower}
            image={towerImages[tower.tower]}
            indicator={tower.max > 0 ? tower.max : "∞"}
            key={tower.tower}
          />
        ))}
      </div>
    </div>
  );
};

export default TileDisplay;
