"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import ButtonLink from "@/components/ButtonLink";
import { FaHeart, FaChild, FaBirthdayCake, FaSmile } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const values = [
  {
    Icon: FaHeart,
    title: "Pažnja i ljubav",
    description:
      "Svaki detalj osmišljavamo sa željom da se deca osećaju posebno, voljeno i srećno.",
  },
  {
    Icon: FaChild,
    title: "Dečija radost",
    description:
      "Verujemo da je igra najlepši način da deca istražuju, uče, stvaraju i uživaju.",
  },
  {
    Icon: FaBirthdayCake,
    title: "Posebni trenuci",
    description:
      "Svaki rođendan i svaka proslava prilika su za stvaranje uspomena koje traju.",
  },
  {
    Icon: FaSmile,
    title: "Bezbriga za roditelje",
    description:
      "Želimo da i roditelji uživaju u proslavi, dok mališani stvaraju svoje najlepše trenutke.",
  },
];

export default function ONama() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      {/* Hero section */}
      <section
        aria-labelledby="about-hero-title"
        className="relative isolate h-[min(620px,100svh)] min-h-[500px] w-full overflow-hidden sm:h-[580px] sm:min-h-0 lg:h-[680px]"
      >
        <Image
          src="/images/kofer_home_page.jpg"
          alt="Prostor igraonice Kofer"
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
              Upoznajte Kofer
            </p>

            <h1
              id="about-hero-title"
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Mesto gde nastaju najlepše dečije uspomene
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              Više od igraonice – prostor za igru, druženje, smeh i proslave
              koje se pamte.
            </p>

            <ButtonLink href="/Kontakt" tone="peach" className="mt-7">
              Zakažite proslavu
            </ButtonLink>
          </div>
        </div>

        <WaveDivider fill="#f8f8f8" />
      </section>

      {/* Introduction section */}
      <section className="bg-background-secondary px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Naša priča
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#314653] sm:text-4xl lg:text-5xl">
              Dobro došli u svet Kofera
            </h2>

            <p className="mt-5 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              U igraonici Kofer verujemo da su najlepši trenuci oni koje
              provodimo zajedno. Zato smo stvorili prostor u kojem deca mogu
              slobodno da se igraju, istražuju i uživaju, dok roditelji
              bezbrižno proslavljaju posebne trenutke sa svojim najmilijima.
            </p>

            <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              Naša želja je da svaka poseta Koferu bude ispunjena osmesima,
              radošću i lepim uspomenama. Bilo da je u pitanju dečiji rođendan
              ili neko drugo posebno slavlje, želimo da svaki trenutak bude
              poseban.
            </p>

            <ButtonLink href="/Paketi" tone="peach" className="mt-7">
              Pogledajte naše pakete
            </ButtonLink>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[430px]">
            <Image
              src="/images/1.jpg"
              alt="Enterijer igraonice Kofer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <div className="relative h-[45px] bg-background-secondary sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#F3EAE5" />
      </div>

      {/* Values section */}
      <section
        aria-labelledby="values-title"
        className="bg-[#F3EAE5] px-5 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Ono što nas pokreće
            </p>

            <h2
              id="values-title"
              className="text-3xl font-bold text-[#314653] sm:text-4xl"
            >
              Male stvari čine velike uspomene
            </h2>

            <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg">
              U svemu što radimo vodimo se jednostavnom idejom – da deca budu
              srećna, a roditelji zadovoljni.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, description }) => (
              <article
                key={title}
                className="group flex flex-col items-center rounded-3xl bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
              >
                <div className="flex size-20 items-center justify-center rounded-full bg-[#F3EAE5] transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    aria-hidden="true"
                    className="text-[#314653]"
                    size={34}
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#314653]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#666666]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className="bg-background-secondary px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div className="relative order-2 min-h-[320px] overflow-hidden rounded-3xl md:order-1 sm:min-h-[430px]">
            <Image
              src="/images/kofer_home_page.jpg"
              alt="Dečija igraonica Kofer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Naš prostor
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#314653] sm:text-4xl lg:text-5xl">
              Prostor stvoren za dečiju maštu
            </h2>

            <p className="mt-5 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              Kofer je mesto na kojem svaki dan može da postane mala avantura.
              Deca imaju priliku da se igraju, druže i istražuju, dok zajedno
              stvaraju trenutke koje će dugo pamtiti.
            </p>

            <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              Posebnu pažnju posvećujemo atmosferi i detaljima koji svaku
              proslavu čine prijatnom, veselom i jedinstvenom.
            </p>

            <ButtonLink href="/Paketi" tone="peach" className="mt-7">
              Istražite naše pakete
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
        aria-labelledby="about-contact-title"
        className="bg-[#F3EAE5] px-5 py-16 text-center sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-white">
            <GiPartyPopper className="text-[#314653]" size={32} />
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
            Vaša proslava počinje ovde
          </p>

          <h2
            id="about-contact-title"
            className="mt-3 text-3xl font-bold text-[#314653] sm:text-4xl"
          >
            Hajde da zajedno stvorimo lepe uspomene!
          </h2>

          <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg">
            Radujemo se što ćemo biti deo vaših posebnih trenutaka. Javite nam
            se i zajedno ćemo pronaći najbolju opciju za vašu proslavu.
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
