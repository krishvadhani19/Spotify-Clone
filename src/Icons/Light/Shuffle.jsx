export default function Search({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 6.75h2.166a6 6 0 0 1 4.875 2.512l3.918 5.476a6 6 0 0 0 4.875 2.512h2.916"></path>
      <path d="m19.5 4.5 2.25 2.25L19.5 9"></path>
      <path d="m19.5 15 2.25 2.25-2.25 2.25"></path>
      <path d="M14.325 8.803a5.972 5.972 0 0 1 4.51-2.053h2.915"></path>
      <path d="M3 17.248h2.166a5.971 5.971 0 0 0 4.509-2.053"></path>
    </svg>
  );
}
