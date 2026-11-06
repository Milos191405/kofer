"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import ButtonLink from "@/components/ButtonLink";
import PhotoCarousel from "@/components/PhotoCarousel";
import { FaBirthdayCake, FaChild, FaInstagram } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const features = [
  {
    Icon: FaBirthdayCake,
    title: "Dečiji rođendani",
    description: "Paketi koji se prilagođavaju vašoj proslavi.",
  },
  {
    Icon: FaChild,
    title: "Dečija igraonica",
    description: "Mesto za istraživanje, kretanje i zabavu.",
  },
  {
    Icon: GiPartyPopper,
    title: "Tematske zabave",
    description:
      "Pogledajte kako se mališani zabavljaju na našim tematskim žurkama.",
  },
  {
    Icon: FaInstagram,
    title: "Nezaboravne uspomene",
    description: "Lepi trenuci za decu, roditelje i prijatelje.",
  },
];

const homeThemes = {
  peach: {
    section: "#F3EAE5",
    accent: "#D89681",
    accentDark: "#C7836E",
    heroAccent: "#E6A18C",
  },
  sage: {
    section: "#E5ECE8",
    accent: "#314653",
    accentDark: "#314653",
    heroAccent: "#F2D66D",
  },
};

export default function HomeClient({ colorTheme = "peach" }) {
  const theme = homeThemes[colorTheme] ?? homeThemes.peach;

  return (
    <main
      className="min-h-screen bg-background-primary"
      style={{
        "--home-section": theme.section,
        "--home-accent": theme.accent,
        "--home-accent-dark": theme.accentDark,
        "--home-hero-accent": theme.heroAccent,
      }}
    >
      <Navbar />

      {/* Hero section */}
      <section
        aria-labelledby="hero-title"
        className="relative isolate h-[min(680px,100svh)] min-h-[560px] w-full overflow-hidden sm:h-[600px] sm:min-h-0 lg:h-[760px]"
      >
        <Image
          src="/images/1.jpg"
          alt="Enterijer dečije igraonice Kofer"
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--home-hero-accent)] sm:text-base">
              Dobro došli u Igraonicu Kofer
            </p>

            <h1
              id="hero-title"
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Dečija igraonica Kofer – mesto za nezaboravne rođendane
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              Prostor za dečije rođendane, igru, druženje i proslave koje se
              pamte.
            </p>

            <ButtonLink href="/Kontakt" tone={colorTheme} className="mt-7">
              Zakažite proslavu
            </ButtonLink>
          </div>
        </div>

        <WaveDivider fill="#f8f8f8" />
      </section>

      {/* Features section */}
      <section
        aria-labelledby="kofer-features-title"
        className="relative bg-background-secondary px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[var(--home-accent)]">
              Dobro došli u Kofer
            </p>

            <h2
              id="kofer-features-title"
              className="text-2xl font-bold text-[#314653] sm:text-4xl"
            >
              Sve za bezbrižnu proslavu dečijeg rođendana
            </h2>

            <p className="mt-3 text-base text-[#666666] sm:text-lg">
              Pažljivo osmišljen prostor i sadržaj za poseban dan vaših
              mališana.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
            {features.map(({ Icon, title, description }) => (
              <li
                key={title}
                className="group flex flex-col items-center text-center"
              >
                <div className="flex size-[124px] items-center justify-center rounded-full border border-[#D9D9D9] bg-white transition-transform duration-300 group-hover:scale-105 sm:size-[144px]">
                  <Icon
                    aria-hidden="true"
                    className="text-[#314653]"
                    size={48}
                  />
                </div>

                <h3 className="mt-4 text-sm font-medium leading-6 text-[#171717] sm:mt-5 sm:text-base">
                  {title}
                </h3>

                <p className="mt-1 max-w-[220px] text-sm leading-6 text-[#666666]">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <WaveDivider fill={theme.section} />
      </section>

      {/* About Kofer section */}
      <section
        aria-labelledby="kofer-about-title"
        className="bg-[var(--home-section)] px-5 py-14 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl sm:min-h-[400px]">
            <Image
              src="/images/kofer_home_page.jpg"
              alt="Prostor igraonice Kofer za dečije rođendane i proslave"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div>
            <p
              className={`text-sm font-bold uppercase tracking-[0.16em] text-[var(--home-accent-dark)] ${
                colorTheme === "sage"
                  ? "inline-flex rounded-full bg-[#F2D66D] px-3 py-1"
                  : ""
              }`}
            >
              Upoznajte nas
            </p>

            <h2
              id="kofer-about-title"
              className="mt-3 text-3xl font-bold leading-tight text-[#314653] sm:text-4xl lg:text-5xl"
            >
              Kofer je mesto za igru, druženje i dečije slavlje
            </h2>

            <p className="mt-5 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              U igraonici Kofer verujemo da su najlepši trenuci oni koje
              provodimo zajedno. Zato smo stvorili prostor u kojem deca mogu
              slobodno da se igraju, istražuju i uživaju, dok roditelji
              bezbrižno proslavljaju posebne trenutke sa svojim najmilijima.
            </p>

            <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              Bilo da planirate dečiji rođendan ili neko drugo posebno slavlje,
              tu smo da vam pomognemo da svaki detalj bude deo lepe uspomene.
            </p>

            <ButtonLink href="/O_koferu" tone={colorTheme} className="mt-7">
              Više o nama
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Wave transition to gallery */}
      <div className="relative h-[45px] bg-[var(--home-section)] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#ffffff" />
      </div>

      {/* Gallery section */}
      <section
        aria-labelledby="kofer-gallery-title"
        className="bg-white px-5 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[var(--home-accent)]">
              Zavirite u Kofer
            </p>

            <h2
              id="kofer-gallery-title"
              className="text-2xl font-bold text-[#314653] sm:text-4xl"
            >
              Pogledajte našu igraonicu i proslave
            </h2>

            <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg">
              Pogledajte trenutke igre, druženja i dečijih rođendana iz naše
              igraonice.
            </p>
          </div>

          <PhotoCarousel />
        </div>
      </section>

      {/* Wave transition below gallery */}
      <div className="relative h-[45px] bg-white sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill={theme.section} />
      </div>

      {/* Final call-to-action section */}
      <section
        aria-labelledby="kofer-contact-title"
        className="bg-[var(--home-section)] px-5 py-14 text-center sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--home-accent)]">
            Vaša proslava počinje ovde
          </p>

          <h2
            id="kofer-contact-title"
            className="mt-3 text-3xl font-bold text-[#314653] sm:text-4xl"
          >
            Spremni za sledeću avanturu?
          </h2>

          <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg">
            Javite nam se i zajedno ćemo pronaći najbolju opciju za vaš poseban
            dan.
          </p>

          <ButtonLink href="/Kontakt" tone={colorTheme} className="mt-6">
            Zakažite proslavu
          </ButtonLink>
        </div>
      </section>

      {/* Wave transition to footer */}
      <div className="relative h-[45px] bg-[var(--home-section)] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#314653" />
      </div>

      <Footer />
    </main>
  );
}