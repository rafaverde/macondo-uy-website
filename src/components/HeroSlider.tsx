"use client";

import React, { useEffect, useState } from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Slide } from "@/types";
import Autoplay from "embla-carousel-autoplay";

export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const activeSlides = slides.filter((slide) => slide.slidesFg.active === true);
  const sortedSlides = activeSlides.sort(
    (a, b) => a.slidesFg.order - b.slidesFg.order,
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 8000, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent>
          {sortedSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[670px] w-full">
              <Image
                src={slide.slidesFg.image.node.sourceUrl}
                alt={
                  slide.slidesFg.image.node.altText ||
                  "Imagem de fundo do slide"
                }
                fill
                className="object-cover"
                priority={index === 0}
              />

              <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-4">
                <div className="space-y-2 px-4 text-white md:max-w-[60%] md:space-y-5">
                  <h2 className="text-xs">{slide.slidesFg.caption}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: slide.slidesFg.title }}
                    className="cms-content text-4xl font-bold md:text-6xl"
                  ></div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: slide.slidesFg.description,
                    }}
                    className="text-secondary"
                  ></div>

                  <Button asChild size="xl" className="mt-5">
                    <Link href={slide.slidesFg.buttonLink} target="_blank">
                      {slide.slidesFg.buttonText}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {slides.length > 0 && (
          <>
            <CarouselPrevious className="bg-background/20 hover:bg-primary/70 absolute left-10 hidden h-12 w-12 cursor-pointer border-none transition-all duration-300 md:flex" />
            <CarouselNext className="bg-background/20 hover:bg-primary/70 absolute right-10 hidden h-12 w-12 cursor-pointer border-none transition-all duration-300 md:flex" />
          </>
        )}
      </Carousel>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {sortedSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${index === current - 1 ? "w-4 bg-white" : "bg-white/50"}`}
            aria-label={`Ir para o slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
