
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import WaveDivider from "./WaveDivider";
import {
  FaBars,
  FaEnvelope,
  FaInstagram,
  FaTimes,
  FaArrowUp,
} from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Početna" },
  { to: "/O_koferu", label: "O Koferu" },
  { to: "/Paketi", label: "Paketi" },
  { to: "/Galerija", label: "Galerija" },
  { to: "/Kontakt", label: "Kontakt" },
];

function ContactIcons({ onClick, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 sm:gap-5 ${className}`}
    >
      <Link
        href="/Kontakt"
        onClick={onClick}
        aria-label="Kontakt putem emaila"
        className="inline-flex items-center justify-center text-[#314653] transition duration-200 hover:scale-110 hover:text-[#D89681]"
      >
        <FaEnvelope className="size-5 sm:size-[22px] lg:size-6" />
      </Link>

      <a
        href="https://www.instagram.com/kofer.rodjendani/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label="Instagram profil Kofer"
        className="inline-flex items-center justify-center text-[#314653] transition duration-200 hover:scale-110 hover:text-[#D89681]"
      >
        <FaInstagram className="size-5 sm:size-[22px] lg:size-6" />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const prevScrollPos = useRef(0);

  // Handle navbar visibility and scroll-to-top button visibility.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(
        currentScrollPos < 10 || prevScrollPos.current > currentScrollPos
      );

      prevScrollPos.current = currentScrollPos;
      setShowScrollToTop(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu when the navbar hides.
  useEffect(() => {
    if (!visible) {
      setNav(false);
    }
  }, [visible]);

  // Close the mobile menu after selecting a link.
  const closeMenu = () => {
    setNav(false);
  };

  // Toggle page scrolling while the mobile menu is open.
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setNav(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Scroll smoothly to the top of the page.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Main navigation */}
      <nav
        className={`fixed left-0 top-0 z-50 h-[72px] w-full bg-background-secondary shadow-md transition-transform duration-300 sm:h-[80px] lg:flex lg:h-[100px] lg:items-center lg:justify-between lg:px-20 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo and mobile controls */}
        <div className="relative flex h-full items-center justify-center px-6 lg:px-0">
          {/* Hamburger button on the left */}
          <button
            type="button"
            onClick={() => setNav((current) => !current)}
            aria-controls="mobile-menu"
            aria-expanded={nav}
            aria-label={nav ? "Zatvori meni" : "Otvori meni"}
            className="absolute left-5 top-1/2 z-50 -translate-y-1/2 text-[#314653] transition duration-200 hover:scale-110 hover:text-[#D89681] lg:hidden"
          >
            {nav ? (
              <FaTimes className="size-[22px] sm:size-6" />
            ) : (
              <FaBars className="size-[22px] sm:size-6" />
            )}
          </button>

          {/* Centered logo on mobile */}
          <Link
            href="/"
            aria-label="Kofer - početna stranica"
            onClick={closeMenu}
            className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center transition-opacity duration-200 hover:opacity-80 lg:static lg:translate-x-0"
          >
            <Image
              src="/kofer_logo.svg"
              alt="Kofer logo"
              width={128}
              height={77}
              priority
              className="block h-auto w-[88px] object-contain sm:w-[105px] lg:w-[128px]"
            />
          </Link>

          {/* Contact icons on the right on mobile */}
          <ContactIcons
            onClick={closeMenu}
            className="absolute right-5 top-1/2 -translate-y-1/2 lg:hidden"
          />
        </div>

        {/* Desktop navigation links */}
        <ul className="hidden items-center justify-between gap-6 text-lg text-[#314653] lg:flex lg:text-xl">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                href={to}
                className="transition-colors duration-200 hover:text-[#D89681]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact icons on desktop */}
        <ContactIcons className="hidden lg:flex" />

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          aria-hidden={!nav}
          inert={!nav}
          className={`fixed left-0 top-[72px] z-40 flex w-full flex-col overflow-hidden bg-background-secondary transition-[height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:top-[80px] lg:hidden ${
            nav
              ? "h-[calc(100dvh-72px)] opacity-100 sm:h-[calc(100dvh-80px)]"
              : "pointer-events-none h-0 opacity-0"
          }`}
        >
          {/* Shape transition directly below the navbar */}
          <div
            aria-hidden="true"
            className={`pointer-events-none relative h-[54px] w-full shrink-0 transition-opacity duration-500 ${
              nav ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            <WaveDivider fill="#E5ECE8" />
          </div>

          {/* Mobile navigation links */}
          <ul
            className={`relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-6 bg-[#E5ECE8] py-6 text-xl text-[#314653] transition-[transform,opacity] duration-500 ease-out ${
              nav
                ? "translate-y-0 opacity-100 delay-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  onClick={closeMenu}
                  tabIndex={nav ? 0 : -1}
                  className="inline-block px-6 py-1 transition-colors duration-200 hover:text-[#D89681]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mirrored wave marking the end of the navigation area */}
          <div
            aria-hidden="true"
            className="relative h-[45px] w-full shrink-0 bg-background-secondary"
          >
            <WaveDivider fill="#E5ECE8" flipY />
          </div>

          {/* Mobile call to action */}
          <div
            className={`relative z-10 mt-auto w-full shrink-0 text-center transition-all duration-500 ${
              nav
                ? "translate-y-0 opacity-100 delay-150"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="bg-background-secondary px-6 pb-8 pt-2">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C7836E]">
                Poseban dan počinje ovde
              </p>
              <Link
                href="/Kontakt"
                onClick={closeMenu}
                tabIndex={nav ? 0 : -1}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#314653] px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#D89681]"
              >
                Zakažite proslavu
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Vrati se na vrh stranice"
          className="group fixed bottom-5 right-5 z-40 rounded-full bg-[#314653] p-3 text-[#FFF8F0] shadow-lg transition-colors duration-200 hover:bg-[#D89681]"
        >
          <FaArrowUp
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
            size={20}
          />
        </button>
      )}
    </>
  );
}
