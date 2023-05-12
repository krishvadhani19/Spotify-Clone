import LeftArrow from "../../Icons/Regular/LeftArrow";
import RighArrow from "../../Icons/Regular/RightArrow";
import BoldUserIcon from "../../Icons/Bold/User";
import LightSearchIcon from "../../Icons/Light/Search";
import LightCrossIcon from "../../Icons/Light/Cross";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

import { useState } from "react";

const Controls = (props) => {
  const [searchText, setSearchText] = useState("");
  const onChange = (event) => {
    setSearchText(event.target.value);
  };
  const clearText = () => {
    setSearchText("");
  };

  tippy("#backward", {
    content: "Go Backward",
    animation: "fade",
    placement: "top",
  });
  tippy("#forward", {
    content: "Go Forward",
    animation: "prespective-extreme",
    placement: "top",
  });

  return (
    <div className="flex justify-between text-white">
      <div className="flex space-x-2">
        {/*  */}
        <div className="flex space-x-2 h-10 my-auto">
          <div
            className="bg-dark-400 p-1 rounded-full cursor-pointer"
            id="backward"
          >
            <LeftArrow color="#ffffff" size="30" />
          </div>

          <div
            className="bg-dark-400 p-1 rounded-full cursor-pointer"
            id="forward"
          >
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
        <div className="my-auto bg-dark-200 rounded-full p-2 cursor-pointer">
          <BoldUserIcon color="#ffffff" size="22" />
        </div>
      </div>
    </div>
  );
};

export default Controls;
