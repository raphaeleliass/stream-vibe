// TODO RESOLVER ERRO NO CONSOLE E DESIGN DO CAROUSEL
import MovieCategoryCarousel from "@/components/Carousel/movieCategoryCarousel";
import MovieGenreCarousel from "@/components/Carousel/movieGenreCarousel";
import TvCategoryCarousel from "@/components/Carousel/tvCategoryCarousel";
import TvGenreCarousel from "@/components/Carousel/tvGenreCarousel";
import CtaPlan from "@/components/CTA/CtaPlan";
import { Section, SectionTitle } from "@/components/Section/Section";
import ButtonFavoriteMovie from "@/components/ui/button-favorite-movie";
import ButtonTrailer from "@/components/ui/button-trailer";
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
import { Link } from "react-router-dom";

function MoviesNShows() {
  const { data, isLoading } = useMovie({
    key: "popular_movies",
    category: "popular",
  });
  return (
    <main className="flex flex-col items-center justify-center">
      <Section className="flex items-center justify-center">
        <Carousel className="container">
          <CarouselContent>
            {isLoading ? (
              <Skeleton />
            ) : (
              <>
                {data.map(
                  (item: {
                    id: string;
                    title: string;
                    backdrop_path: string;
                    poster_path: string;
                  }) => (
                    <CarouselItem
                      key={item.id}
                      className="basis-4/5 md:basis-5/6 lg:basis-5/6"
                    >
                      <Link to={`/movie/${item.id}`}>
                        <Card className="relative flex flex-col items-center justify-between transition-all hover:bg-zinc-900">
                          <CardHeader className="after:absolute after:inset-0 after:bg-gradient-to-t after:from-background after:to-transparent">
                            <img
                              loading="lazy"
                              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                              alt={`Poster of ${item.title}`}
                              className="aspect-video h-80 w-screen rounded-lg object-cover object-center opacity-70 md:aspect-video md:h-96"
                            />
                          </CardHeader>
                          <CardContent className="absolute bottom-4 flex w-full flex-col items-center justify-center gap-2">
                            <CardTitle className="text-center font-Poppins font-normal md:text-2xl">
                              {item.title.length > 16
                                ? item.title.slice(0, 16).concat("...")
                                : item.title}
                            </CardTitle>
                            <div className="flex w-full flex-col items-center justify-center gap-2 px-2 md:flex-row">
                              <ButtonTrailer
                                param={item.title}
                                className="w-full md:w-auto"
                              />
                              <ButtonFavoriteMovie
                                itemData={item}
                                className="w-full md:w-auto"
                              />
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
      </Section>

      <Section>
        <Card className="relative border-0">
          <div className="absolute -top-6 left-6 hidden items-center justify-center rounded-lg bg-red-600 px-5 py-2 md:flex">
            Movies
          </div>
          <CardHeader>
            <CardTitle className="mt-3 text-2xl">Our Movie Genres</CardTitle>
          </CardHeader>

          <CardContent>
            <MovieGenreCarousel />

            <div className="flex flex-col gap-6 py-12">
              <SectionTitle>Trending Now</SectionTitle>
              <MovieCategoryCarousel category="popular" />
            </div>

            <div className="flex flex-col gap-6 py-12">
              <SectionTitle>New Releases</SectionTitle>
              <MovieCategoryCarousel category="now_playing" />
            </div>

            <div className="flex flex-col gap-6 py-12">
              <SectionTitle>Must - Watch Movies</SectionTitle>
              <MovieCategoryCarousel category="top_rated" />
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Card className="relative border-0">
          <div className="absolute -top-6 left-6 hidden items-center justify-center rounded-lg bg-red-600 px-5 py-2 md:flex">
            Shows
          </div>
          <CardHeader>
            <CardTitle className="mt-3 text-xl">Our Show Genres</CardTitle>
          </CardHeader>
          <CardContent>
            <TvGenreCarousel />

            <div className="flex flex-col gap-6 py-12">
              <SectionTitle>Popular Top 10 In Genres</SectionTitle>
              <TvCategoryCarousel category="popular" />
            </div>

            <div className="flex flex-col gap-6 py-12">
              <SectionTitle>Must - Watch Shows</SectionTitle>
              <TvCategoryCarousel category="top_rated" />
            </div>
          </CardContent>
        </Card>
      </Section>

      <CtaPlan />
    </main>
  );
}

export default MoviesNShows;
