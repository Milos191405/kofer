import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  fallback: ["system-ui", "Arial"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["cursive", "system-ui"],
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
      <body
        className={`${baloo.variable} ${nunito.variable} antialiased bg-[#fff8f0] text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
