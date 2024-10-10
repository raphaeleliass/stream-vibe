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
import useTv from "@/hooks/useTv";
import { Star, User } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCarouselProps {
  category: string;
}

function TvCategoryCarousel({ category }: CategoryCarouselProps) {
  const { data, isLoading } = useTv({
    category: category,
    key: `${category}-tv`,
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
                    <Link to={`/tv/${item.id}`}>
                      <Card className="flex flex-col justify-between transition-all hover:bg-zinc-900">
                        <CardHeader>
                          <img
                            loading="lazy"
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={`Poster of ${item.title}`}
                            className="min-h-72 w-full rounded-lg object-cover object-center"
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
                    </Link>
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

export default memo(TvCategoryCarousel);
