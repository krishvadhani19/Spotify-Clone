import LeftArrow from "../../Icons/Regular/LeftArrow";
import RighArrow from "../../Icons/Regular/RightArrow";
import BoldUserIcon from "../../Icons/Bold/User";
import LightSearchIcon from "../../Icons/Light/Search";
import LightCrossIcon from "../../Icons/Light/Cross";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { useState } from "react";

const Controls = (props) => {
  const [searchText, setSearchText] = useState("");
  const onChange = (event) => {
    setSearchText(event.target.value);
  };
  const clearText = () => {
    setSearchText("");
  };

  return (
    <div className="flex justify-between text-white">
      <div className="flex space-x-2">
        {/*  */}
        <div className="flex space-x-2 h-10 my-auto">
          <div
            className="bg-dark-400 p-1 rounded-full cursor-pointer"
            data-tooltip-id="backward"
            data-tooltip-content="Go Backward"
            data-tooltip-delay-hide={150}
            data-tooltip-delay-show={150}
            place="top"
          >
            <Tooltip id="backward" className="tooltip" />
            <LeftArrow color="#ffffff" size="30" />
          </div>

          <div
            className="bg-dark-400 p-1 rounded-full cursor-pointer"
            data-tooltip-id="forward"
            data-tooltip-content="Go Forward"
            data-tooltip-delay-hide={150}
            data-tooltip-delay-show={150}
            place="top"
          >
            <Tooltip id="forward" className="tooltip" />
            <RighArrow color="#ffffff" size="30" />
          </div>
        </div>

        {props.searchVerify ? (
          <div className="w-96 flex space-x-2 bg-dark-400 px-2 py-4 rounded-full">
            {/* icon */}
            <div className="my-auto">
              <LightSearchIcon color="#cbd5e1" size="23" />
            </div>

            <div className="w-[90%] my-auto">
              <input
                type="text"
                className="bg-dark-400 focus:outline-none w-full"
                placeholder="What do you want to listen to?"
                onChange={onChange}
                value={searchText}
              />
            </div>

            {searchText.length !== 0 ? (
              <div className="my-auto cursor-pointer" onClick={clearText}>
                <LightCrossIcon color="#ffffff" size="21" />
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>

      {/*  */}
      <div className="flex space-x-2">
        {props.searchVerify ? (
          <></>
        ) : (
          <div className="bg-white my-auto font-medium text-dark-200 px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-all delay-100 ease-in-out duration-0">
            Upgrade
          </div>
        )}

        {/*  */}
        <div
          className="my-auto bg-dark-200 rounded-full p-2 cursor-pointer"
          data-tooltip-id="user"
          data-tooltip-content="Krish"
          data-tooltip-delay-hide={150}
          data-tooltip-delay-show={150}
          place="top"
        >
          <Tooltip id="user" className="tooltip" />
          <BoldUserIcon color="#ffffff" size="22" />
        </div>
      </div>
    </div>
  );
};

export default Controls;
