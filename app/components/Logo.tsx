import React from "react";

const Logo = () => (
  <svg width="400" height="150" xmlns="http://www.w3.org/2000/svg">
    {/* Реалистичная капля воды */}
    <defs>
      {/* Градиент для объема капли */}
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: "#00BFFF", stopOpacity: 1 }} />
      </radialGradient>
    </defs>

    {/* Капля воды */}
    <path
      d="M60,30 C75,55 90,75 60,110 C30,75 45,55 60,30 Z"
      fill="url(#grad1)"
      stroke="#000080"
      strokeWidth="1"
    />

    {/* Блик на капле */}
    <ellipse cx="65" cy="55" rx="7" ry="12" fill="white" opacity="0.7" />

    {/* Текст "Аквамастер" */}
    <text
      x="120"
      y="55"
      fontFamily="Roboto"
      fontSize="30"
      fill="rgb(25, 65, 148)"
      fontWeight="bold"
    >
      Аквамастер
    </text>

    {/* Текст "Фильтры для воды" */}
    <text
      x="120"
      y="85"
      fontFamily="Roboto"
      fontSize="18"
      fill="rgb(25, 65, 148)"
    >
      Фильтры для воды
    </text>
  </svg>
);

export default Logo;
