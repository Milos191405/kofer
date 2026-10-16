import {
  FaArrowRight,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaViber,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonLink from "@/components/ButtonLink";
import WaveDivider from "@/components/WaveDivider";

const phoneNumber = "+381695547039";
const emailAddress = "igralistenovisad@gmail.com";

const contactOptions = [
  {
    Icon: FaPhone,
    title: "Pozovite nas",
    description:
      "Informacije o slobodnim terminima, paketima i organizaciji proslave.",
    href: `tel:${phoneNumber}`,
    label: "Pozovite Igraonicu Kofer",
    action: "Pozovite sada",
    iconBg: "bg-[#F8E0D6]",
    iconColor: "text-[#C8755B]",
  },
  {
    Icon: FaViber,
    title: "Pišite nam na Viberu",
    description: "Pošaljite nam poruku i dogovorite detalje svoje proslave.",
    href: `viber://chat?number=${encodeURIComponent(phoneNumber)}`,
    label: "Pišite nam putem Vibera",
    action: "Pošaljite poruku",
    iconBg: "bg-[#E8DFF3]",
    iconColor: "text-[#7655A0]",
  },
  {
    Icon: FaInstagram,
    title: "Pratite nas na Instagramu",
    description:
      "Pogledajte fotografije naših proslava i pronađite inspiraciju.",
    href: "https://www.instagram.com/kofer.rodjendani/",
    label: "Posetite naš Instagram profil",
    action: "Posetite profil",
    external: true,
    iconBg: "bg-[#F7DFE7]",
    iconColor: "text-[#B64F76]",
  },
  {
    Icon: FaEnvelope,
    title: "Pošaljite nam email",
    description: "Pišite nam ako vam više odgovara kontakt putem emaila.",
    href: `mailto:${emailAddress}`,
    label: "Pošaljite email Igraonici Kofer",
    action: "Napišite email",
    iconBg: "bg-[#F8E0D6]",
    iconColor: "text-[#C8755B]",
  },
];

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Navbar />

      {/* Hero section */}
      <section className="relative overflow-hidden bg-[#314653] px-5 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E6A18C] sm:text-base">
            Igraonica Kofer
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hajde da proslavimo zajedno!
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Tu smo da odgovorimo na vaša pitanja i pomognemo vam da organizujete
            rođendan za pamćenje. Izaberite način koji vam najviše odgovara i
            javite nam se!
          </p>
        </div>

        <WaveDivider fill="#F8F8F8" />
      </section>

      {/* Contact options section */}
      <section className="relative overflow-hidden bg-[#F8F8F8] px-5 pb-24 pt-10 sm:px-6 sm:pb-28 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
              Kontaktirajte nas
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#314653] sm:text-4xl">
              Tu smo za vas
            </h2>

            <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg">
              Rado ćemo vam pomoći da pronađete idealan termin i paket za
              proslavu vašeg mališana.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {contactOptions.map(
              ({
                Icon,
                title,
                description,
                href,
                label,
                action,
                external,
                iconBg,
                iconColor,
              }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col items-center rounded-3xl border border-[#E8E5E2] bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89681] focus-visible:ring-offset-4 sm:px-7 sm:py-10"
                >
                  <span
                    className={`flex size-16 items-center justify-center rounded-2xl ${iconBg} ${iconColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon aria-hidden="true" size={28} />
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-[#314653]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#666666] sm:text-base">
                    {description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#C8755B] transition-colors group-hover:text-[#314653]">
                    {action}
                    <FaArrowRight
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                      size={13}
                    />
                  </span>
                </a>
              ),
            )}
          </div>
        </div>

        <WaveDivider fill="#F3EAE5" />
      </section>

      {/* Packages call-to-action section */}
      <section className="bg-[#F3EAE5] px-5 pb-16 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C8755B]">
            Vaša proslava počinje ovde
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#314653] sm:text-4xl">
            Pronađite paket za vaš poseban dan
          </h2>

          <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg">
            Svaka proslava je posebna. Pogledajte naše pakete i pronađite opciju
            koja najviše odgovara vašim željama.
          </p>

          <ButtonLink href="/Paketi" className="mt-7">
            Pogledajte pakete
          </ButtonLink>
        </div>
      </section>

      {/* Bottom wave divider */}
      <div className="relative h-[45px] bg-[#F3EAE5] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#314653" />
      </div>

      <Footer />
    </main>
  );
}
