import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

export default function ClientCarousel({ reviews }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl"
    >
      <CarouselContent>
        {reviews.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/2 lg:basis-1/5 "
          >
            <div className="p-1">
              <div>
                <div className="flex  items-center justify-center p-6">
                  <img src={item.url} width={400} height={200} />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
