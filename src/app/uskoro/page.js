import Image from "next/image";

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
    <main className="flex min-h-dvh w-full items-center justify-center bg-background-secondary p-6">
      <h1 className="sr-only">Igraonica Kofer – uskoro</h1>
      <Image
        src="/kofer_logo.svg"
        alt="Kofer logo"
        width={1280}
        height={770}
        priority
        className="h-auto max-h-[85dvh] w-[min(90vw,1100px)] object-contain"
      />
    </main>
  );
}
