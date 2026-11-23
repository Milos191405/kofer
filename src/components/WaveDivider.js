export default function WaveDivider({
  fill = "#f8f8f8",
  flipY = false,
  className = "",
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 z-20 block h-[45px] w-full select-none sm:h-[70px] lg:h-[90px] ${
        flipY ? "-top-px scale-y-[-1]" : "-bottom-px"
      } ${className}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,35 C240,65 430,105 690,75 C940,45 1110,10 1280,30 C1350,38 1400,45 1440,40 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  );
}
