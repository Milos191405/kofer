import { Fustat, Nunito } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fustat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = "https://koferns.rs";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Igraonica Kofer Novi Sad | Rođendani i proslave za decu 6+",
    template: "%s | Igraonica Kofer Novi Sad",
  },
  description:
    "Igraonica i rođendaonica Kofer u Novom Sadu (Kosančić Ivana 6) – prostor za aktivnu igru, tematske žurke i nezaboravne rođendane za decu uzrasta 6+ godina.",
  keywords: [
    "igraonica Novi Sad",
    "rođendaonica Novi Sad",
    "igraonica Kofer",
    "dečiji rođendani Novi Sad",
    "igraonica za decu 6+ godina",
    "proslava rođendana Novi Sad",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/kofer_logo.svg",
    apple: "/kofer_logo.svg",
  },
  openGraph: {
    title: "Igraonica Kofer Novi Sad | Rođendani i proslave za decu 6+",
    description:
      "Prostor u Novom Sadu stvoren za energiju, druženje, tematske žurke i rođendane koje deca od 6+ godina pamte.",
    url: siteUrl,
    siteName: "Igraonica Kofer Novi Sad",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/images/kofer_home_page.jpg",
        width: 1200,
        height: 630,
        alt: "Igraonica Kofer Novi Sad – prostor za rođendane i igru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Igraonica Kofer Novi Sad | Rođendani za decu 6+",
    description:
      "Mesto u Novom Sadu za aktivnu igru, druženje i rođendanske proslave dece uzrasta 6+ godina.",
    images: ["/images/kofer_home_page.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Igraonica Kofer",
  description:
    "Dečija igraonica i rođendaonica u Novom Sadu za decu uzrasta 6+ godina.",
  url: siteUrl,
  telephone: "+381695547039",
  email: "igralistenovisad@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kosančić Ivana 6",
    addressLocality: "Novi Sad",
    postalCode: "21000",
    addressCountry: "RS",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/kofer.rodjendani/",
    "https://www.facebook.com/igralistens/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sr"
      className={`${fustat.variable} ${nunito.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
