import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  className = "",
  tone = "peach",
}) {
  const toneClasses =
    tone === "sage" ?
      "bg-[#F2D66D] text-[#314653] hover:bg-[#314653] hover:text-[#F2D66D] focus-visible:outline-[#F2D66D]"
    : "bg-[#D89681] text-white hover:bg-[#314653] focus-visible:outline-[#D89681]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${toneClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
