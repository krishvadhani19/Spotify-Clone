import BoldPinIcon from "../../Icons/Bold/Pin";

const Songs = () => {
  return (
    <div className="flex space-x-4 bg-dark-300 hover:bg-dark-400 cursor-pointer transition delay-100 duration-100 ease-in-out rounded-md p-1">
      {/* Image */}
      <div className="w-16 h-16 rounded-md">
        <img
          src="https://images.unsplash.com/photo-1683384918196-deedaade6da6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="songImage"
          className="w-16 h-16 rounded-md"
        />
      </div>

      {/* Playlist Name & Songs */}
      <div className="flex flex-col space-y-0 my-auto">
        {/* Playlist Name */}
        <div className="primary-text text-green-500">Liked Songs</div>

        {/*  */}
        <div className="flex space-x-2">
          {/* pin icon */}
          <div className="my-auto">
            <BoldPinIcon size="21" color="#22c55e" />
          </div>

          {/*  */}
          <div className="flex space-x-1 text-md font-medium text-primary-gray">
            <div>Playlist</div>
            <div className="">.</div>
            <div>Krish</div>
          </div>
        </div>
      </div>

      {/* Icon */}
      <div></div>
    </div>
  );
};

export default Songs;
