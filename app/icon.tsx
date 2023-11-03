import { ImageResponse } from "next/server";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6D28D9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 5v4" />
          <rect width="4" height="6" x="7" y="9" rx="1" />
          <path d="M9 15v2" />
          <path d="M17 3v2" />
          <rect width="4" height="8" x="15" y="5" rx="1" />
          <path d="M17 13v3" />
          <path d="M3 3v18h18" />
        </svg>
      </div>
    ),
    size
  );
}
