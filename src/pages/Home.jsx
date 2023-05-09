import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Home/Heading";
import MostLikely from "../components/Home/MostLikely";
import TopMixes from "../components/Home/TopMixes";

const Home = () => {
  return (
    <div className="flex space-x-2 bg-dark-100 p-2">
      {/* Navbar */}
      <div className="w-[20%] bg-dark-100">
        <Navbar />
      </div>

      {/* Main Page */}
      <div className="flex flex-col space-y-4 w-[80%] h-[85%] bg-dark-200 p-4 rounded-md">
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
    </div>
  );
};

export default Home;
