"use client";
import { TestimonialsResponse } from "@/types";
import { User, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

export function TestimonialCarousel({ testimonios }: TestimonialsResponse) {
  return (
    <Card className="mb-4">
      <CardContent>
        <Carousel
          opts={{ loop: true }}
          // plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
          className="mx-auto w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonios.nodes.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.title + index}
                className="flex flex-col items-center justify-center p-8"
              >
                <div className="flex flex-col-reverse gap-8 md:flex-row">
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
                      <div className="bg-foreground flex h-[100px] w-[100px] items-center justify-center rounded-full">
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
                        - {testimonial.testimoniosFg.author_role}
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
        </Carousel>
      </CardContent>
    </Card>
  );
}
