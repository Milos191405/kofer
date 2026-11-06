import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import ButtonLink from "@/components/ButtonLink";
import GalleryList from "./GalleryList";

export const metadata = {
  title: "Galerija | Igraonica Kofer",
  description:
    "Pogledajte galeriju igraonice Kofer. Zavirite u svet dečijih rođendana, tematskih proslava, igre i nezaboravnih uspomena.",
};

export default function Galerija() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      {/* Hero section */}
      <section
        aria-labelledby="gallery-hero-title"
        className="relative isolate h-[min(620px,100svh)] min-h-[500px] w-full overflow-hidden sm:h-[580px] sm:min-h-0 lg:h-[680px]"
      >
        <Image
          src="/images/1.jpg"
          alt="Igraonica Kofer - dečije proslave i rođendani"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#314653]/80 via-[#314653]/45 to-[#314653]/10" />

        <div className="absolute inset-x-5 bottom-24 z-10 mx-auto max-w-6xl sm:inset-x-8 sm:bottom-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E6A18C] sm:text-base">
              Zavirite u Kofer
            </p>

            <h1
              id="gallery-hero-title"
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Uspomene koje se pamte
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              Zavirite u naš svet igre, osmeha i nezaboravnih dečijih proslava.
              Svaka fotografija krije jednu posebnu priču.
            </p>

            <ButtonLink href="#albumi" tone="peach" className="mt-7">
              Pogledajte galeriju
            </ButtonLink>
          </div>
        </div>

        <WaveDivider fill="#f8f8f8" />
      </section>

      {/* Introduction */}
      <section className="bg-background-secondary px-5 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
            Trenuci iz Kofera
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#314653] sm:text-4xl">
            Svaka proslava ima svoju priču
          </h2>

          <p className="mt-5 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
            Od prvog osmeha do poslednjeg trenutka zabave, u Koferu nastaju
            uspomene koje se dugo pamte. Pogledajte naše albume i upoznajte
            atmosferu naših proslava.
          </p>
        </div>
      </section>

      {/* Wave transition */}
      <div className="relative h-[45px] bg-background-secondary sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#F3EAE5" />
      </div>

      {/* Albums */}
      <section
        id="albumi"
        aria-labelledby="gallery-albums-title"
        className="scroll-mt-24 bg-[#F3EAE5] px-5 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Naša galerija
            </p>

            <h2
              id="gallery-albums-title"
              className="text-3xl font-bold text-[#314653] sm:text-4xl"
            >
              Istražite naše albume
            </h2>

            <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg">
              Izaberite album koji želite da pogledate i zavirite u posebne
              trenutke iz našeg Kofera.
            </p>
          </div>

          <GalleryList />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background-secondary px-5 py-16 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
            Postanite deo naše priče
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#314653] sm:text-4xl">
            Želimo da i vaša proslava bude deo naših uspomena!
          </h2>

          <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg">
            Organizujte poseban dan za svoje mališane i zajedno sa nama stvorite
            trenutke za pamćenje.
          </p>

          <ButtonLink href="/Kontakt" tone="peach" className="mt-7">
            Zakažite proslavu
          </ButtonLink>
        </div>
      </section>

      {/* Wave transition to footer */}
      <div className="relative h-[45px] bg-background-secondary sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#314653" />
      </div>

      <Footer />
    </main>
  );
}
