"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";

const NAV_LINKS = [
  { to: "/", label: "Pocetna" },
  { to: "/O_nama", label: "O koferu" },
  { to: "/Paketi", label: "Paketi" },
  { to: "/Blog", label: "Blog" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Scroll funkcionalnost
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Navbar hide/show
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Scroll to top dugme
      setShowScrollToTop(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-background shadow-lg z-50 h-[80px] lg:h-[100px] transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        {/* Container */}
        <div className="relative flex items-center justify-center h-full px-6 lg:px-20 lg:justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Pocetna stranica"
            className="flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/kofer_logo.svg"
              alt="Kofer logo"
              width={120}
              height={50}
              priority
              className="w-auto h-12 lg:h-14"
            />
          </Link>

          {/* Hamburger / X */}
          <button
            onClick={() => setNav(!nav)}
            className="absolute right-6 top-1/2 -translate-y-1/2 lg:hidden z-50 cursor-pointer text-foreground hover:text-text-secondary transition-colors duration-200"
            aria-controls="mobile-menu"
            aria-expanded={nav ? "true" : "false"}
            aria-label="Toggle navigation menu"
          >
            {nav ?
              <FaTimes className="text-[20px] translate-y-[1px]" />
            : <FaBars className="text-[20px]" />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-between gap-8 text-lg">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  className="hover:text-text-secondary transition-colors duration-200"
                  aria-label={label === "Pocetna" ? "Pocetna stranica" : label}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Kontakt */}
          <Link href="/Kontakt" className="hidden lg:flex">
            <button className="border-2 border-text-secondary px-4 py-2 text-text-secondary rounded-xl bg-transparent hover:bg-text-secondary hover:text-background transition-colors duration-200 cursor-pointer font-medium">
              Kontakt
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 w-full h-screen bg-background flex flex-col items-center transition-all duration-500 ease-in-out z-40
          ${nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
        >
          {/* Mobile Logo */}
          <Link
            href="/"
            aria-label="Pocetna stranica"
            className="mt-6 text-center"
            onClick={() => setNav(false)}
          >
            <Image
              src="/kofer_logo.svg"
              alt="Kofer logo"
              width={120}
              height={50}
              priority
              className="w-auto h-12"
            />
          </Link>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-6 text-xl text-foreground mt-auto mb-auto items-center">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to} onClick={() => setNav(false)}>
                <Link
                  href={to}
                  className="hover:text-text-secondary transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Mobile Kontakt */}
            <li className="lg:hidden mt-4" onClick={() => setNav(false)}>
              <Link href="/Kontakt">
                <button
                  className="border-2 border-text-secondary px-5 py-2 text-text-secondary rounded-2xl bg-background-secondary hover:bg-text-secondary hover:text-background transition-colors duration-200 cursor-pointer"
                  aria-label="Kontakt"
                >
                  Kontakt
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Scroll To Top */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-text-primary text-background rounded-full shadow-lg hover:bg-orange-400 transition duration-200 cursor-pointer z-40"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
