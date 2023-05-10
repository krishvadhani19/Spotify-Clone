import BoldPlayIcon from "../../Icons/Bold/Play";

const MostLikelyCard = (props) => {
  return (
    <div className="flex h-24 bg-dark-400 hover:bg-dark-600 rounded-md cursor-pointer transition delay-100 ease-in-out duration-300">
      {/* img */}
      <div className="shadow-2xl mr-6">
        <img
          className="w-24 h-24 rounded-l-md"
          src={props.data.imageURL}
          alt="img"
        />
      </div>

      {/* Name */}
      <div className="text-white text-lg font-medium my-auto">
        {props.data.heading}
      </div>

      {/* Play Button */}
      <div className="bg-dark-100 rounded-full my-auto ml-auto mr-4 shadow-2xl hover:scale-110 transition ease-in-out delay-75 duration-100">
        <BoldPlayIcon size="65" color="#22c55e" className="bg-dark-100" />
      </div>
    </div>
  );
};

export default MostLikelyCard;
