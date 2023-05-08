import Navbar from "../components/Navbar/Navbar";

const Search = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="w-[20%] bg-dark-100">
        <Navbar />
      </div>

      {/* Main Page */}
      <div className="w-[80%] bg-dark-100"></div>
    </div>
  );
};

export default Search;
