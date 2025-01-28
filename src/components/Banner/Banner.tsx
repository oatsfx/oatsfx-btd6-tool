import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="gap-2 bg-primary/10 items-center text-center p-1 w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
      {/* <Link
        to=""
        target="_blank"
        className="text-black shadow-sm underline hover:text-white"
      >
        Use Creator Code: oatsfx
      </Link> */}
      <p className="text-black shadow-sm select-none">
        Use BTD6 Creator Code: <span className="font-semibold">oatsfx</span>
      </p>
    </div>
  );
};

export default Banner;
