import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="w-[20%] bg-dark-100">
        <Navbar />
      </div>

      {/* Main Page */}
      <div className="w-[80%]"></div>
    </div>
  );
};

export default Home;
