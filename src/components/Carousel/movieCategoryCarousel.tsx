import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { memo } from "react";
import { Skeleton } from "../ui/skeleton";
import useMovie from "@/hooks/useMovie";
import { Star, User } from "lucide-react";

interface CategoryCarouselProps {
  category: string;
}

function MovieCategoryCarousel({ category }: CategoryCarouselProps) {
  const { data, isLoading } = useMovie({
    category: category,
    key: `${category}-movies`,
  });

  return (
    <Carousel>
      <CarouselContent>
        {isLoading ? (
          <>
            {Array.from({ length: 10 }, (_, index) => (
              <CarouselItem
                key={index}
                className="basis-5/6 md:basis-2/5 lg:basis-1/4"
              >
                <Card>
                  <CardHeader>
                    <Skeleton className="w-full rounded-lg" />
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </>
        ) : (
          <>
            {data
              .slice(0, 10)
              .map(
                (item: {
                  id: string;
                  poster_path: string;
                  title: string;
                  vote_average: number;
                  vote_count: number;
                }) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-5/6 md:basis-2/5 lg:basis-1/4"
                  >
                    <Card>
                      <CardHeader>
                        <img
                          loading="lazy"
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          alt={`Poster of ${item.title}`}
                          className="w-full rounded-lg object-cover object-center"
                        />
                      </CardHeader>
                      <CardContent className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center gap-1 rounded-full bg-black px-1 py-1 text-xs ring-1 ring-zinc-700">
                          <Star className="size-3" />
                          {item.vote_average.toFixed(1)}
                        </div>
                        <div className="flex flex-row items-center justify-center gap-1 rounded-full bg-black px-1 py-1 text-xs ring-1 ring-zinc-700">
                          <User className="size-3" />
                          {item.vote_count}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ),
              )}
          </>
        )}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}

export default memo(MovieCategoryCarousel);
