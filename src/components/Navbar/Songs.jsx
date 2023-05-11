import BoldPinIcon from "../../Icons/Bold/Pin";

const Songs = (props) => {
  return (
    <div className="flex space-x-4 bg-dark-300 hover:bg-dark-400 cursor-pointer transition delay-100 duration-100 ease-in-out rounded-md p-1">
      {/* Image */}
      <div className="w-16 h-16 rounded-md">
        <img
          src={props.data.imageURL}
          alt="songImage"
          className="w-16 h-16 rounded-md"
        />
      </div>

      {/* Playlist Name & Songs */}
      <div className="flex flex-col space-y-0 my-auto">
        {/* Playlist Name */}
        <div className="primary-text text-white">{props.data.heading}</div>

        {/*  */}
        <div className="flex space-x-2">
          {/* pin icon */}
          {props.data.pinned ? (
            <div className="my-auto">
              <BoldPinIcon size="21" color="#22c55e" />
            </div>
          ) : (
            <></>
          )}

          {/*  */}
          <div className="flex space-x-1 text-md font-medium text-primary-gray">
            <div>{props.data.type}</div>
            <div className="">.</div>
            <div>{props.data.creator}</div>
          </div>
        </div>
      </div>

      {/* Icon */}
      <div></div>
    </div>
  );
};

export default Songs;
