import HomeClient from "./HomeClient";

// SEO tagovi za početnu stranicu
export const metadata = {
  title: {
    absolute:
      "Igraonica Kofer Novi Sad | Rođendani i proslave za decu 6+ godina",
  },
  description:
    "Igraonica Kofer u Novom Sadu je prostor za rođendane, aktivnu igru i druženje dece od 6+ godina. Ako ste prerasli Igralište, vreme je za sledeće putovanje!",
  keywords: [
    "dečija igraonica novi sad",
    "igraonica kofer",
    "igraonica za decu 6+ novi sad",
    "proslava dečijih rođendana novi sad",
    "rođendaonica novi sad",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Igraonica Kofer Novi Sad | Rođendani i proslave za decu 6+",
    description:
      "Ako ste prerasli Igralište, vreme je za sledeće putovanje! Prostor u Novom Sadu za rođendane, igru i druženje dece od 6+ godina.",
    url: "/",
    siteName: "Igraonica Kofer",
    images: [
      {
        url: "/images/kofer_home_page.jpg",
        width: 1200,
        height: 630,
        alt: "Igraonica Kofer Novi Sad – prostor za rođendane i igru (6+)",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
