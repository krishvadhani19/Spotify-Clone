import React from "react";

export default function Home({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      stroke={color}
      stroke-linecap="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 20 20 4"></path>
      <path d="M20 20 4 4"></path>
    </svg>
  );
}
