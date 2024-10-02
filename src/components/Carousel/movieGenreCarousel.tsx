import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GenreCard from "@/components/Card/MovieGenreCard";
import { memo } from "react";

const genres: Array<
  "Action" | "Animation" | "Comedy" | "War" | "Fantasy" | "Horror" | "Romance"
> = ["Action", "Animation", "Comedy", "War", "Fantasy", "Horror"];

function MovieGenreCarousel() {
  return (
    <Carousel className="mx-auto w-full max-w-xs md:max-w-2xl lg:max-w-6xl">
      <CarouselContent>
        {genres.map((genre) => (
          <CarouselItem
            key={genre}
            className="basis-2/3 md:basis-2/5 lg:basis-1/5"
          >
            <GenreCard genre={genre} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}

export default memo(MovieGenreCarousel);
