import LeftArrow from "../../Icons/Regular/LeftArrow";
import RighArrow from "../../Icons/Regular/RightArrow";
import BoldUserIcon from "../../Icons/Bold/User";
import LightSearchIcon from "../../Icons/Light/Search";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const Controls = (props) => {
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
        <div className="flex space-x-2">
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
          <div className="flex bg-dark-400 p-1 rounded-full">
            {/* icon */}
            <div className="my-auto">
              <LightSearchIcon color="#ffffff" size="30" />
            </div>

            <div className="my-auto">
              <input type="text" className="bg-dark-400" />
            </div>
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
