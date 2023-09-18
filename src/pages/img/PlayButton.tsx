const PlayButton = () => {
  return (
    <div>
      <svg
        width="65"
        height="65"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_406_5561)">
          <circle cx="24.2921" cy="24.2834" r="21.84" fill="white" />
        </g>
        <mask
          id="mask0_406_5561"
          maskUnits="userSpaceOnUse"
          x="9"
          y="8"
          width="32"
          height="32"
        >
          <rect x="9" y="8" width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_406_5561)">
          <path
            d="M20.3335 32.1293V15.873L33.1026 24.0012L20.3335 32.1293Z"
            fill="#1C1B1F"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_406_5561"
            x="0.268148"
            y="0.259359"
            width="48.0482"
            height="48.0477"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1.092" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_406_5561"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_406_5561"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default PlayButton;
