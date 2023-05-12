import BoldPlayIcon from "../../Icons/Bold/Play";
import { useState } from "react";

const TopMixCard = (props) => {
  const [playButtonDisplay, setPlayButtonDisplay] = useState(false);

  const handleMouseOver = () => {
    setPlayButtonDisplay(true);
  };

  const handleMouseOut = () => {
    setPlayButtonDisplay(false);
  };
  return (
    <div
      className="flex flex-col space-y-4 rounded-md bg-dark-300 hover:bg-dark-400 transition-all delay-100 duration-300 ease-in-out p-4 cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* img */}
      <div className="relative">
        <img
          src={props.data.imageURL}
          alt=""
          className="rounded-md h-48 w-full shadow-lg shadow-black/50"
        />

        {playButtonDisplay ? (
          <div className="shadow-lg shadow-black/50 absolute right-0 bottom-0 bg-dark-100 rounded-full -translate-y-2">
            <BoldPlayIcon size="55" color="#22c55e" />
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* heading */}
      <div className="text-lg text-white font-semibold">
        {props.data.heading}
      </div>

      {/* creators */}
      <div className="text-primary-gray font-medium text-base">
        <div className="inline hover:underline">{props.data.singers[0]}, </div>
        <div className="inline hover:underline">{props.data.singers[1]}, </div>
        <div className="inline hover:underline">{props.data.singers[2]}</div>
      </div>
    </div>
  );
};

export default TopMixCard;
