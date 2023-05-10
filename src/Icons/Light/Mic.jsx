import React from "react";

export default function Home({
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
      <path d="M15.75 14.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
      <path d="m19.997 12.498-8.494-8.494"></path>
      <path d="m9.825 9.18-7.19 9.806a.74.74 0 0 0 .075.975l1.331 1.331a.74.74 0 0 0 .975.075l9.806-7.19"></path>
    </svg>
  );
}
