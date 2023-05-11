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

  const librarayData = [
    {
      imageURL:
        "data:image/jpeg;base64,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",
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
      <div className="h-[82%] flex flex-col space-y-2 bg-dark-200 rounded-md py-3 px-2">
        {/* heading */}
        <div className="flex justify-between px-3">
          <div className="flex space-x-2 cursor-pointer my-auto">
            {/* Icon */}
            <div>
              <BoldLibraryIcon size="30" color="#ffffff" />
            </div>

            {/* text */}
            <div className="tooltip primary-text text-primary-gray hover:text-white select-none">
              Your Library
            </div>
          </div>

          {/* other icons */}
          <div className="flex space-x-2">
            <div className="rounded-full hover:bg-dark-400 cursor-pointer p-1">
              <PlusIcon size="30" color="#ffffff" />
            </div>

            <div
              className="rounded-full hover:bg-dark-400 cursor-pointer p-1"
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

        <div className="overflow-y-auto rounded-md">
          {/* search and recent */}
          <div className="flex justify-between">
            {/* searchicon */}
            <div className="rounded-full hover:bg-dark-400 cursor-pointer p-2">
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
              <Songs data={element} ket={element.imageURL} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
