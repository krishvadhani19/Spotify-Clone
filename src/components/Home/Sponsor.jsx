import React from "react";
import HorizontalDotsIcon from "../../Icons/Regular/DotsHorizontal";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Sponsor = () => {
  return (
    <div className="flex space-x-8 w-full h-72 rounded-md bg-gradient-to-tr from-dark-100 via-dark-100 to-cyan-800 bg-dark-100 p-4">
      {/* image */}
      <div className="">
        <img
          src="https://c.saavncdn.com/artists/Darshan_Raval_005_20201029161434_500x500.jpg"
          alt=""
          className="h-64 w-64 rounded-md z-0"
        />
      </div>

      {/* text */}
      <div className="w-full flex flex-col space-y-3 text-white">
        {/*  */}
        <div className="w-full flex justify-between">
          <div className="text-base font-medium cursor-default">SONG</div>

          <div className="text-white text-sm font-bold bg-dark-100/30 px-2 py-1 rounded-md">
            Sponsored
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          {/* song name */}
          <div className="font-bold text-8xl hover:underline cursor-pointer">
            Tu Milega
          </div>

          {/* artist */}
          <div className="text-lg font-medium cursor-pointer">
            Darshan Raval
          </div>

          {/* tagline */}
          <div className="text-lg font-medium cursor-default">
            Darshan Raval's latest trending love song 'Tu Milega' Listen now!
          </div>
        </div>

        {/* buttons */}
        <div className="flex space-x-6">
          <div className="flex justify-between w-56">
            {/* Play */}
            <div className="text-lg px-8 py-2 rounded-full bg-green-500 font-semibold hover:font-bold hover:scale-105 text-dark-100 cursor-pointer">
              Play
            </div>

            {/* Save */}
            <div className="text-lg px-8 py-2 rounded-full font-semibold hover:font-bold hover:scale-105 text-white border-thin border-primary-gray hover:border-white cursor-pointer">
              Save
            </div>
          </div>

          {/*  */}
          <div
            className="my-auto"
            data-tooltip-id="More"
            data-tooltip-content="More"
            data-tooltip-delay-hide={150}
            data-tooltip-delay-show={150}
            place="top"
          >
            <Tooltip id="More" className="tooltip" />
            <HorizontalDotsIcon size="35" color="#cbd5e1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
