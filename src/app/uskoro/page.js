import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export const metadata = {
  title: {
    absolute: "Igraonica Kofer Novi Sad | Uskoro",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function UskoroPage() {
  return (
    <main className="flex min-h-dvh w-full flex-col items-center justify-center gap-8 bg-background-secondary px-6 py-10 text-center">
      <h1 className="sr-only">Igraonica Kofer – uskoro</h1>

      <Image
        src="/kofer_logo.svg"
        alt="Kofer logo"
        width={1280}
        height={770}
        priority
        className="h-auto max-h-[62dvh] w-[min(85vw,820px)] object-contain"
      />

      <div className="flex flex-col items-center gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D89681] sm:text-sm">
          Sajt je u pripremi
        </p>

        <a
          href="tel:+381640626202"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#314653] px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#D89681] sm:text-lg"
        >
          <FaPhone aria-hidden="true" size={15} />
          Kontaktirajte nas: 064/062-6202
        </a>
      </div>
    </main>
  );
}
