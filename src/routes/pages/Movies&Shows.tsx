import MovieCategoryCarousel from "@/components/Carousel/movieCategoryCarousel";
import MovieGenreCarousel from "@/components/Carousel/movieGenreCarousel";
import TvCategoryCarousel from "@/components/Carousel/tvCategoryCarousel";
import TvGenreCarousel from "@/components/Carousel/tvGenreCarousel";
import CtaPlan from "@/components/CTA/CtaPlan";
import { Section, SectionTitle } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import useMovie from "@/hooks/useMovie";
import { Play, Plus, ThumbsUp, Volume2 } from "lucide-react";

function MoviesNShows() {
  const { data, isLoading } = useMovie({
    key: "popular_movies",
    category: "popular",
  });
  return (
    <main className="flex flex-col items-center justify-center">
      <Section className="flex items-center justify-center">
        <Carousel className="max-w-xs md:max-w-3xl lg:max-w-6xl">
          <CarouselContent>
            {isLoading ? (
              <Skeleton />
            ) : (
              <>
                {data
                  .map(
                    (item: {
                      id: string;
                      title: string;
                      backdrop_path: string;
                    }) => (
                      <CarouselItem key={item.id} className="md:basis-3/5">
                        <Card>
                          <CardHeader>
                            <img
                              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                              alt={`Poster of ${item.title}`}
                              className="h-80 rounded-lg object-cover object-center md:aspect-video md:h-auto"
                            />
                          </CardHeader>
                          <CardContent className="flex w-full flex-col items-center justify-center gap-2">
                            <CardTitle className="font-Poppins text-xl font-normal md:text-2xl">
                              {item.title}
                            </CardTitle>
                            <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
                              <Button
                                variant={"destructive"}
                                className="w-full gap-1 bg-red-600 hover:bg-red-700 md:w-auto"
                              >
                                <Play className="size-4" /> Play Now
                              </Button>

                              <div className="flex w-full flex-row gap-1 md:w-auto">
                                <Button
                                  variant={"secondary"}
                                  className="w-full"
                                >
                                  <Plus />
                                </Button>
                                <Button
                                  variant={"secondary"}
                                  className="w-full"
                                >
                                  <ThumbsUp />
                                </Button>
                                <Button
                                  variant={"secondary"}
                                  className="w-full"
                                >
                                  <Volume2 />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ),
                  )
                  .slice(0, 4)}
              </>
            )}
          </CarouselContent>
          <CarouselNext className="hidden md:flex" />
          <CarouselPrevious className="hidden md:flex" />
        </Carousel>
      </Section>

      <Section>
        <Card className="relative">
          <div className="absolute -top-6 left-6 hidden items-center justify-center rounded-lg bg-red-600 px-5 py-2 md:flex">
            Movies
          </div>
          <CardHeader>
            <CardTitle className="mt-3 text-2xl">Our Genres</CardTitle>
          </CardHeader>

          <CardContent>
            <MovieGenreCarousel />

            <Section>
              <SectionTitle>Trending Now</SectionTitle>
              <MovieCategoryCarousel category="popular" />
            </Section>

            <Section>
              <SectionTitle>New Releases</SectionTitle>
              <MovieCategoryCarousel category="now_playing" />
            </Section>

            <Section>
              <SectionTitle>Must - Watch Movies</SectionTitle>
              <MovieCategoryCarousel category="top_rated" />
            </Section>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Card className="relative">
          <div className="absolute -top-6 left-6 hidden items-center justify-center rounded-lg bg-red-600 px-5 py-2 md:flex">
            Shows
          </div>
          <CardHeader>
            <CardTitle className="mt-3 text-xl">Our Genres</CardTitle>
          </CardHeader>
          <CardContent>
            <TvGenreCarousel />

            <Section>
              <SectionTitle>Popular Top 10 In Genres</SectionTitle>
              <TvCategoryCarousel category="popular" />
            </Section>

            <Section>
              <SectionTitle>Must - Watch Shows</SectionTitle>
              <TvCategoryCarousel category="top_rated" />
            </Section>
          </CardContent>
        </Card>
      </Section>

      <CtaPlan />
    </main>
  );
}

export default MoviesNShows;
