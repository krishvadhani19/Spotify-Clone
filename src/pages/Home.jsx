import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Home/Heading";
import MostLikely from "../components/Home/MostLikely";
import TopMixes from "../components/Home/TopMixes";
import Player from "../components/Player";

const Home = () => {
  return (
    <div className="flex flex-col space-y-2 bg-dark-100 p-2 h-screen">
      <div className="flex space-x-2 bg-dark-100 w-full h-[90%] overflow-y-scroll rounded-md">
        {/* Navbar */}
        <div className="h-full w-[20%] rounded-md">
          <Navbar />
        </div>

        {/* Main Page */}
        <div className="ml-[21%] flex flex-col space-y-4 w-[80%] h-full bg-dark-200 p-4 rounded-md overflow-y-auto">
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

      {/* div */}
      <div className="w-full h-[10%]">
        <Player />
      </div>
    </div>
  );
};

export default Home;
