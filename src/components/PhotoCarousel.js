"use client";

import { useState, useRef } from "react";
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
  const touchStartX = useRef(null);

  if (!images || images.length === 0) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      showPrevious();
    } else if (event.key === "ArrowRight") {
      showNext();
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    // Minimalni pomak od 40px za detekciju prevlačenja prstom
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    touchStartX.current = null;
  };

  return (
    <div
      role="region"
      aria-label="Fotografije igraonice Kofer"
      aria-roledescription="karusel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="mx-auto max-w-5xl focus-visible:outline-none"
    >
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-background-secondary shadow-sm select-none sm:aspect-[16/9] sm:rounded-3xl"
      >
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <Image
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              aria-hidden={!isActive}
              className={`object-cover transition-all duration-500 ease-out group-hover:scale-[1.02] ${
                isActive ? "z-10 opacity-100" : (
                  "pointer-events-none z-0 opacity-0"
                )
              }`}
            />
          );
        })}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Prikaži prethodnu fotografiju"
              className="absolute left-3 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#314653] shadow-md backdrop-blur-xs transition duration-200 hover:scale-110 hover:bg-[#D89681] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:left-5 sm:size-12"
            >
              <FaChevronLeft aria-hidden="true" size={16} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Prikaži sledeću fotografiju"
              className="absolute right-3 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#314653] shadow-md backdrop-blur-xs transition duration-200 hover:scale-110 hover:bg-[#D89681] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-5 sm:size-12"
            >
              <FaChevronRight aria-hidden="true" size={16} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            {images.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${image.src}-dot-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Prikaži fotografiju ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-7 bg-[#D89681]" : (
                      "w-2.5 bg-[#314653]/25 hover:bg-[#314653]/50"
                    )
                  }`}
                />
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="text-center text-xs font-semibold text-[#666666] sm:text-sm"
          >
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
}
