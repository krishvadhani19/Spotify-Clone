import MostLikeyCard from "./MostLikelyCard";

const MostLikely = () => {
  const mostLikelyCardData = [
    {
      imageURL:
        "https://shotstack.io/assets/img/learn/articles/spotify-thumb.png",
      heading: "Liked Songs",
    },
    {
      imageURL:
        "https://images.indianexpress.com/2022/07/Zindagi-Na-Milegi-Dobara-1200.jpg",
      heading: "Zindagi Na Milegi Dobara",
    },
    {
      imageURL:
        "https://images.indianexpress.com/2022/07/Zindagi-Na-Milegi-Dobara-1200.jpg",
      heading: "RAP",
    },
    {
      imageURL:
        "https://yt3.googleusercontent.com/ytc/AGIKgqM0oMY6YXWl11LY0Z1BAM1KNUf0rd8YIaDX92KU=s900-c-k-c0x00ffffff-no-rj",
      heading: "Hans Zimmer",
    },
    {
      imageURL:
        "https://yt3.googleusercontent.com/ytc/AGIKgqNCFJ9xh-s7JhOWqp8gQrf8UuOZWe2xn8zdbBnC9w=s900-c-k-c0x00ffffff-no-rj",
      heading: "Anuv Jain Mix",
    },
    {
      imageURL:
        "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
      heading: "Ms Dhoni the Untold Story",
    },
  ];
  return (
    <div className="text-white grid grid-cols-3 gap-4">
      {/* Liked Songs */}
      {mostLikelyCardData.map((element) => (
        <MostLikeyCard data={element} key={element.heading} />
      ))}
    </div>
  );
};

export default MostLikely;
