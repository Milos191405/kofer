import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaViber,
  FaExternalLinkAlt,
} from "react-icons/fa";

const address = "Kosančić Ivana 6, 21000 Novi Sad";
const mapQuery = encodeURIComponent(address);
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const mobilePhone = "+381695547039";
const landlinePhone = "+38121547039";

const contactDetails = [
  {
    Icon: FaMapMarkerAlt,
    label: "Adresa",
    value: address,
    href: mapUrl,
    external: true,
  },
  {
    Icon: FaPhone,
    label: "Telefon",
    phones: [
      { display: "021/547-039", href: `tel:${landlinePhone}` },
      { display: "069/5547-039", href: `tel:${mobilePhone}` },
    ],
  },
  {
    Icon: FaEnvelope,
    label: "E-mail",
    value: "igralistenovisad@gmail.com",
    href: "mailto:igralistenovisad@gmail.com",
  },
  {
    Icon: FaClock,
    label: "Radno vreme",
    value: "Svakog dana, 9–21h",
  },
];

const socialLinks = [
  {
    Icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/igralistens/",
    external: true,
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/kofer.rodjendani/",
    external: true,
  },
  {
    Icon: FaViber,
    label: "Viber",
    href: `viber://chat?number=${encodeURIComponent(mobilePhone)}`,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#314653] text-white">
      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-12 sm:px-6 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Kontaktne informacije */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D89681] sm:text-sm">
              Posetite nas
            </p>

            <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
              Tu smo za vašu sledeću proslavu!
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/70 sm:text-base">
              Planirate rođendan ili posebnu proslavu? Javite nam se i zajedno
              ćemo osmisliti nezaboravan dan za slavljenika i društvo.
            </p>

            <address className="not-italic">
              <ul className="mt-8 space-y-5">
                {contactDetails.map(
                  ({ Icon, label, value, href, external, phones }) => (
                    <li key={label} className="group flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#E6A18C] transition duration-200 group-hover:scale-110 group-hover:bg-[#D89681] group-hover:text-white">
                        <Icon aria-hidden="true" size={17} />
                      </span>

                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="text-sm font-semibold text-white">
                          {label}
                        </p>

                        {phones ?
                          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6 text-white/75 sm:text-base">
                            {phones.map((phone, index) => (
                              <span
                                key={phone.href}
                                className="inline-flex items-center gap-2"
                              >
                                <a
                                  href={phone.href}
                                  className="transition-colors hover:text-[#E6A18C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6A18C]"
                                >
                                  {phone.display}
                                </a>
                                {index < phones.length - 1 && (
                                  <span
                                    aria-hidden="true"
                                    className="text-white/40"
                                  >
                                    ·
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        : href ?
                          <a
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="mt-1 inline-block break-words text-sm leading-6 text-white/75 transition-colors hover:text-[#E6A18C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6A18C] sm:text-base"
                          >
                            {value}
                          </a>
                        : <p className="mt-1 text-sm leading-6 text-white/75 sm:text-base">
                            {value}
                          </p>
                        }
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </address>
          </div>

          {/* Mapa */}
          <div className="min-w-0">
            <div className="group mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-lg font-bold text-white sm:text-xl">
                  Kako do nas?
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Posetite nas u Novom Sadu.
                </p>
              </div>

              <FaMapMarkerAlt
                aria-hidden="true"
                className="shrink-0 text-[#D89681] transition-transform duration-200 group-hover:scale-110"
                size={23}
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl">
              <iframe
                title={`Mapa lokacije igraonice Kofer: ${address}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="block h-64 w-full sm:h-80 lg:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-semibold text-[#314653] transition-colors hover:bg-[#F8E9E3]"
              >
                <FaMapMarkerAlt
                  aria-hidden="true"
                  className="text-[#D89681] transition-transform duration-200 group-hover:scale-110"
                />
                Pronađite nas na mapi
                <FaExternalLinkAlt
                  aria-hidden="true"
                  className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5"
                  size={12}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-7 text-center">
          <p className="text-base font-semibold text-white">Povežimo se!</p>
          <p className="mt-1 text-sm leading-6 text-white/60">
            Zapratite nas i pogledajte naše najlepše trenutke.
          </p>

          <ul className="mt-4 flex items-center justify-center gap-3">
            {socialLinks.map(({ Icon, label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D89681] hover:bg-[#D89681] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D89681]"
                >
                  <Icon
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:scale-110"
                    size={18}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Donji deo footera */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-xs leading-5 text-white/55 sm:text-sm md:text-left">
            © {new Date().getFullYear()} Igraonica Kofer. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
