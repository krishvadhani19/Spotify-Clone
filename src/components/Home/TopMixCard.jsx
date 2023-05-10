import BoldPlayButton from "../../Icons/Bold/Play";

const TopMixCard = (props) => {
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
          src={props.data.imageURL}
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
      <div className="text-lg text-white font-semibold">
        {props.data.heading}
      </div>

      {/* creators */}
      <div className="text-primary-gray font-medium text-base">
        <div className="inline hover:underline">{props.data.singers[0]}, </div>
        <div className="inline hover:underline">{props.data.singers[1]}, </div>
        <div className="inline hover:underline">{props.data.singers[2]}</div>
      </div>
    </div>
  );
};

export default TopMixCard;
