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
      <path d="m22.314 10.174-1.415 1.414-.707-.707-4.242 4.242-.707 3.536-1.415 1.414-4.242-4.244-4.95 4.95-1.414-1.413 4.95-4.95-4.243-4.242 1.414-1.415 3.537-.707 4.242-4.242-.707-.708 1.414-1.414 8.485 8.486Z"></path>
    </svg>
  );
}
