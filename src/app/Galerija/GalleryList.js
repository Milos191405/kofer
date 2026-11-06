import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { galleryAlbums } from "./galleryData";

export default function GalleryList() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
      {galleryAlbums.map((album, index) => (
        <Link
          key={album.slug}
          href={`/Galerija/${album.slug}`}
          className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Album image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={album.cover}
              alt={album.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#314653]/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Album information */}
          <div className="p-6 sm:p-7">
            <h3 className="text-xl font-bold text-[#314653] transition-colors duration-300 group-hover:text-[#D89681]">
              {album.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#666666]">
              {album.description}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-[#F0E7E2] pt-5">
              <span className="text-sm font-semibold text-[#314653]">
                Pogledajte album
              </span>

              <span className="flex size-9 items-center justify-center rounded-full bg-[#F3EAE5] text-[#314653] transition-all duration-300 group-hover:bg-[#314653] group-hover:text-white">
                <FaArrowRight size={14} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
