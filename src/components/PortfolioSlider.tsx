"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { PortfolioCard } from "./PortfolioCard";
import { PortifolioCase } from "@/lib/types";
import Autoplay from "embla-carousel-autoplay";

export function PortfolioSlider({
  portfolioCases,
}: {
  portfolioCases: PortifolioCase[];
}) {
  return (
    <div className="relative mt-10">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
      >
        <CarouselContent className="-ml-4 pb-6">
          {portfolioCases.map((caseItem) => (
            <CarouselItem
              key={caseItem.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <PortfolioCard portfolioCase={caseItem} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-primary/70 absolute top-1/2 left-[-20px] hidden -translate-y-1/2 md:flex" />
        <CarouselNext className="hover:bg-primary/70 absolute top-1/2 right-[-20px] hidden -translate-y-1/2 md:flex" />
      </Carousel>
    </div>
  );
}
