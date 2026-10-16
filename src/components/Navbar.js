"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaEnvelope,
  FaInstagram,
  FaTimes,
  FaArrowUp,
} from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Početna" },
  { to: "/Home2", label: "Home2" },
  // { to: "/O_nama", label: "O Koferu" },
  // { to: "/Paketi", label: "Paketi" },
  { to: "/Kontakt", label: "Kontakt" },
];

function ContactIcons({ onClick, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      <Link
        href="/Kontakt"
        onClick={onClick}
        aria-label="Kontakt putem emaila"
        className="inline-flex items-center justify-center text-[#314653] transition duration-200 hover:scale-110 hover:text-[#D89681]"
      >
        <FaEnvelope size={22} />
      </Link>
      <a
        href="https://www.instagram.com/kofer.rodjendani/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label="Instagram profil Kofer"
        className="inline-flex items-center justify-center text-[#314653] transition duration-200 hover:scale-110 hover:text-[#D89681]"
      >
        <FaInstagram size={22} />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
      setShowScrollToTop(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeMenu = () => setNav(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-background-secondary shadow-md z-50 h-[80px] lg:h-[100px] lg:flex lg:justify-between lg:items-center lg:px-20 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Navbar Container */}
        <div className="relative flex justify-center items-center h-full px-6 lg:px-0">
          <ContactIcons
            onClick={closeMenu}
            className="absolute left-6 top-1/2 -translate-y-1/2 lg:hidden"
          />

          {/* Kofer Logo */}
          <Link
            href="/"
            aria-label="Kofer - početna stranica"
            onClick={closeMenu}
            className="flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/kofer_logo.svg"
              alt="Kofer logo"
              width={100}
              height={60}
              priority
              className="block  lg:h-10 w-22 object-contain"
            />
          </Link>

          {/* Hamburger Icon */}
          <button
            type="button"
            onClick={() => setNav(!nav)}
            className="absolute right-6 top-1/2 -translate-y-1/2 lg:hidden z-50 cursor-pointer text-[#314653] transition duration-200 hover:scale-110 hover:text-[#D89681]"
            aria-controls="mobile-menu"
            aria-expanded={nav}
            aria-label={nav ? "Zatvori meni" : "Otvori meni"}
          >
            {nav ?
              <FaTimes size={20} />
            : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-between gap-6 text-lg lg:text-xl text-[#314653]">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                href={to}
                className="hover:text-[#D89681] transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Icons */}
        <ContactIcons className="hidden lg:flex" />

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          aria-hidden={!nav}
          className={`fixed top-[80px] left-0 z-40 flex max-h-[calc(100dvh-80px)] w-full flex-col items-center overflow-hidden bg-background-secondary transition-[height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
            nav ?
              "h-[calc(100dvh-80px)] opacity-100"
            : "h-0 opacity-0 pointer-events-none"
          }`}
        >
          {/* Mobile Menu Links */}
          <ul
            className={`my-auto flex flex-col items-center gap-6 text-xl text-[#314653] transition-[transform,opacity] duration-500 ease-out ${
              nav ? "translate-y-0 opacity-100 delay-100" : "-translate-y-4 opacity-0"
            }`}
          >
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  onClick={closeMenu}
                  className="hover:text-[#D89681] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}

          </ul>
  
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="group fixed bottom-5 right-5 p-3 bg-[#314653] text-[#FFF8F0] rounded-full shadow-lg hover:bg-[#D89681] transition-colors duration-200 cursor-pointer z-40"
          aria-label="Vrati se na vrh stranice"
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
