import { useLeaderboard } from "hooks/useLeaderboard";
import { useEffect, useState } from "react";
import leastCashImage from "images/misc/least_cash_s.webp";
import leastTiersImage from "images/misc/least_tiers_s.webp";
import ctPointsImage from "images/ct/ct_points_s.webp";
import {
  LeaderboardEntry,
  ProfileData,
  RaceMedal,
  RaceMedals,
} from "types/leaderboards";
import {
  appendOrdinalSuffix,
  convertMsToTimeFormat,
  formatToUpperCase,
  placeToBossEliteMedal,
  placeToBossNormalMedal,
  placeToCtPlayerMedal,
  placeToCtTeamMedal,
  placeToRaceMedal,
  timeAgo,
} from "util/converters";
import { raceMedalImages, raceMedalReward } from "util/formatters";
import { BossMode, Event, EventType } from "types/events";

const LeaderboardCard = ({
  profileData,
  entry,
  index,
  event,
  eventType,
  delta,
  bossMode,
}: {
  profileData: ProfileData;
  entry: LeaderboardEntry;
  index: number;
  event: Event;
  eventType: EventType;
  delta: number;
  bossMode: BossMode;
}) => {
  const handleMainScore = () => {
    let scoreString = "";
    let image = "";

    switch (eventType) {
      case "Race":
        scoreString = convertMsToTimeFormat(entry.score);
        break;
      case "Boss":
      case "Boss2":
      case "Boss3":
      case "Boss4":
        switch (entry.scoreParts[0].name) {
          case "Game Time":
            scoreString = convertMsToTimeFormat(entry.score);
            break;
          case "Cash Spent":
            image = leastCashImage;
            scoreString = entry.score.toLocaleString();
            break;
          case "Tiers":
            image = leastTiersImage;
            scoreString = entry.score.toLocaleString();
            break;
          default:
            scoreString = entry.score.toLocaleString();
            break;
        }
        break;
      case "CtPlayer":
      case "CtTeam":
        image = ctPointsImage;
        scoreString = entry.score.toLocaleString();
        break;
    }
    return (
      <div className="text-right text-lg flex gap-1 justify-end items-center font-semibold text-nowrap -mt-1 ">
        <img src={image} className="w-[18px]" />
        <span className="drop-shadow-[0_2px_0px_rgba(0,0,0,0.4)]">
          {scoreString}
        </span>
        {handleDelta()}
      </div>
    );
  };

  const handleSecondaryScore = () => {
    let scoreString = "";
    let dataTip = "";
    if (!entry.scoreParts) return;

    switch (event.scoringType) {
      case undefined:
      case "GameTime":
        scoreString = timeAgo(
          event.start +
            entry.scoreParts.filter(
              (part) => part.name === "Time after event start"
            )[0].score
        );
        dataTip = new Date(
          event.start +
            entry.scoreParts.filter(
              (part) => part.name === "Time after event start"
            )[0].score
        ).toLocaleString();
        break;
      default:
        scoreString = convertMsToTimeFormat(
          entry.scoreParts.filter((part) => part.name === "Game Time")[0].score
        );
        dataTip = "Game Time";
        break;
    }

    return (
      <span
        className="text-right text-sm tooltip font-normal text-nowrap -mt-1 drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)]"
        data-tip={dataTip}
      >
        {scoreString}
      </span>
    );
  };

  const handleDelta = () => {
    let scoreString = "";
    let isLowerBad = false;

    switch (eventType) {
      case "Race":
        scoreString = convertMsToTimeFormat(delta);
        break;
      case "Boss":
      case "Boss2":
      case "Boss3":
      case "Boss4":
        switch (event.scoringType) {
          case "GameTime":
            scoreString = convertMsToTimeFormat(delta);
            break;
          case "LeastCash":
            scoreString = delta.toLocaleString();
            break;
          case "LeastTiers":
            scoreString = delta.toLocaleString();
            break;
          default:
            scoreString = delta.toLocaleString();
            break;
        }
        break;
      case "CtPlayer":
      case "CtTeam":
        isLowerBad = true;
        scoreString =
          delta !== 0 ? (delta * -1).toLocaleString() : delta.toLocaleString();
        break;
    }
    return (
      <p
        className={
          "font-semibold text-sm drop-shadow-[0_1px_0px_rgba(0,0,0,0.4)]" +
          ((isLowerBad ? delta >= 0 : delta <= 0)
            ? " text-success"
            : " text-error")
        }
      >
        {delta <= 0 ? "-" : "+"}
        {scoreString}
      </p>
    );
  };

  const handleMedal = () => {
    let medal = "";
    switch (eventType) {
      case "Race":
        medal = placeToRaceMedal(index + 1, event.totalScores as number);
        break;
      case "Boss":
      case "Boss2":
      case "Boss3":
      case "Boss4":
        if (bossMode === "Standard") {
          medal = placeToBossNormalMedal(
            index + 1,
            event.totalScores_standard as number
          );
        } else {
          medal = placeToBossEliteMedal(
            index + 1,
            event.totalScores_standard as number
          );
        }
        break;
      case "CtTeam":
        medal = placeToCtTeamMedal(index + 1, event.totalScores_team as number);
        break;
      case "CtPlayer":
        medal = placeToCtPlayerMedal(
          index + 1,
          event.totalScores_player as number
        );
        break;
    }
    return <img src={medal} className="w-[26px]" />;
  };
  return (
    <div className="flex flex-col gap-1 w-2/3 items-end">
      <div
        key={entry.profile}
        className="indicator w-full flex outline outline-2 outline-white/30 hover:cursor-pointer justify-between px-6 py-1 bg-center bg-cover"
        style={{
          backgroundImage:
            profileData !== undefined
              ? `linear-gradient(to bottom, rgba(17, 17, 23, 0.4), rgba(17, 17, 23, 1)), url(${profileData.bannerURL})`
              : "linear-gradient(to bottom, rgba(17, 17, 23, 0.2), rgba(17, 17, 23, 0.6)), url(https://static-api.nkstatic.com/appdocs/4/assets/opendata/bbd8e1412f656b91db7df7aabbc1598b_TeamsBannerDeafult.png)",
        }}
        onClick={() => {
          console.log(`clicked ${entry.profile}`);
        }}
      >
        <div className="flex justify-start w-1/2">
          <div className="flex items-center gap-2 w-20">
            {handleMedal()}
            <p className="font-medium">{appendOrdinalSuffix(index + 1)}</p>
          </div>

          <div className="flex items-center gap-2 w-1/4">
            <img
              src={
                profileData !== undefined
                  ? profileData.avatarURL
                  : "https://static-api.nkstatic.com/appdocs/4/assets/opendata/db32af61df5646951a18c60fe0013a31_ProfileAvatar01.png"
              }
              className="w-[38px]"
            />

            <div className="flex flex-col flex-nowrap">
              <p className="font-semibold text-lg text-nowrap">
                {entry.displayName}
              </p>
              {entry.profile ===
              "https://data.ninjakiwi.com/btd6/users/9fbf128f8cc5fcf61c14894f5a25e5259a521fbf9743d96e" ? (
                <div
                  className="badge badge-neutral tooltip bg-opacity-50 badge-sm -mt-[0.3rem] pb-0.5"
                  data-tip={`Developed this site`}
                >
                  Developer
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between w-1/2 gap-[1.2rem]">
          {profileData !== undefined ? (
            <div className="flex gap-3 items-center">
              {Object.keys(raceMedalImages)
                .filter(
                  (medal) =>
                    profileData._medalsRace[
                      formatToUpperCase(medal) as keyof RaceMedals
                    ]! > 0
                )
                .slice(0, 5)
                .map((medal) =>
                  profileData._medalsRace[
                    formatToUpperCase(medal) as keyof RaceMedals
                  ]! > 0 ? (
                    <div
                      className="flex flex-col items-center tooltip indicator hidden lg:block"
                      data-tip={`${raceMedalReward[medal as RaceMedal]}`}
                    >
                      <img
                        src={
                          raceMedalImages[medal as keyof typeof raceMedalImages]
                        }
                        className="h-[28px]"
                      />
                      <div className="indicator-item indicator-bottom indicator-center badge bg-opacity-90">
                        {profileData._medalsRace[
                          formatToUpperCase(medal) as keyof RaceMedals
                        ] ?? 0}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )
                )}
            </div>
          ) : (
            <div className="flex h-full gap-3 items-center">
              {/* <p className="text-xs">If I had medals, they'd be here</p> */}
            </div>
          )}

          <div className="flex flex-col h-full w-1/4 justify-center items-end">
            {handleMainScore()}
            {handleSecondaryScore()}
          </div>
        </div>
      </div>
      {entry.otherPlayers?.map((player) => (
        <div
          key={player.profile}
          className="indicator w-full flex outline outline-1 outline-white/30 hover:cursor-pointer justify-between px-6 py-1 bg-center bg-cover"
          style={{
            backgroundImage:
              profileData !== undefined
                ? `linear-gradient(to bottom, rgba(17, 17, 23, 0.4), rgba(17, 17, 23, 1)), url(${profileData.bannerURL})`
                : "linear-gradient(to bottom, rgba(17, 17, 23, 0.2), rgba(17, 17, 23, 0.6)), url(https://static-api.nkstatic.com/appdocs/4/assets/opendata/bbd8e1412f656b91db7df7aabbc1598b_TeamsBannerDeafult.png)",
          }}
          onClick={() => {
            console.log(`clicked ${player.profile}`);
          }}
        >
          <div className="flex justify-start w-1/2">
            <div className="flex items-center gap-2 w-20"></div>

            <div className="flex items-center gap-2 w-1/4">
              <img
                src={
                  profileData !== undefined
                    ? profileData.avatarURL
                    : "https://static-api.nkstatic.com/appdocs/4/assets/opendata/db32af61df5646951a18c60fe0013a31_ProfileAvatar01.png"
                }
                className="w-[38px]"
              />

              <div className="flex flex-col flex-nowrap">
                <p className="font-semibold text-lg text-nowrap">
                  {player.displayName}
                </p>
                {player.profile ===
                "https://data.ninjakiwi.com/btd6/users/9fbf128f8cc5fcf61c14894f5a25e5259a521fbf9743d96e" ? (
                  <div
                    className="badge badge-neutral tooltip bg-opacity-50 badge-sm -mt-[0.3rem] pb-0.5"
                    data-tip={`Developed this site`}
                  >
                    Developer
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-start w-1/2 gap-[1.2rem]">
            {profileData !== undefined ? (
              <div className="flex gap-3 items-center">
                {Object.keys(raceMedalImages)
                  .filter(
                    (medal) =>
                      profileData._medalsRace[
                        formatToUpperCase(medal) as keyof RaceMedals
                      ]! > 0
                  )
                  .slice(0, 5)
                  .map((medal) =>
                    profileData._medalsRace[
                      formatToUpperCase(medal) as keyof RaceMedals
                    ]! > 0 ? (
                      <div
                        className="flex flex-col items-center tooltip indicator hidden lg:block"
                        data-tip={`${raceMedalReward[medal as RaceMedal]}`}
                      >
                        <img
                          src={
                            raceMedalImages[
                              medal as keyof typeof raceMedalImages
                            ]
                          }
                          className="h-[28px]"
                        />
                        <div className="indicator-item indicator-bottom indicator-center badge bg-opacity-90">
                          {profileData._medalsRace[
                            formatToUpperCase(medal) as keyof RaceMedals
                          ] ?? 0}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )
                  )}
              </div>
            ) : (
              <div className="flex h-full gap-3 items-center">
                {/* <p className="text-xs">If I had medals, they'd be here</p> */}
              </div>
            )}
            <div className="flex flex-col h-full w-16 justify-center items-end"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardCard;
