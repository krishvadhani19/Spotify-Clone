import BoldHeartIcon from "../Icons/Bold/Heart";
import LightShuffleIcon from "../Icons/Light/Shuffle";
import BoldNextIcon from "../Icons/Bold/Next";
import BoldPreviousIcon from "../Icons/Bold/Previous";
import BoldPlayIcon from "../Icons/Bold/Play";
import RepeatIcon from "../Icons/Regular/Repeat";
import RepeatOneIcon from "../Icons/Regular/RepeatOne";
import LightDeviceIcon from "../Icons/Light/Device";
import LightQueueIcon from "../Icons/Light/Queue";

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
      <div className="w-[35%] flex flex-col mt-2">
        {/*  */}
        <div className=" mx-auto flex space-x-4">
          {/* shuffle */}
          <div className="my-auto">
            <LightShuffleIcon color="#cbd5e1" size="23" />
          </div>

          {/* previous */}
          <div className="my-auto">
            <BoldPreviousIcon color="#cbd5e1" size="40" />
          </div>

          {/* play&pause */}
          <div className="my-auto">
            <BoldPlayIcon color="#ffffff" size="43" />
          </div>

          {/* next */}
          <div className="my-auto">
            <BoldNextIcon color="#cbd5e1" size="40" />
          </div>

          {/* repeat */}
          <div className="my-auto">
            <RepeatIcon color="#cbd5e1" size="23" />
          </div>
        </div>

        {/*  */}
        <div className="my-auto flex space-x-2">
          {/* t1 */}
          <div className="text-primary-gray text-xs my-auto font-medium">
            1:56
          </div>

          {/* music */}
          <div className="w-[100%] h-1 rounded-md bg-white my-auto"></div>

          {/* t2 */}
          <div className="text-primary-gray text-xs my-auto font-medium">
            2:07
          </div>
        </div>
      </div>

      {/* volume and other controls */}
      <div className="flex space-x-2">
        {/*  */}
        <div className="my-auto">
          <LightQueueIcon color="#22c55e" size="25" />
        </div>

        {/*  */}
        <div className="my-auto">
          <LightDeviceIcon color="#22c55e" size="25" />
        </div>

        {/*  */}
        <div className="w-36 h-1 rounded-md bg-white my-auto"></div>
      </div>
    </div>
  );
};

export default Player;
