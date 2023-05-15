import { useLocation, Link } from "react-router-dom";
import Songs from "./Songs";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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

  const librarayData = [
    {
      imageURL:
        "https://shotstack.io/assets/img/learn/articles/spotify-thumb.png",
      pinned: true,
      heading: "Liked Songs",
      type: "Playlist",
      creator: "Test1",
    },
    {
      imageURL:
        "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_xl_1638898900.webp",
      pinned: true,
      heading: "Arjit Singh",
      type: "Artist",
      creator: "Test1",
    },
    {
      imageURL:
        "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
      pinned: false,
      heading: "Ms Dhoni",
      type: "Album",
      creator: "Test1",
    },
    {
      imageURL:
        "https://images.hindustantimes.com/img/2022/11/29/1600x900/amit_1669708962386_1669708962544_1669708962544.PNG",
      pinned: false,
      heading: "Amit Trivedi",
      type: "Artist",
      creator: "Test1",
    },
    {
      imageURL: "https://i.ytimg.com/vi/ETmyMnwy-2A/movieposter.jpg",
      pinned: false,
      heading: "Humpty Sharma ki Dulhania",
      type: "Album",
      creator: "Test1",
    },
    {
      imageURL:
        "https://dilliwaliblog.files.wordpress.com/2020/08/i0m27jp8_400x400.jpg",
      pinned: false,
      heading: "Anuv Jain",
      type: "Artist",
      creator: "Test1",
    },
    {
      imageURL:
        "https://c.ndtvimg.com/2018-12/9sms4jco_kedarnath-instagram_625x300_07_December_18.jpg",
      pinned: false,
      heading: "Kedarnath",
      type: "Album",
      creator: "Test1",
    },
    {
      imageURL: "https://images.justwatch.com/backdrop/180066867/s640",
      pinned: false,
      heading: "Pyaar Ka Punchanama",
      type: "Album",
      creator: "Test1",
    },
  ];

  const categories = [
    "Playlists",
    "Podcasts",
    "Albums",
    "Artists",
    "Downloaded",
  ];

  return (
    <div className="h-full flex flex-col space-y-2">
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
      <div className="h-[82%] flex flex-col bg-dark-200 rounded-md py-3 px-2">
        {/* heading */}
        <div className="flex justify-between px-3">
          <div className="flex space-x-2 cursor-pointer my-auto">
            {/* Icon */}
            <div>
              <BoldLibraryIcon size="30" color="#ffffff" />
            </div>

            {/* text */}
            <div
              className="primary-text text-primary-gray hover:text-white select-none"
              data-tooltip-id="yourLibrary"
              data-tooltip-content="Collapse Your Library"
              data-tooltip-delay-hide={150}
              data-tooltip-delay-show={150}
              place="top"
            >
              <Tooltip id="yourLibrary" className="tooltip" />
              Your Library
            </div>
          </div>

          {/* other icons */}
          <div className="flex space-x-2">
            <div
              className="rounded-full hover:bg-dark-400 cursor-pointer p-1"
              data-tooltip-id="createPlaylist"
              data-tooltip-content="Create playlist or folder"
              data-tooltip-delay-hide={150}
              data-tooltip-delay-show={150}
              place="top"
            >
              <Tooltip id="createPlaylist" className="tooltip" />
              <PlusIcon size="30" color="#ffffff" />
            </div>

            <div
              className="rounded-full hover:bg-dark-400 cursor-pointer p-1"
              data-tooltip-id="enlargeLibrary"
              data-tooltip-content="Enlarge Your Library"
              data-tooltip-delay-hide={150}
              data-tooltip-delay-show={150}
              place="top"
            >
              <Tooltip id="enlargeLibrary" className="tooltip" />
              <RightArrowIcon size="30" color="#ffffff" />
            </div>
          </div>
        </div>

        {/* categeroies */}
        <div className="flex space-x-2 px-3 py-2 ">
          {categories.map((element) => (
            <div
              className="text-white bg-dark-400 py-1 px-2 rounded-full font-medium cursor-pointer my-auto"
              key={element}
            >
              {element}
            </div>
          ))}
        </div>

        <div className="overflow-y-auto rounded-md">
          {/* search and recent */}
          <div className="flex justify-between">
            {/* searchicon */}
            <div
              className="rounded-full hover:bg-dark-400 cursor-pointer p-2"
              data-tooltip-id="searchLibrary"
              data-tooltip-content="Search in Your Library"
              data-tooltip-delay-hide={150}
              data-tooltip-delay-show={150}
              place="top"
            >
              <Tooltip id="searchLibrary" className="tooltip" />
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
            {librarayData.map((element) => (
              <Songs data={element} key={element.imageURL} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
