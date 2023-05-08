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
      <path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7 0 2.953-1.612 5.614-3.999 7v2Z"></path>
      <path d="M16 7v10c1.225-1.1 2-3.228 2-5 0-1.77-.775-3.9-2-5ZM4 17h2.697L14 21.87V2.133L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2Z"></path>
    </svg>
  );
}
