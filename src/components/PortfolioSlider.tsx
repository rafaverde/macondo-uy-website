import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { PortfolioCard } from "./PortfolioCard";
import { PortifolioCase } from "@/lib/types";

export function PortfolioSlider({
  portfolioCases,
}: {
  portfolioCases: PortifolioCase[];
}) {
  return (
    <div className="relative mt-10">
      <Carousel opts={{ align: "start", loop: true }}>
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
        <CarouselPrevious className="absolute top-1/2 left-[-20px] -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-[-20px] -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
