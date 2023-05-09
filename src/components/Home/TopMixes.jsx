import TopMixCard from "./TopMixCard";

const TopMixes = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Heading */}
      <div className="flex justify-between">
        {/* top mixes */}
        <div className="text-2xl text-white font-bold cursor-pointer hover:underline ">
          Your top mixes
        </div>

        {/* show all */}
        <div className="text-primary-gray text-base font-medium cursor-pointer hover:underline my-auto">
          Show all
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-5 gap-8">
        <TopMixCard />
        <TopMixCard />
        <TopMixCard />
        <TopMixCard />
        <TopMixCard />
      </div>
    </div>
  );
};

export default TopMixes;
