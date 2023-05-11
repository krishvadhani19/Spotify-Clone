export default function Search({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM6 9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9Zm2 5h1v-4H8v4Zm6-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3Zm2 6h-1v-4h1v4Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
