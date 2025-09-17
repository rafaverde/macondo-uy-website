"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

import PhotoAlbum, { type RenderPhoto } from "react-photo-album";
import "react-photo-album/rows.css";

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

const CustomRenderPhoto: RenderPhoto = (props, context) => {
  const { onClick } = props;
  const { height, photo, width } = context;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{ width, height, position: "relative", overflow: "hidden" }}
      className="bg-muted"
      onClick={onClick}
    >
      <Image
        fill
        src={photo.src}
        alt={photo.alt || ""}
        title={photo.title}
        sizes={photo.title}
        onLoadingComplete={() => setIsLoaded(true)}
        className={cn(
          "object-cover",
          "transition-opacity duration-700 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
};

export function PortfolioGallery({ images }: { images: ImageProps[] }) {
  const [index, setIndex] = useState(-1);

  const photos = images.map((image) => ({
    src: image.sourceUrl,
    alt: image.altText,
    width: image.mediaDetails?.width || 800,
    height: image.mediaDetails?.height || 600,
  }));

  const slides = photos;

  return (
    <section
      id="image_gallery"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        <span className="text-xs uppercase">Creación//</span>

        <div className="mt-8">
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={400}
            spacing={10}
            onClick={({ index }) => setIndex(index)}
            render={{ photo: CustomRenderPhoto }}
          />
        </div>

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
