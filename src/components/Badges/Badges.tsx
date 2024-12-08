import badges from "configs/badges.config";
import verifiedUsers from "configs/verifiedUsers.config";
import { LeaderboardEntry } from "types/leaderboards";

const Badges = ({ name, profileUrl }: { name: string; profileUrl: string }) => {
  const matchedUser = verifiedUsers.find(
    (x) => x.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="flex gap-1">
      {badges.some((x) => x.profileUrl === profileUrl) ? (
        badges
          .filter((x) => x.profileUrl === profileUrl)
          .map((badge) => (
            <div
              className="badge badge-neutral tooltip bg-opacity-50 badge-sm -mt-[0.3rem] pb-0.5 hover:text-accent"
              data-tip={badge.badgeTip}
              key={badge.badgeName}
            >
              <p className="pointer-events-none">{badge.badgeName}</p>
            </div>
          ))
      ) : (
        <></>
      )}

      {matchedUser ? (
        <div
          className="badge badge-neutral tooltip bg-opacity-50 badge-sm -mt-[0.3rem] pb-0.5 hover:text-accent"
          data-tip={`This is ${
            matchedUser.profileUrl !== profileUrl ? "not" : ""
          } the real ${matchedUser.name}.`}
          key={"verify"}
        >
          <p className="pointer-events-none">
            {matchedUser.profileUrl !== profileUrl
              ? "Impersonation"
              : "Verified"}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Badges;
