"use client";

import { cn } from "@/lib/utils";
import { TeamMember } from "@/types";
import Image from "next/image";
import { useState } from "react";

import PhotoAlbum, { type RenderPhoto } from "react-photo-album";
import "react-photo-album/rows.css";

const CustomRenderPhoto: RenderPhoto = (_, context) => {
  const { width, photo, height } = context;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      key={photo.alt}
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
      }}
      className={cn("bg-muted rounded-2xl", !isLoaded && "animate-pulse")}
    >
      <Image
        fill
        src={photo.src}
        alt={photo.alt || ""}
        title={photo.alt || ""}
        sizes={photo.alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "object-cover",
          "transition-opacity duration-700 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
};

export function TeamMembersGrid({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  const photos = teamMembers.map((member) => ({
    src: member.featuredImage.node.sourceUrl,
    alt: member.featuredImage.node.altText,
    width: member.featuredImage.node.mediaDetails.width || 500,
    height: member.featuredImage.node.mediaDetails.height || 500,
  }));

  return (
    <PhotoAlbum
      photos={photos}
      layout="rows"
      targetRowHeight={100}
      spacing={10}
      render={{ photo: CustomRenderPhoto }}
    />
  );
}
