import loading from "images/misc/loading.gif";

const Loading = ({ size }: { size?: number }) => {
  return <img src={loading} alt="Loading" style={{ width: size }} />;
};

export default Loading;
