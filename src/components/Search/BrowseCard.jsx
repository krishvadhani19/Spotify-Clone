const BrowseCard = (props) => {
  return (
    <div className={`bg-pink-600 rounded-md h-60 py-6 px-4`}>
      {/* heading */}
      <div className="text-white text-2xl font-bold">{props.data.heading}</div>
    </div>
  );
};

export default BrowseCard;
