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

export const metadata = {
  title: "Dečija igraonica Kofer | Rođendani i proslave",
  description:
    "Igraonica Kofer je mesto za nezaboravne dečije rođendane, tematske proslave i igru. Pogledajte naše pakete i rezervišite termin.",

  icons: {
    icon: "/kofer_logo.svg",
  },

  openGraph: {
    title: "Dečija igraonica Kofer",
    description: "Mesto za nezaboravne dečije rođendane, igru i druženje.",
    url: "https://kofer.vercel.app",
    siteName: "Igraonica Kofer",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/images/kofer_home_page.jpg",
        width: 1200,
        height: 630,
        alt: "Dečija igraonica Kofer",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={`${fustat.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
