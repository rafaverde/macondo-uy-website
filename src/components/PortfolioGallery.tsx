"use client";

import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageProps {
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
  };
}

const breakpointColumnsObj = {
  default: 3, // 3 colunas por padrão
  1024: 3, // 3 colunas em telas com 1024px ou mais
  768: 2, // 2 colunas em telas com 768px ou mais
  640: 1, // 1 coluna em telas com 640px ou mais
};

export function PortfolioGallery({ images }: { images: ImageProps[] }) {
  const [index, setIndex] = useState(-1);
  const slides = images.map((image) => ({
    src: image.sourceUrl,
    alt: image.altText,
  }));

  return (
    <section
      id="image_gallery"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        <span className="text-xs uppercase">Creación//</span>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-4"
          columnClassName=""
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative mb-4 cursor-pointer"
              onClick={() => setIndex(index)}
            >
              <Image
                src={image.sourceUrl}
                alt={image.altText}
                width={image.mediaDetails?.width}
                height={image.mediaDetails?.height}
              />
            </div>
          ))}
        </Masonry>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
          index={index}
        />
      </div>
    </section>
  );
}
