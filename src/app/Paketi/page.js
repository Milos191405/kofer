"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import ButtonLink from "@/components/ButtonLink";
import { FaBirthdayCake, FaStar, FaHeart } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const packages = [
  {
    title: "Rođendanski paketi",
    description:
      "Sve što je potrebno za savršenu proslavu dečijeg rođendana. Izaberite paket koji najviše odgovara vašim željama i prepustite nama da se pobrinemo za nezaboravan dan.",
    Icon: FaBirthdayCake,
  },
  {
    title: "Tematske proslave",
    description:
      "Proslave ispunjene maštom, omiljenim motivima i posebnim detaljima koji svaki rođendan pretvaraju u jedinstvenu avanturu.",
    Icon: GiPartyPopper,
  },
  {
    title: "Posebne prilike",
    description:
      "Planirate druženje, slavlje ili neki drugi poseban događaj? Zajedno ćemo pronaći opciju koja odgovara vašoj zamisli.",
    Icon: FaHeart,
  },
];

export default function Paketi() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      {/* Hero section */}
      <section
        aria-labelledby="packages-hero-title"
        className="relative isolate h-[min(620px,100svh)] min-h-[500px] w-full overflow-hidden sm:h-[580px] sm:min-h-0 lg:h-[680px]"
      >
        <Image
          src="/images/1.jpg"
          alt="Proslava dečijeg rođendana u igraonici Kofer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#314653]/80 via-[#314653]/45 to-[#314653]/10"
        />

        <div className="absolute inset-x-5 bottom-24 z-10 mx-auto max-w-6xl sm:inset-x-8 sm:bottom-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E6A18C] sm:text-base">
              Naši paketi
            </p>

            <h1
              id="packages-hero-title"
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Pronađite savršen paket za vašu proslavu
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              Pogledajte naše pakete i izaberite onaj koji najviše odgovara
              vašim željama. Mi ćemo se pobrinuti da vaš mališan doživi rođendan
              za pamćenje!
            </p>

            <ButtonLink href="#paketi" tone="peach" className="mt-7">
              Pogledajte pakete
            </ButtonLink>
          </div>
        </div>

        <WaveDivider fill="#f8f8f8" />
      </section>

      {/* Introduction */}
      <section className="bg-background-secondary px-5 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
            Vaša proslava, vaš izbor
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#314653] sm:text-4xl">
            Sve za jedan poseban dan
          </h2>

          <p className="mt-5 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
            Svaka proslava je drugačija, baš kao i želje naših mališana. Zato
            smo pripremili različite mogućnosti kako biste lakše pronašli ono
            što vam najviše odgovara. Istražite našu ponudu i odaberite paket za
            nezaboravno druženje, igru i slavlje.
          </p>
        </div>
      </section>

      {/* Wave transition */}
      <div className="relative h-[45px] bg-background-secondary sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#F3EAE5" />
      </div>

      {/* Packages section */}
      <section
        id="paketi"
        aria-labelledby="packages-title"
        className="scroll-mt-24 bg-[#F3EAE5] px-5 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Izaberite svoju avanturu
            </p>

            <h2
              id="packages-title"
              className="text-3xl font-bold text-[#314653] sm:text-4xl"
            >
              Pogledajte naše pakete
            </h2>

            <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg">
              Pronađite opciju koja će vašu proslavu učiniti posebnom i
              prilagođenom željama vašeg deteta.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map(({ number, title, description, Icon }) => (
              <article
                key={number}
                className="group relative flex flex-col items-center rounded-3xl bg-white px-6 py-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:px-8"
              >
                <span className="absolute right-6 top-5 text-sm font-bold text-[#D89681]/60">
                  {number}
                </span>

                <div className="flex size-20 items-center justify-center rounded-full bg-[#F3EAE5] transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    aria-hidden="true"
                    className="text-[#314653]"
                    size={34}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#314653]">
                  {title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#666666]">
                  {description}
                </p>

                <ButtonLink href="/Kontakt" tone="peach" className="mt-7">
                  Saznajte više
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery image section */}
      <section className="bg-background-secondary px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl sm:min-h-[420px]">
            <Image
              src="/images/kofer_home_page.jpg"
              alt="Unutrašnjost igraonice Kofer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Poseban dan za vaše mališane
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#314653] sm:text-4xl">
              Vi birate paket, mi stvaramo uspomene
            </h2>

            <p className="mt-5 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              Želimo da organizacija rođendana bude jednostavna i prijatna.
              Izaberite paket koji vam odgovara, a mi ćemo vam pomoći oko
              detalja kako bi proslava protekla baš onako kako ste zamislili.
            </p>

            <ButtonLink href="/Kontakt" tone="peach" className="mt-7">
              Kontaktirajte nas
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <div className="relative h-[45px] bg-background-secondary sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#F3EAE5" />
      </div>

      {/* Final call to action */}
      <section
        aria-labelledby="packages-contact-title"
        className="bg-[#F3EAE5] px-5 py-16 text-center sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-2xl">

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
            Vaš poseban dan počinje ovde
          </p>

          <h2
            id="packages-contact-title"
            className="mt-3 text-3xl font-bold text-[#314653] sm:text-4xl"
          >
            Pripremimo zajedno nezaboravnu proslavu!
          </h2>

          <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg">
            Imate pitanja ili želite da rezervišete termin? Javite nam se i rado
            ćemo vam pomoći da pronađete odgovarajući paket.
          </p>

          <ButtonLink href="/Kontakt" tone="peach" className="mt-7">
            Zakažite proslavu
          </ButtonLink>
        </div>
      </section>

      {/* Wave transition to footer */}
      <div className="relative h-[45px] bg-[#F3EAE5] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#314653" />
      </div>

      <Footer />
    </main>
  );
}
