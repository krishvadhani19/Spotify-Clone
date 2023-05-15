import Navbar from "../components/Navbar/Navbar";
import Player from "../components/Player";
import Controls from "../components/Home/Controls";
import BrowseAll from "../components/Search/BrowseAll";

const Search = () => {
  return (
    <div className="flex flex-col space-y-2 bg-dark-100 p-2 h-screen select-none">
      <div className="flex space-x-2 bg-dark-100 w-full h-[89%] overflow-y-scroll rounded-md">
        {/* Navbar */}
        <div className="h-full w-[20%] rounded-md">
          <Navbar />
        </div>

        {/* Main Page */}
        <div className="ml-[21%] flex flex-col space-y-4 w-[80%] h-full bg-dark-200 rounded-md overflow-y-auto p-4">
          {/* controls */}
          <div className="w-full">
            <Controls searchVerify={true} />
          </div>

          {/* browse All */}
          <div className="w-full">
            <BrowseAll />
          </div>
        </div>
      </div>

      {/* div */}
      <div className="w-[98%] mx-auto h-[11%]">
        <Player />
      </div>
    </div>
  );
};

export default Search;
