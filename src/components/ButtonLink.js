import Link from "next/link";

const tones = {
  peach:
    "bg-[#D89681] text-[#314653] hover:bg-[#314653] hover:text-white focus-visible:outline-[#D89681]",
  sage: "bg-[#F2D66D] text-[#314653] hover:bg-[#314653] hover:text-[#F2D66D] focus-visible:outline-[#F2D66D]",
  dark: "bg-[#314653] text-white hover:bg-[#D89681] hover:text-[#314653] focus-visible:outline-[#314653]",
};

export default function ButtonLink({
  href,
  children,
  className = "",
  tone = "peach",
  ...props
}) {
  const toneClasses = tones[tone] ?? tones.peach;
  const baseClasses = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold shadow-xs transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 ${toneClasses} ${className}`;

  const isExternal =
    typeof href === "string" &&
    (href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("viber:"));

  if (isExternal) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses} {...props}>
      {children}
    </Link>
  );
}
