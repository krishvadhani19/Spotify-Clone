const Heading = () => {
  const now = new Date();
  const options = { timeZone: "Asia/Kolkata" };
  const time = now.toLocaleTimeString("en-US", options);

  return (
    <div className="w-full text-white text-4xl font-bold cursor-default select-none">
      {time.slice(-2) === "AM" ? (
        <div>
          {Number.parseInt(time.slice(0, 1)) < 12 &&
          Number.parseInt(time.slice(0, 1)) > 5
            ? "Good Morning!"
            : "Good Night!"}
        </div>
      ) : (
        <div>
          {" "}
          {Number.parseInt(time.slice(0, 1)) < 12 &&
          Number.parseInt(time.slice(0, 1)) > 5
            ? "Good Evening!"
            : "Good Afternoon!"}
        </div>
      )}
    </div>
  );
};

export default Heading;
