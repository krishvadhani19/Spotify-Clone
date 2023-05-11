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
      <path d="M8 20.003v1.932a.5.5 0 0 1-.82.385l-4.12-3.433a.5.5 0 0 1 .322-.884H18a2 2 0 0 0 2-2v-8h2v8a4 4 0 0 1-4 4H8Zm8-17.932a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2v-8a4 4 0 0 1 4-4h10V2.071Zm-5 5.932h2v8h-2v-6H9v-1l2-1Z"></path>
    </svg>
  );
}
