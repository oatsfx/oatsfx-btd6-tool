import rankImage from "images/misc/rank.webp";
import vetRankImage from "images/misc/rank_veteran.webp";
import {
  PlayerProfileData,
  PlayerMedal,
  PlayerEventMedals,
  PlayerCtMedals,
  GuildProfileData,
} from "types/leaderboards";
import { formatToUpperCase } from "util/converters";
import {
  bossEliteMedalImages,
  bossNormalMedalImages,
  ctPlayerMedalImages,
  raceMedalImages,
  raceMedalReward,
} from "util/formatters";
import { Loading } from "components/Loading";
import { Badges } from "components/Badges";
import { useProfileData } from "hooks/useProfileData";

const ProfileModal = ({
  profileUrl,
  fetched,
  profileData,
  profileLoading,
  isPlayer,
}: {
  profileUrl: string;
  fetched: boolean;
  profileData: PlayerProfileData | GuildProfileData;
  profileLoading: boolean;
  isPlayer: boolean;
}) => {
  const guildData = profileData as GuildProfileData;
  const playerData = profileData as PlayerProfileData;

  const {
    data: ownerData,
    loading: ownerLoading,
    fetchData,
    fetched: ownerFetched,
  } = useProfileData(guildData.owner);

  const displayMedals = () => {
    if (isPlayer) {
      return (
        <div className="indicator items-center w-full px-12 py-4 gap-2 flex-wrap">
          {Object.keys(raceMedalImages)
            .filter(
              (medal) =>
                playerData._medalsRace[
                  formatToUpperCase(medal) as keyof PlayerEventMedals
                ]! > 0
            )
            .map((medal) => (
              <div
                className="flex flex-col items-center tooltip indicator hidden lg:block"
                data-tip={`${raceMedalReward[medal as PlayerMedal]}`}
              >
                <img
                  src={raceMedalImages[medal as keyof typeof raceMedalImages]}
                  className="h-[28px]"
                />
                <div className="indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90">
                  {playerData._medalsRace[
                    formatToUpperCase(medal) as keyof PlayerEventMedals
                  ] ?? 0}
                </div>
              </div>
            ))}
          {Object.keys(bossNormalMedalImages)
            .filter(
              (medal) =>
                playerData._medalsBoss[
                  formatToUpperCase(medal) as keyof PlayerEventMedals
                ]! > 0
            )
            .map((medal) => (
              <div
                className="flex flex-col items-center tooltip indicator hidden lg:block"
                data-tip={`${raceMedalReward[medal as PlayerMedal]}`}
              >
                <img
                  src={
                    bossNormalMedalImages[medal as keyof typeof raceMedalImages]
                  }
                  className="h-[28px]"
                />
                <div className="indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90">
                  {playerData._medalsBoss[
                    formatToUpperCase(medal) as keyof PlayerEventMedals
                  ] ?? 0}
                </div>
              </div>
            ))}
          {Object.keys(bossEliteMedalImages)
            .filter(
              (medal) =>
                playerData._medalsBossElite[
                  formatToUpperCase(medal) as keyof PlayerEventMedals
                ]! > 0
            )
            .map((medal) => (
              <div
                className="flex flex-col items-center tooltip indicator hidden lg:block"
                data-tip={`${raceMedalReward[medal as PlayerMedal]}`}
              >
                <img
                  src={
                    bossEliteMedalImages[medal as keyof typeof raceMedalImages]
                  }
                  className="h-[28px]"
                />
                <div className="indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90">
                  {playerData._medalsBossElite[
                    formatToUpperCase(medal) as keyof PlayerEventMedals
                  ] ?? 0}
                </div>
              </div>
            ))}
          {Object.keys(ctPlayerMedalImages)
            .filter(
              (medal) =>
                playerData._medalsCTGlobal[
                  formatToUpperCase(medal) as keyof PlayerCtMedals
                ]! > 0
            )
            .map((medal) =>
              playerData._medalsCTGlobal[
                formatToUpperCase(medal) as keyof PlayerCtMedals
              ]! > 0 ? (
                <div
                  className="flex flex-col items-center tooltip indicator hidden lg:block"
                  data-tip={`${raceMedalReward[medal as PlayerMedal]}`}
                >
                  <img
                    src={
                      ctPlayerMedalImages[
                        medal as keyof typeof ctPlayerMedalImages
                      ]
                    }
                    className="h-[28px]"
                  />
                  <div className="indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90">
                    {playerData._medalsCTGlobal[
                      formatToUpperCase(medal) as keyof PlayerCtMedals
                    ] ?? 0}
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
        </div>
      );
    } else {
      // We are displaying a team's information. Now, I wish we could display players, but NK can't do that for us...
      return <i className="text-xs">Nothing to see here... Literally</i>;
    }
  };

  return (
    <dialog id={`${profileUrl}`} className="modal">
      <div
        className="modal-box max-w-3xl bg-top bg-no-repeat bg-contain outline outline-1 outline-white/25"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(17, 17, 23, 0), rgba(17, 17, 23, 0.5)), url(${profileData.bannerURL})`,
        }}
      >
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-opacity-80 btn-circle btn-sm outline outline-1 absolute right-6 top-6 outline-error text-error">
              X
            </button>
          </form>
        </div>
        {fetched && !profileLoading ? (
          <>
            <div className="flex gap-4 items-end pt-8">
              <img
                src={isPlayer ? playerData.avatarURL : guildData.frameURL}
                className="w-[80px] h-[80px] rounded-xs"
              />
              {!isPlayer ? (
                <img
                  src={guildData.iconURL}
                  className="w-[80px] h-[80px] rounded-xs absolute"
                />
              ) : (
                <></>
              )}
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <p className="font-bold font-btd6 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {isPlayer ? playerData.displayName : guildData.name}
                  </p>
                  <Badges
                    name={isPlayer ? playerData.displayName : guildData.name}
                    profileUrl={profileUrl}
                  />
                </div>
                {isPlayer ? (
                  <div className="flex gap-2">
                    <div className="flex gap-2 tooltip" data-tip={"Rank"}>
                      <img
                        src={rankImage}
                        className="h-[32px] drop-shadow-xl"
                      />
                      <p className="absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px] pointer-events-none">
                        {playerData.rank}
                      </p>
                    </div>
                    {playerData.veteranRank !== 0 ? (
                      <div
                        className="flex gap-2 tooltip"
                        data-tip={"Veteran Rank"}
                      >
                        <img
                          src={vetRankImage}
                          className="h-[32px] drop-shadow-xl"
                        />
                        <p className="absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px] pointer-events-none">
                          {playerData.veteranRank}
                        </p>
                      </div>
                    ) : (
                      <div className="flex gap-2"></div>
                    )}
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <img className="h-[32px] drop-shadow-xl" />
                    <p className="absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px]">
                      {guildData.status}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {!isPlayer ? (
              <div className="overflow-x-hidden w-full max-h-56 h-32 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl">
                <p className="font-semibold text-lg">
                  Players: {guildData.numMembers}
                </p>
                <ProfileModal
                  profileUrl={guildData.owner}
                  fetched={ownerFetched}
                  profileData={ownerData}
                  profileLoading={ownerLoading}
                  isPlayer={true}
                />
                <button
                  className="btn"
                  onClick={() => {
                    (
                      document.getElementById(
                        `${guildData.owner}`
                      ) as HTMLFormElement
                    ).showModal();
                    fetchData();
                  }}
                >
                  View Owner
                </button>
              </div>
            ) : (
              <></>
            )}
            <div className="overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl">
              <p className="font-semibold text-lg">Medals</p>

              {displayMedals()}
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <Loading />
          </div>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ProfileModal;
