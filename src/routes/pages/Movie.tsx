import CtaPlan from "@/components/CTA/CtaPlan";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import ButtonFavoriteMovie from "@/components/ui/button-favorite-movie";
import ButtonTrailer from "@/components/ui/button-trailer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { movieApi } from "@/services/movieApi";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Languages, Layers, Star } from "lucide-react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const { data: movie, isLoading } = useQuery({
    queryKey: [`movie-${id}`],
    queryFn: async () => {
      const response = await movieApi.get(`/${id}`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      return response.data;
    },
  });

  const { data: credits, isLoading: isLoadingCredits } = useQuery({
    queryKey: [`movie-${id}-credits`],
    queryFn: async () => {
      const response = await movieApi.get(`${id}/credits`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      return response.data;
    },
  });

  return (
    <main className="flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="container mx-auto grid grid-cols-5 gap-4 px-6">
          <Skeleton className="col-span-full min-h-[70dvh] rounded-xl" />
          <Skeleton className="col-span-3 min-h-[30dvh] rounded-xl" />
          <Skeleton className="col-span-2 min-h-[30dvh] rounded-xl" />
        </div>
      ) : (
        <>
          <Section>
            <div className="relative flex w-full items-center justify-center after:absolute after:inset-0 after:bg-background after:opacity-50">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={`Backdrop of the movie ${movie.title}`}
                className="lg:max-w-screen aspect-square h-96 max-h-96 w-full rounded-lg object-cover object-center md:aspect-video md:h-auto"
              />
              <div className="absolute bottom-2 z-10 flex flex-col gap-2 md:bottom-10">
                <h2 className="text-center text-xl font-semibold drop-shadow-xl">
                  {movie.title}
                </h2>
                <p className="text-center font-light italic drop-shadow-xl">
                  {movie.tagline}
                </p>
                <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
                  <ButtonTrailer param={movie.title} className="w-full" />
                  <ButtonFavoriteMovie
                    itemData={movie}
                    className="w-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </Section>

          <Section className="grid grid-cols-1 md:grid-cols-5">
            <div className="flex flex-col gap-4 md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-muted-foreground">
                    Description
                  </CardTitle>
                </CardHeader>
                <CardContent>{movie.overview}</CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-muted-foreground">Cast</CardTitle>
                </CardHeader>
                <CardContent>
                  <Carousel>
                    <CarouselContent>
                      {isLoadingCredits ? (
                        <>
                          {Array.from({ length: 10 }, (_, index) => (
                            <CarouselItem key={index}>
                              <Skeleton className="aspect-square size-20 rounded-lg" />
                            </CarouselItem>
                          ))}
                        </>
                      ) : (
                        <>
                          {credits.cast.map(
                            (item: {
                              id: string;
                              name: string;
                              profile_path: string;
                            }) => (
                              <CarouselItem
                                key={item.id}
                                className="basis-1/2 md:basis-2/4 lg:basis-1/4"
                              >
                                <Card className="flex flex-col items-center">
                                  <CardHeader>
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                                      alt={`Picture of ${item.name}`}
                                      className="aspect-square size-20 rounded-lg object-cover object-center"
                                    />
                                  </CardHeader>
                                  <CardContent>
                                    <CardDescription className="text-nowrap text-center text-xs">
                                      {item.name}
                                    </CardDescription>
                                  </CardContent>
                                </Card>
                              </CarouselItem>
                            ),
                          )}
                        </>
                      )}
                      <CarouselItem className="basis-1/2 md:basis-2/4 lg:basis-1/4">
                        <Card className="flex h-full flex-col items-center justify-center">
                          <CardContent>
                            <Button variant={"link"}>
                              {" "}
                              <a
                                href={`https://pt.wikipedia.org/wiki/${movie.title.replace(" ", "_")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                More...
                              </a>{" "}
                            </Button>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                  </Carousel>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader className="gap-6">
                  <div className="flex flex-col gap-4">
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      Release Year
                    </CardDescription>
                    <CardTitle>{movie.release_date.slice(0, 4)}</CardTitle>
                  </div>

                  <div className="flex flex-col gap-4">
                    <CardDescription className="flex flex-row items-center gap-1">
                      <Languages className="size-4" />
                      Spoken Languages
                    </CardDescription>
                    <CardTitle>
                      {movie.spoken_languages.map(
                        (item: { iso_639_1: string; name: string }) => (
                          <span
                            key={item.iso_639_1}
                            className="rounded-lg px-2 py-1 ring-1 ring-zinc-800"
                          >
                            {item.name}
                          </span>
                        ),
                      )}
                    </CardTitle>
                  </div>

                  <div className="flex flex-col gap-4">
                    <CardDescription className="flex items-center gap-1">
                      <Star className="size-4" />
                      Rating
                    </CardDescription>
                    <CardTitle>{movie.vote_average.toFixed(1)}</CardTitle>
                  </div>

                  <div className="flex flex-col gap-4">
                    <CardDescription className="flex items-center gap-1">
                      <Layers className="size-4" />
                      Genres
                    </CardDescription>
                    <CardTitle className="flex flex-row flex-wrap items-center gap-2">
                      {movie.genres.map(
                        (item: { id: string; name: string }) => (
                          <span
                            key={item.id}
                            className="text-nowrap rounded-lg px-2 py-1 ring-1 ring-zinc-800"
                          >
                            {item.name}
                          </span>
                        ),
                      )}
                    </CardTitle>
                  </div>

                  <div className="flex flex-col gap-4">
                    <CardDescription>Director</CardDescription>
                    <Card className="flex flex-row items-center">
                      {isLoadingCredits ? (
                        <Skeleton className="h-32 w-full" />
                      ) : (
                        <>
                          <a
                            href={`https://pt.wikipedia.org/wiki/${credits.crew[0].name.replace(" ", "_")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CardHeader className="flex flex-row">
                              <img
                                src={`https://image.tmdb.org/t/p/w500${credits.crew[0].profile_path}`}
                                alt={`Director's picture of ${credits.crew[0].name}`}
                                className="aspect-square size-20 rounded-lg object-cover object-center"
                              />
                            </CardHeader>
                          </a>
                          <div className="flex flex-col items-center justify-center">
                            {credits.crew[0].name}
                          </div>
                        </>
                      )}
                    </Card>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </Section>

          <CtaPlan />
        </>
      )}
    </main>
  );
}

export default Movie;
