import { Fustat, Nunito } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-fustat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Igraonica Kofer",
  description: "Igraonica Kofer - mesto gde avantura počinje",
  icons: {
    icon: "/kofer_logo.svg",
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
