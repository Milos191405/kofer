"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import ButtonLink from "@/components/ButtonLink";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { galleryAlbums } from "../galleryData";

export default function GalleryAlbumPage() {
const params = useParams();
const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

const album = galleryAlbums.find((item) => item.slug === slug);

  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage === null) return;

    setSelectedImage((current) => (current + 1) % album.images.length);
  }, [selectedImage, album]);

  const previousImage = useCallback(() => {
    if (selectedImage === null) return;

    setSelectedImage(
      (current) => (current - 1 + album.images.length) % album.images.length,
    );
  }, [selectedImage, album]);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeLightbox, nextImage, previousImage]);

  if (!album) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      {/* Hero section */}
      <section className="relative isolate h-[min(500px,85svh)] min-h-[400px] w-full overflow-hidden sm:h-[480px] lg:h-[550px]">
        <Image
          src={album.cover}
          alt={album.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#314653]/80 via-[#314653]/45 to-[#314653]/10" />

        <div className="absolute inset-x-5 bottom-24 z-10 mx-auto max-w-6xl sm:inset-x-8 sm:bottom-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E6A18C]">
              Galerija Kofer
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {album.title}
            </h1>

            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
              {album.description}
            </p>
          </div>
        </div>

        <WaveDivider fill="#f8f8f8" />
      </section>

      {/* Gallery */}
      <section className="bg-background-secondary px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
                Naše fotografije
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#314653] sm:text-3xl">
                Trenuci za pamćenje
              </h2>
            </div>

            <Link
              href="/Galerija"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#314653] transition-colors hover:text-[#D89681]"
            >
              <FaArrowLeft size={13} />
              Nazad na galeriju
            </Link>
          </div>

          {/* Masonry gallery */}
          <div className=" gap-3 sm:columns-3 sm:gap-5 lg:columns-4">
            {album.images.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                aria-label={`Uvećaj fotografiju ${index + 1}`}
                className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left sm:mb-5"
              >
                <Image
                  src={src}
                  alt={`${album.title} - fotografija ${index + 1}`}
                  width={800}
                  height={1000}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          {album.images.length === 0 && (
            <p className="py-16 text-center text-[#666666]">
              Fotografije će uskoro biti dodate.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pregled fotografije"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#172630]/95 p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Zatvori fotografiju"
            className="absolute right-5 top-5 z-20 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <FaTimes size={20} />
          </button>

          {/* Previous image */}
          {album.images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Prethodna fotografija"
              className="absolute left-3 z-20 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <FaArrowLeft />
            </button>
          )}

          {/* Selected image */}
          <div
            className="relative h-[75vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={album.images[selectedImage]}
              alt={`${album.title} - fotografija ${selectedImage + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Next image */}
          {album.images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Sledeća fotografija"
              className="absolute right-3 z-20 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <FaArrowRight />
            </button>
          )}

          {/* Image counter */}
          <div className="absolute bottom-5 text-sm font-medium text-white/80">
            {selectedImage + 1} / {album.images.length}
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="bg-[#F3EAE5] px-5 py-16 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D89681]">
            Postanite deo naše priče
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#314653] sm:text-4xl">
            I vaša proslava može biti posebna uspomena!
          </h2>

          <p className="mt-4 text-base leading-7 text-[#666666] sm:text-lg">
            Radujemo se što ćemo zajedno stvarati još lepih trenutaka.
          </p>

          <ButtonLink href="/Kontakt" tone="peach" className="mt-7">
            Zakažite proslavu
          </ButtonLink>
        </div>
      </section>

      {/* Footer wave */}
      <div className="relative h-[45px] bg-[#F3EAE5] sm:h-[70px] lg:h-[90px]">
        <WaveDivider fill="#314653" />
      </div>

      <Footer />
    </main>
  );
}