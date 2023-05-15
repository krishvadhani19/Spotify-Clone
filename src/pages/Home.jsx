import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Home/Heading";
import MostLikely from "../components/Home/MostLikely";
import TopMixes from "../components/Home/TopMixes";
import Player from "../components/Player";
import Controls from "../components/Home/Controls";
import Sponsor from "../components/Home/Sponsor";

const Home = () => {
  return (
    <div className="flex flex-col space-y-2 bg-dark-100 p-2 h-screen select-none">
      <div className="flex space-x-2 bg-dark-100 w-full h-[89%] overflow-y-scroll rounded-md">
        {/* Navbar */}
        <div className="h-full w-[20%] rounded-md">
          <Navbar />
        </div>

        {/* Main Page */}
        <div className="ml-[21%] flex flex-col space-y-4 w-[80%] h-full bg-dark-200 rounded-md overflow-y-auto">
          <div className="flex flex-col space-y-4 w-full bg-gradient-to-b from-cyan-800 to-dark-200 pt-6 px-4">
            {/* controls */}
            <div className="w-full">
              <Controls searchVerify={false} />
            </div>

            {/* sponsored */}
            <div className="w-full">
              <Sponsor />
            </div>

            {/* Heading */}
            <div className="w-full">
              <Heading />
            </div>

            {/* Most Liked */}
            <div className="w-full">
              <MostLikely />
            </div>

            {/* Top Mixes */}
            <div>
              <TopMixes />
            </div>
          </div>

          <div className="flex flex-col space-y-4 w-full bg-dark-200 px-4 pb-4">
            {/* Top Mixes */}
            <div>
              <TopMixes />
            </div>

            {/* Top Mixes */}
            <div>
              <TopMixes />
            </div>

            {/* Top Mixes */}
            <div>
              <TopMixes />
            </div>
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

export default Home;
