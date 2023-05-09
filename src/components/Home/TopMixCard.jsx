import BoldPlayButton from "../../Icons/Bold/Play";

const TopMixCard = () => {
  const handleMouseOver = () => {
    const playButton = document.getElementById("playButton");
    playButton.classList.remove("hidden");
    playButton.classList.add("inline -translate-y-2");
  };

  const handleMouseOut = () => {
    const playButton = document.getElementById("playButton");
    playButton.classList.remove("inline");
    playButton.classList.add("hidden ");
  };
  return (
    <div
      className="flex flex-col space-y-4 rounded-md bg-dark-300 hover:bg-dark-500 transition-all delay-100 duration-300 ease-in-out p-4 cursor-pointer "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* img */}
      <div className="relative">
        <img
          src="https://lastfm.freetls.fastly.net/i/u/ar0/bb3843bfab8279d6cb10f58d3d2a3fe4.jpg"
          alt=""
          className="rounded-md h-48 w-full"
        />

        <div
          className="absolute right-0 bottom-0 bg-dark-100 rounded-full hidden"
          id="playButton"
        >
          <BoldPlayButton size="65" color="#22c55e" />
        </div>
      </div>

      {/* heading */}
      <div className="text-lg text-white font-semibold">Hindi Mix</div>

      {/* creators */}
      <div className="text-primary-gray font-medium text-base">
        <div className="inline hover:underline">Piyush Mi, </div>
        <div className="inline hover:underline">Anuv Jain, </div>
        <div className="inline hover:underline">Arjit Singh </div>
        <div className="inline">and More</div>
      </div>
    </div>
  );
};

export default TopMixCard;
