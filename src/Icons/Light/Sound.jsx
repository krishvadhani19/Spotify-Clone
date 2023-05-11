export default function Search({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7 0 2.953-1.612 5.614-3.999 7v2Z"></path>
      <path d="M16 7v10c1.225-1.1 2-3.23 2-5 0-1.771-.775-3.9-2-5ZM4 17h2.697l5.748 3.831a1.004 1.004 0 0 0 1.413-.317A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.833L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2Zm0-8h3c.033 0 .061-.017.093-.02a1 1 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.867v12.264l-4.445-2.963c-.025-.018-.056-.02-.082-.034a.986.986 0 0 0-.382-.116C7.059 15.015 7.032 15 7 15H4V9Z"></path>
    </svg>
  );
}
