const repeatImages = (folder) => {
  const images = [
    "mobilni.jpg",
    "1.jpg",
    "IMG_8305.JPG",
    "kofer_home_page.jpg",
  ];

  return Array.from({ length: 20 }, (_, index) => {
    return `/images/galerija/${folder}/${images[index % images.length]}`;
  });
};

export const galleryAlbums = [
  {
    slug: "deciji-rodjendani",
    title: "Dečiji rođendani",
    description:
      "Rođendani ispunjeni osmesima, igrom i nezaboravnim trenucima.",
    cover: "/images/galerija/rodjendani/mobilni.jpg",
    images: repeatImages("rodjendani"),
  },
  {
    slug: "tematske-proslave",
    title: "Tematske proslave",
    description:
      "Zavirite u naše tematske proslave i otkrijte posebne detalje.",
    cover: "/images/galerija/tematske/mobilni.jpg",
    images: repeatImages("tematske"),
  },
  {
    slug: "igraonica",
    title: "Naša igraonica",
    description:
      "Upoznajte prostor u kojem mališani istražuju, igraju se i druže.",
    cover: "/images/galerija/igraonica/mobilni.jpg",
    images: repeatImages("igraonica"),
  },
  {
    slug: "dekoracija-i-detalji",
    title: "Dekoracija i detalji",
    description:
      "Male stvari koje prave veliku razliku i daju poseban pečat svakoj proslavi.",
    cover: "/images/galerija/dekoracija/mobilni.jpg",
    images: repeatImages("dekoracija"),
  },
];
