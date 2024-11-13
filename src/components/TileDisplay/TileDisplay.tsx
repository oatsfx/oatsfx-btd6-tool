import {
  towerImages,
  mapImages,
  relicImages,
  tileImages,
  gameTypeImages,
} from "util/formatters";
import { Tile } from "types/ct";

import noSellingImage from "images/modifiers/selling_disabled.webp";
import noMkImage from "images/modifiers/monkey_knowledge_disabled.webp";
import { TowerDisplay } from "components/TowerDisplay";
import { convertGameTypeToString, formatGameEntityName } from "util/converters";

const TileDisplay = ({ tileCode, tile }: { tileCode: string; tile: Tile }) => {
  return (
    <div
      className={
        "indicator w-full flex flex-col outline outline-1 outline-white/50 rounded-xl items-center my-8 py-4 pb-6 bg-no-repeat bg-top bg-cover bg-clip-border " +
        mapImages[tile.GameData.selectedMap as keyof typeof mapImages]
      }
    >
      <div className="indicator-item indicator-top indicator-center badge badge-ghost font-semibold gap-1 px-5 py-3 outline outline-1 outline-white/25">
        <img
          src={
            gameTypeImages[
              tile.GameData.subGameType as keyof typeof gameTypeImages
            ]
          }
          className="w-[16px]"
        />
        {formatGameEntityName(
          convertGameTypeToString(tile.GameData.subGameType)
        )}
      </div>
      <p className="font-bold text-2xl text-center">{tileCode}</p>
      <p className="font-medium text-md text-center">
        {formatGameEntityName(tile.GameData.selectedMap as string)} //{" "}
        {formatGameEntityName(tile.GameData.selectedDifficulty as string)}
      </p>
      <p className="text-md text-center">
        {`$${tile.GameData.dcModel.startRules.cash?.toLocaleString()} // `}{" "}
        {`Round ${tile.GameData.dcModel.startRules.round}-${tile.GameData.dcModel.startRules.endRound}`}
      </p>
      <div className="flex flex-wrap gap-2 pt-2 justify-center items-center">
        {tile.GameData.dcModel.disableSelling ? (
          <div
            className="tooltip indicator before:z-50"
            data-tip={"Selling Disabled"}
          >
            <img src={noSellingImage} className="w-[34px]" />
          </div>
        ) : (
          <></>
        )}
        {tile.GameData.dcModel.disableMK ? (
          <div
            className="tooltip indicator before:z-50"
            data-tip={"Monkey Knowledge Disabled"}
          >
            <img src={noMkImage} className="w-[34px]" />
          </div>
        ) : (
          <></>
        )}
        {tile.TileType === "Relic" ? (
          <div
            className="tooltip indicator before:z-50"
            data-tip={formatGameEntityName(tile.RelicType as string)}
          >
            <img
              src={relicImages[tile.RelicType as keyof typeof relicImages]}
              className="w-[34px]"
            />
          </div>
        ) : (
          <div
            className="tooltip indicator before:z-50"
            data-tip={formatGameEntityName(tile.TileType as string)}
          >
            <img src={tileImages[tile.TileType]} className="w-[34px]" />
          </div>
        )}
      </div>
      {tile.GameData.dcModel.towers._items.filter(
        (x) => x.isHero && x.max !== 0
      ).length ? (
        <>
          <div className="divider px-4">
            {tile.GameData.dcModel.towers._items.filter(
              (x) => x.isHero && x.max !== 0
            ).length >
            tile.GameData.dcModel.towers._items.filter((x) => x.isHero).length /
              2
              ? "Heroes Excluded"
              : "Heroes"}
          </div>
          <div className="flex flex-wrap gap-2 gap-y-3 justify-center">
            {tile.GameData.dcModel.towers._items.filter(
              (x) => x.isHero && x.max !== 0
            ).length >
            tile.GameData.dcModel.towers._items.filter((x) => x.isHero).length /
              2
              ? tile.GameData.dcModel.towers._items
                  .filter(
                    (x) =>
                      x.isHero && x.max === 0 && x.tower !== "ChosenPrimaryHero"
                  )
                  .map((hero) => (
                    <TowerDisplay
                      name={hero.tower}
                      image={towerImages[hero.tower]}
                      key={hero.tower}
                    />
                  ))
              : tile.GameData.dcModel.towers._items
                  .filter((x) => x.isHero && x.max !== 0)
                  .map((hero) => (
                    <TowerDisplay
                      name={hero.tower}
                      image={towerImages[hero.tower]}
                      key={hero.tower}
                    />
                  ))}
          </div>
        </>
      ) : null}
      <div className="divider px-4">Towers</div>
      <div className="flex flex-wrap gap-2 gap-y-3 justify-center">
        {tile.GameData.dcModel.towers._items
          .filter((x) => !x.isHero && x.max !== 0)
          .map((tower) => (
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
