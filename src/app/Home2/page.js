"use client";

import Image from "next/image";
import Link from "next/link";
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
    title: "Proslave po meri",
    description: "Paketi koji se prilagođavaju vašoj proslavi.",
  },
  {
    Icon: FaChild,
    title: "Prostor za igru",
    description: "Mesto za istraživanje, kretanje i zabavu.",
  },
  {
    Icon: GiPartyPopper,
    title: "Naše zabave",
    description:
      "Pogledajte kako se mališani zabavljaju na našim tematskim žurkama.",
  },
  {
    Icon: FaInstagram,
    title: "Uspomene koje traju",
    description: "Lepi trenuci za decu, roditelje i prijatelje.",
  },
];

const featureIconStyles = {
  "Proslave po meri": "bg-[#314653] text-white",
  "Prostor za igru": "bg-[#314653] text-white",
  "Naše zabave": "bg-[#F8E0D6] text-[#C8755B]",
  "Uspomene koje traju": "bg-[#F7DFE7] text-[#B64F76]",
};

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      {/* Hero section */}
      <section className="relative isolate h-[min(680px,100svh)] min-h-[560px] w-full overflow-hidden sm:h-[600px] sm:min-h-0 lg:h-[760px]">
        <Image
          src="/images/1.jpg"
          alt="Enterijer igraonice Kofer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#314653]/80 via-[#314653]/45 to-[#314653]/10" />

        {/* Hero content */}
        <div className="absolute inset-x-5 bottom-24 z-10 mx-auto max-w-6xl sm:inset-x-8 sm:bottom-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E6A18C] sm:text-base">
              Igraonica Kofer
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Mesto gde svaka proslava postaje avantura
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              Prostor za igru, druženje i rođendane koji se pamte.
            </p>

            <ButtonLink href="/Kontakt" className="mt-7">
              Zakažite proslavu
            </ButtonLink>
          </div>
        </div>

        {/* Wave transition to the features section */}
        <WaveDivider fill="#f8f8f8" />
      </section>

      {/* Features section */}
      <section
        aria-labelledby="kofer-features-title"
        className="relative bg-background-secondary px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Dobro došli u Kofer
            </p>

            <h2
              id="kofer-features-title"
              className="text-2xl font-bold text-[#314653] sm:text-4xl"
            >
              Sve za bezbrižnu proslavu
            </h2>

            <p className="mt-3 text-base text-[#666666] sm:text-lg">
              Pažljivo osmišljen prostor i sadržaj za poseban dan vaših
              mališana.
            </p>
          </div>

          {/* Feature cards with hover effects */}
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {features.map(({ Icon, title, description }) => (
              <li
                key={title}
                className="group flex h-full items-start rounded-2xl border border-[#E8E5E2] bg-white px-5 py-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-col sm:rounded-3xl sm:px-6 sm:py-8"
              >
                <span
                  className={`mr-4 flex size-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 sm:mb-5 sm:mr-0 sm:size-16 ${featureIconStyles[title]}`}
                >
                  <Icon aria-hidden="true" size={28} />
                </span>

                <div>
                  <h3 className="text-lg font-bold text-[#314653]">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#666666]">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Wave transition to the About section */}
        <WaveDivider fill="#F3EAE5" />
      </section>

      {/* About Kofer section */}
      <section
        aria-labelledby="kofer-about-title"
        className="bg-[#F3EAE5] px-5 py-14 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* About image */}
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[420px] lg:min-h-[480px]">
            <Image
              src="/images/kofer_home_page.jpg"
              alt="Enterijer igraonice Kofer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* About content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C7836E]">
              Upoznajte nas
            </p>

            <h2
              id="kofer-about-title"
              className="mt-3 text-3xl font-bold leading-tight text-[#314653] sm:text-4xl lg:text-5xl"
            >
              Kofer je mesto za igru, druženje i slavlje
            </h2>

            <p className="mt-5 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              U igraonici Kofer verujemo da su najlepši trenuci oni koje
              provodimo zajedno. Stvorili smo prostor u kojem deca mogu da se
              igraju, istražuju i uživaju, dok roditelji bezbrižno provode vreme
              sa svojim najmilijima.
            </p>

            <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              Bilo da planirate rođendan ili neko drugo posebno slavlje, želimo
              da svaki dolazak u Kofer bude ispunjen osmesima i lepim
              uspomenama.
            </p>

            <ButtonLink href="/O_nama" className="mt-7">
              Više o nama
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Wave transition to the gallery */}
      <div className="relative h-[45px] bg-[#F3EAE5] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#ffffff" />
      </div>

      {/* Gallery section */}
      <section
        aria-labelledby="kofer-gallery-title"
        className="bg-white px-5 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Zavirite u Kofer
            </p>

            <h2
              id="kofer-gallery-title"
              className="text-2xl font-bold text-[#314653] sm:text-4xl"
            >
              Prostor za male avanture
            </h2>
          </div>

          {/* Photo carousel */}
          <PhotoCarousel />
        </div>
      </section>

      {/* Wave transition below the gallery */}
      <div className="relative h-[45px] bg-white sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#F3EAE5" />
      </div>

      {/* Final call-to-action section */}
      <section className="bg-[#F3EAE5] px-5 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
            Vaša proslava počinje ovde
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#314653] sm:text-4xl">
            Spremni za sledeću avanturu?
          </h2>

          <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg">
            Javite nam se i zajedno ćemo pronaći najbolju opciju za vaš poseban
            dan.
          </p>

          <ButtonLink href="/Kontakt" className="mt-6">
            Zakažite proslavu
          </ButtonLink>
        </div>
      </section>

      {/* Wave transition to the footer */}
      <div className="relative h-[45px] bg-[#F3EAE5] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#314653" />
      </div>

      <Footer />
    </main>
  );
}
