export default function WaveDivider({ fill = "#f8f8f8" }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 z-20 block h-[45px] w-full overflow-visible sm:h-[70px] lg:h-[90px]"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-2,35 C240,65 430,105 690,75 C940,45 1110,10 1280,30 C1350,38 1400,45 1442,40 L1442,124 L-2,124 Z"
        fill={fill}
      />
    </svg>
  );
}
