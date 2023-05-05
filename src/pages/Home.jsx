import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="w-[16%] bg-slate-800">
        <Navbar />
      </div>

      {/* Main Page */}
      <div className="w-[84%]"></div>
    </div>
  );
};

export default Home;
