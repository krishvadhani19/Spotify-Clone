import { useLocation, Link } from "react-router-dom";
import Songs from "./Songs";

// Icons
import BoldHomeIcon from "../../Icons/Bold/Home";
import LightHomeIcon from "../../Icons/Light/Home";
import BoldSearchIcon from "../../Icons/Bold/Search";
import LightSearchIcon from "../../Icons/Light/Search";
import BoldLibraryIcon from "../../Icons/Bold/Library";
import RightArrowIcon from "../../Icons/Regular/RightArrow";
import PlusIcon from "../../Icons/Regular/Plus";
import SmallDownArrowIcon from "../../Icons/Regular/SmallDownArrow";

const Navbar = () => {
  const location = useLocation();

  const categories = [
    "Playlists",
    "Podcasts",
    "Albums",
    "Artists",
    "Downloaded",
  ];

  return (
    <div className="h-screen flex flex-col space-y-2">
      {/* routing area */}
      <div className="bg-dark-200 rounded-md py-3 px-4">
        {/* Home */}
        <Link to="/">
          {location.pathname === "/" ? (
            <div className="active-route">
              <div className="my-auto">
                <BoldHomeIcon color="#ffffff" size="30" />
              </div>

              <div className="primary-text text-white">Home</div>
            </div>
          ) : (
            <div className="inactive-route">
              <div className="my-auto">
                <LightHomeIcon color="#cbd5e1" size="30" />
              </div>

              <div className="primary-text text-primary-gray">Home</div>
            </div>
          )}
        </Link>

        {/* Search */}
        <Link to="/search">
          {location.pathname === "/search" ? (
            <div className="active-route">
              <div className="my-auto">
                <BoldSearchIcon color="#ffffff" size="30" />
              </div>

              <div className="primary-text text-white">Search</div>
            </div>
          ) : (
            <div className="inactive-route">
              <div className="my-auto">
                <LightSearchIcon color="#cbd5e1" size="30" />
              </div>

              <div className="primary-text text-primary-gray">Search</div>
            </div>
          )}
        </Link>
      </div>

      {/* Your Library */}
      <div className="h-[70%] flex flex-col space-y-2 bg-dark-200 rounded-md py-3 px-2">
        {/* heading */}
        <div className="flex justify-between px-3">
          <div className="flex space-x-2 cursor-pointer my-auto">
            {/* Icon */}
            <div>
              <BoldLibraryIcon size="30" color="#ffffff" />
            </div>

            {/* text */}
            <div className="primary-text text-primary-gray hover:text-white">
              Your Library
            </div>
          </div>

          {/* other icons */}
          <div className="flex space-x-2">
            <div className="rounded-full hover:bg-dark-400 cursor-pointer p-2">
              <PlusIcon size="30" color="#ffffff" />
            </div>

            <div
              className="rounded-full hover:bg-dark-400 cursor-pointer p-2"
              id="rightArrowIcon"
            >
              <RightArrowIcon size="30" color="#ffffff" />
            </div>
          </div>
        </div>

        {/* categeroies */}
        <div className="flex space-x-2 overflow-x-scroll px-3 py-2">
          {categories.map((element) => (
            <div className="text-white bg-dark-400 py-1 px-2 rounded-full font-medium cursor-pointer">
              {element}
            </div>
          ))}
        </div>

        <div className="overflow-y-scroll rounded-md">
          {/* search and recent */}
          <div className="flex justify-between">
            {/* searchicon */}
            <div className="rounded-full hover:bg-dark-100 cursor-pointer p-2">
              <LightSearchIcon size="25" color="#ffffff" />
            </div>

            {/* recents */}
            <div className="flex space-x-1 text-primary-gray hover:text-white cursor-pointer">
              <div className="my-auto font-medium ">Recents</div>

              <div className="my-auto">
                <SmallDownArrowIcon size="25" color="#cbd5e1" />
              </div>
            </div>
          </div>

          {/* songs */}
          <div className="flex flex-col space-y-2">
            {/*  */}
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;