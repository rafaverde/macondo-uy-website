"use client";

import { cn } from "@/lib/utils";
import { TeamMember } from "@/types";
import Image from "next/image";
import { useState } from "react";

import PhotoAlbum, { Photo, type RenderPhoto } from "react-photo-album";
import "react-photo-album/rows.css";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

interface CustomPhoto extends Photo {
  title: string;
  position: string;
}

const CustomRenderPhoto: RenderPhoto<CustomPhoto> = (_, context) => {
  const { width, photo, height } = context;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
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
              sizes={photo.alt}
              onLoad={() => setIsLoaded(true)}
              className={cn(
                "object-cover",
                "transition-opacity duration-700 ease-in-out",
                isLoaded ? "opacity-100" : "opacity-0",
              )}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-primary font-bold">{photo.title}</p>
          <p className="text-xs">{photo.position}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
    title: member.title,
    position: member.teamMemberFg.position,
  }));

  return (
    <PhotoAlbum
      photos={photos}
      layout="rows"
      targetRowHeight={100}
      rowConstraints={{ maxPhotos: 5 }}
      spacing={10}
      render={{ photo: CustomRenderPhoto }}
    />
  );
}
