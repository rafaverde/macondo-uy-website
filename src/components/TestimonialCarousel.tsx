"use client";

import { Testimonial } from "@/types";
import { User, Star } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import { useEffect, useState } from "react";

export function TestimonialCarousel({
  testimonios,
}: {
  testimonios: Testimonial[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <Card className="mb-4">
      <CardContent className="relative">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 7000, stopOnInteraction: false })]}
          className="mx-auto w-full max-w-[80%]"
        >
          <CarouselContent>
            {testimonios.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.title + index}
                className="flex flex-col items-center justify-center p-8"
              >
                <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-8">
                  <div className="order-1 min-h-[100px] min-w-[100px] md:order-none">
                    {testimonial.featuredImage?.node ? (
                      <Image
                        src={testimonial.featuredImage.node.sourceUrl}
                        alt={testimonial.featuredImage.node.altText}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="bg-foreground/20 flex h-[100px] w-[100px] items-center justify-center rounded-full">
                        <User className="h-12 w-12 text-white" />
                      </div>
                    )}
                  </div>

                  <div>
                    {testimonial.testimoniosFg.rating > 0 && (
                      <div className="mb-4 flex gap-1">
                        {Array.from({
                          length: testimonial.testimoniosFg.rating,
                        }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-5 w-5 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                    )}

                    <div
                      className="mb-6 max-w-none text-sm"
                      dangerouslySetInnerHTML={{
                        __html: testimonial.content,
                      }}
                    />

                    <h3 className="text-sm leading-tight font-bold text-red-500">
                      {testimonial.title}{" "}
                      <span className="text-foreground font-normal">
                        {testimonial.testimoniosFg.author_role
                          ? `- ${testimonial.testimoniosFg.author_role}`
                          : ""}
                      </span>
                    </h3>
                    <p className="text-sm text-zinc-500">
                      {testimonial.testimoniosFg.company}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {testimonios.length > 0 && (
            <>
              <CarouselPrevious className="bg-foreground/50 hidden cursor-pointer border-none text-white md:flex" />
              <CarouselNext className="bg-foreground/50 hidden cursor-pointer border-none text-white md:flex" />
            </>
          )}
        </Carousel>

        <div className="absolute left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${index === current - 1 ? "bg-foreground w-4" : "bg-foreground/50"}`}
              aria-label={`Ir para o slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
