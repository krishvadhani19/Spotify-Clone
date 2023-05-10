import TopMixCard from "./TopMixCard";

const topMixCardData = [
  {
    imageURL:
      "https://lastfm.freetls.fastly.net/i/u/ar0/bb3843bfab8279d6cb10f58d3d2a3fe4.jpg",
    heading: "Hindi Mix",
    singers: ["Arjit Singh", "Pritam", "Piyush Mishra"],
  },
  {
    imageURL: "https://www.partymap.in/imgprof/singer-king.jpg",
    heading: "Tanishq Bagchi Mix",
    singers: ["King", "Sachin Jigra", "Darshan Raval"],
  },
  {
    imageURL:
      "https://dilliwaliblog.files.wordpress.com/2020/08/i0m27jp8_400x400.jpg",
    heading: "Amit Trivedi Mix",
    singers: ["Mohan Kanan", "King", "Anuv Jain"],
  },
  {
    imageURL:
      "https://static01.nyt.com/images/2021/03/10/arts/09grammys-taylor1/09grammys-taylor1-mediumSquareAt3X.jpg",
    heading: "Pop Mix",
    singers: ["Taylor Swift", "Justin Bieber", "Ariana Grande"],
  },
  {
    imageURL:
      "https://media1.popsugar-assets.com/files/thumbor/6gy4tPmSRjrK4VFMZdFYcUnWxRc/264x0:2016x1752/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/10/30/731/n/46743346/f65068cf5db9bb5a590b39.99984449_/i/selena-gomez-best-performances.jpg",
    heading: "Afrobeats Mix",
    singers: ["Fave", "Rama", "Selena Gomez"],
  },
];

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
        {topMixCardData.map((element) => (
          <TopMixCard data={element} key={element.heading} />
        ))}
      </div>
    </div>
  );
};

export default TopMixes;
