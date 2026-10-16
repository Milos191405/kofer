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
    title: "Rodjendani",
    description: "Paketi koji se prilagođavaju vašoj proslavi.",
  },
  {
    Icon: FaChild,
    title: "Igraonica",
    description: "Mesto za istraživanje, kretanje i zabavu.",
  },
  {
    Icon: GiPartyPopper,
    title: "Zabave",
    description:
      "Pogledajte kako se mališani zabavljaju na našim tematskim žurkama.",
  },
  {
    Icon: FaInstagram,
    title: "Uspomene",
    description: "Lepi trenuci za decu, roditelje i prijatelje.",
  },
];

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

        <div className="absolute inset-0 bg-gradient-to-r from-[#314653]/80 via-[#314653]/45 to-[#314653]/10" />

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

        <WaveDivider fill="#f8f8f8" />
      </section>

      {/* Features section with standalone circular icons */}
      <section
        aria-labelledby="kofer-features-title"
        className="relative bg-background-secondary px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16"
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

          <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
            {features.map(({ Icon, title }) => (
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
              </li>
            ))}
          </ul>
        </div>

        <WaveDivider fill="#F3EAE5" />
      </section>

      {/* About Kofer section */}
      <section
        aria-labelledby="kofer-about-title"
        className="bg-[#F3EAE5] px-5 py-14 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* About image */}
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl sm:min-h-[400px]">
            <Image
              src="/images/kofer_home_page.jpg"
              alt="Prostor igraonice Kofer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
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
              provodimo zajedno. Zato smo stvorili prostor u kojem deca mogu
              slobodno da se igraju, istražuju i uživaju, dok roditelji
              bezbrižno proslavljaju posebne trenutke sa svojim najmilijima.
            </p>

            <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              Bilo da planirate rođendan ili neko drugo posebno slavlje, tu smo
              da vam pomognemo da svaki detalj bude deo lepe uspomene.
            </p>

            <ButtonLink href="/O_nama" className="mt-7">
              Više o nama
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Wave transition to gallery */}
      <div className="relative h-[45px] bg-[#F3EAE5] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#ffffff" />
      </div>

      {/* Gallery section with photo carousel */}
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

            <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg">
              Pogledajte trenutke igre, druženja i proslava iz naše igraonice.
            </p>
          </div>

          <PhotoCarousel />
        </div>
      </section>

      {/* Wave transition below gallery */}
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

      {/* Wave transition to footer */}
      <div className="relative h-[45px] bg-[#F3EAE5] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#314653" />
      </div>

      <Footer />
    </main>
  );
}
