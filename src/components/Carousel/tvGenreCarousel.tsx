import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { memo } from "react";
import TvGenreCard from "../Card/tvGenreCard";

const genres: Array<
  | "Action_Adventure"
  | "Animation"
  | "Comedy"
  | "Crime"
  | "Documentary"
  | "Drama"
  | "Family"
  | "Kids"
  | "Mystery"
  | "News"
  | "Reality"
  | "Sci_Fi_Fantasy"
  | "Soap"
  | "Talk"
  | "War_Politics"
  | "Western"
> = [
  "Action_Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Kids",
  "Mystery",
  "News",
  "Reality",
  "Sci_Fi_Fantasy",
  "Soap",
  "Talk",
  "War_Politics",
  "Western",
];

function TvGenreCarousel() {
  return (
    <Carousel className="mx-auto w-full max-w-xs md:max-w-2xl lg:max-w-6xl">
      <CarouselContent>
        {genres.map((genre) => (
          <CarouselItem
            key={genre}
            className="basis-2/3 md:basis-2/5 lg:basis-1/5"
          >
            <TvGenreCard genre={genre} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}

export default memo(TvGenreCarousel);
