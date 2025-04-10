import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="gap-2 bg-primary/10 items-center text-center p-1 w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
      <Link
        to="https://btd6store.ninjakiwi.com/?code=oatsfx"
        target="_blank"
        className="text-black shadow-sm underline hover:text-white"
      >
        Use Creator Code: <span className="font-bold">oatsfx</span>
      </Link>
    </div>
  );
};

export default Banner;
