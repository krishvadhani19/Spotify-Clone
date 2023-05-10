import BoldHeartIcon from "../Icons/Bold/Heart";
import LightShuffleIcon from "../Icons/Light/Shuffle";

const Player = () => {
  return (
    <div className="flex justify-between h-full my-auto">
      {/* image and title */}
      <div className="flex space-x-6 my-auto">
        {/* image */}
        <div className="">
          <img
            src="https://i1.sndcdn.com/artworks-000146862841-5i4sde-t500x500.jpg"
            alt=""
            className="w-16 h-16 rounded-md"
          />
        </div>

        {/* heading */}
        <div className="flex flex-col my-auto">
          {/* Music Name */}
          <div className="text-white font-medium">Tune Kaha</div>

          {/*  */}
          <div className="text-xs text-primary-gray">Prateek Kuhad</div>
        </div>

        {/* like icon */}
        <div className="my-auto">
          <BoldHeartIcon color="#22c55e" size="25" />
        </div>
      </div>

      {/* controls */}
      <div className="my-auto">
        {/*  */}
        <div>
          {/* shuffle */}
          <div>
            <LightShuffleIcon color="#22c55e" size="25" />
          </div>

          {/* previous */}

          {/* play&pause */}

          {/* next */}

          {/* repeat */}
        </div>

        {/*  */}
        <div></div>
      </div>

      {/* volume and other controls */}
      <div></div>
    </div>
  );
};

export default Player;
