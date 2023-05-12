import BrowseCard from "./BrowseCard";

const BrowseAll = () => {
  const browseData = [
    { heading: "Podcasts", color: "9f1239" },
    { heading: "Live Events", color: "84cc16" },
    { heading: "Made for You", color: "0d9488" },
    { heading: "New Releases", color: "eab308" },
    { heading: "Hindi", color: "f97316" },
    { heading: "Punjabi", color: "ef4444" },
    { heading: "Tamil", color: "64748b" },
    { heading: "Telugu", color: "500724" },
    { heading: "Charts", color: "f43f5e" },
    { heading: "Pop", color: "701a75" },
    { heading: "Indie", color: "4338ca" },
    { heading: "Trending", color: "22c55e" },
    { heading: "Love", color: "10b981" },
    { heading: "Discover", color: "e11d48" },
    { heading: "Mood", color: "3b82f6" },
    { heading: "Party", color: "8b5cf6" },
    { heading: "Devotional", color: "a855f7" },
    { heading: "Decades", color: "d946ef" },
    { heading: "Hip-Hop", color: "db2777" },
    { heading: "Dance-Electronic", color: "be123c" },
    { heading: "Student", color: "9f1239" },
    { heading: "Chill", color: "84cc16" },
    { heading: "Gaming", color: "0d9488" },
    { heading: "K-pop", color: "eab308" },
    { heading: "Workout", color: "f97316" },
    { heading: "Radar", color: "ef4444" },
    { heading: "EQUAL", color: "64748b" },
    { heading: "Fresh Minds", color: "500724" },
    { heading: "Charts", color: "f43f5e" },
    { heading: "Rock", color: "701a75" },
    { heading: "Sleep", color: "4338ca" },
    { heading: "Indian Classical", color: "22c55e" },
    { heading: "Instrumental", color: "10b981" },
    { heading: "Spotify Singles", color: "e11d48" },
    { heading: "At Home", color: "3b82f6" },
    { heading: "Country", color: "8b5cf6" },
    { heading: "Metal", color: "a855f7" },
    { heading: "Jazz", color: "d946ef" },
    { heading: "Classical", color: "db2777" },
    { heading: "Folk & Acoustic", color: "be123c" },
  ];
  return (
    <div className="flex flex-col space-y-4">
      {/* heading */}
      <div className="text-white text-2xl font-bold">Browse all</div>

      {/* cards mapped */}
      <div className="grid grid-cols-5 gap-8">
        {browseData.map((element) => (
          <BrowseCard data={element} key={element.heading} />
        ))}
      </div>
    </div>
  );
};

export default BrowseAll;
