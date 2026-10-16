import Link from "next/link";

export default function ButtonLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[#D89681] px-7 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#314653] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D89681] ${className}`}
    >
      {children}
    </Link>
  );
}
