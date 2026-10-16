"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const defaultImages = [
  {
    src: "/images/kofer_home_page.jpg",
    alt: "Prostor igraonice Kofer za dečju igru",
  },
  {
    src: "/images/1.jpg",
    alt: "Kutak za druženje i proslave u igraonici Kofer",
  },
];

export default function PhotoCarousel({ images = defaultImages }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const activeImage = images[activeIndex];

  return (
    <div
      role="region"
      aria-label="Fotografije igraonice Kofer"
      aria-roledescription="karusel"
      className="mx-auto max-w-5xl"
    >
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-background-secondary shadow-sm sm:aspect-[16/9] sm:rounded-3xl">
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Prikaži prethodnu fotografiju"
              className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#314653] shadow-md transition duration-200 hover:scale-110 hover:bg-[#D89681] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:left-5 sm:size-12"
            >
              <FaChevronLeft aria-hidden="true" size={16} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Prikaži sledeću fotografiju"
              className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#314653] shadow-md transition duration-200 hover:scale-110 hover:bg-[#D89681] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-5 sm:size-12"
            >
              <FaChevronRight aria-hidden="true" size={16} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <p
          aria-live="polite"
          className="mt-4 text-center text-sm font-semibold text-[#666666]"
        >
          {activeIndex + 1} / {images.length}
        </p>
      )}
    </div>
  );
}
