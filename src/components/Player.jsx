import BoldHeartIcon from "../Icons/Bold/Heart";
import LightShuffleIcon from "../Icons/Light/Shuffle";
import BoldNextIcon from "../Icons/Bold/Next";
import BoldPreviousIcon from "../Icons/Bold/Previous";
import BoldPlayIcon from "../Icons/Bold/Play";
import RepeatIcon from "../Icons/Regular/Repeat";
import RepeatOneIcon from "../Icons/Regular/RepeatOne";
import LightDeviceIcon from "../Icons/Light/Device";
import LightQueueIcon from "../Icons/Light/Queue";
import LightMicIcon from "../Icons/Light/Mic";
import LightSoundIcon from "../Icons/Light/Sound";
import LightHeartIcon from "../Icons/Light/Heart";
import BoldPauseIcon from "../Icons/Bold/Pause";
import LightSoundMuteIcon from "../Icons/Light/SoundMute";

import { useState } from "react";

const Player = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState("repeat");

  const handleRepeat = () => {
    if (repeat === "repeat") {
      setRepeat("repeatOne");
    } else if (repeat === "repeatOne") {
      setRepeat("off");
    } else if (repeat === "off") {
      setRepeat("repeat");
    }
  };

  const handleShuffle = () => {
    if (shuffle) {
      setShuffle(false);
    } else {
      setShuffle(true);
    }
  };

  const handleMute = () => {
    if (mute) {
      setMute(false);
    } else {
      setMute(true);
    }
  };
  const hanldleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  const handlePlay = () => {
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };

  return (
    <div className="flex justify-between h-full my-auto">
      {/* image and title */}
      <div className="w-[25%] flex space-x-6 justify-start my-auto">
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

        <div className="my-auto" onClick={hanldleLike}>
          {like ? (
            <BoldHeartIcon color="#22c55e" size="23" />
          ) : (
            <LightHeartIcon color="#22c55e" size="23" />
          )}
        </div>
      </div>

      {/* controls */}
      <div className="w-[35%] flex flex-col mt-2 justify-center">
        {/*  */}
        <div className=" mx-auto flex space-x-4">
          {/* shuffle */}
          <div className="my-auto" onClick={handleShuffle}>
            {shuffle ? (
              <LightShuffleIcon color="#22c55e" size="23" />
            ) : (
              <LightShuffleIcon color="#cbd5e1" size="23" />
            )}
          </div>

          {/* previous */}
          <div className="my-auto">
            <BoldPreviousIcon color="#cbd5e1" size="40" />
          </div>

          {/* play&pause */}
          <div className="mx-auto my-auto hover:scale-105" onClick={handlePlay}>
            {play ? (
              <BoldPauseIcon color="#ffffff" size="43" />
            ) : (
              <BoldPlayIcon color="#ffffff" size="43" />
            )}
          </div>

          {/* next */}
          <div className="my-auto">
            <BoldNextIcon color="#cbd5e1" size="40" />
          </div>

          {/* repeat */}
          <div className="my-auto" onClick={handleRepeat}>
            {repeat === "repeat" ? (
              <RepeatIcon color="#22c55e" size="23" />
            ) : (
              <></>
            )}

            {repeat === "repeatOne" ? (
              <RepeatOneIcon color="#22c55e" size="23" />
            ) : (
              <></>
            )}

            {repeat === "off" ? (
              <RepeatIcon color="#cbd5e1" size="23" />
            ) : (
              <></>
            )}
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
      <div className="w-[25%] flex space-x-4 justify-end">
        {/*  */}
        <div className="my-auto cursor-pointer">
          <LightMicIcon color="#cbd5e1" size="21" />
        </div>

        {/*  */}
        <div className="my-auto cursor-pointer">
          <LightQueueIcon color="#cbd5e1" size="21" />
        </div>

        {/*  */}
        <div className="my-auto cursor-pointer">
          <LightDeviceIcon color="#cbd5e1" size="21" />
        </div>

        {/*  */}
        <div className="my-auto cursor-pointer" onClick={handleMute}>
          {mute ? (
            <LightSoundMuteIcon color="#cbd5e1" size="21" />
          ) : (
            <LightSoundIcon color="#cbd5e1" size="21" />
          )}
        </div>

        {/*  */}
        <div className="w-36 h-1 rounded-md bg-white my-auto"></div>
      </div>
    </div>
  );
};

export default Player;
