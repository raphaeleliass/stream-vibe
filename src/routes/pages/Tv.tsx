import CtaPlan from "@/components/CTA/CtaPlan";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
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
import { TvApi } from "@/services/TvApi";
import { useQuery } from "@tanstack/react-query";
import {
  Calendar,
  Languages,
  Layers,
  Play,
  Plus,
  Star,
  ThumbsUp,
  Volume2,
} from "lucide-react";
import { useParams } from "react-router-dom";

function Tv() {
  const { id } = useParams();

  const { data: show, isLoading: isLoadingShow } = useQuery({
    queryKey: [`show-${id}`],
    queryFn: async () => {
      const response = await TvApi.get(`${id}`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      return response.data;
    },
  });

  const { data: credits, isLoading: isLoadingCredits } = useQuery({
    queryKey: [`credits-${id}`],
    queryFn: async () => {
      const response = await TvApi.get(`${id}/credits`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      return response.data;
    },
  });

  console.log(credits);

  return (
    <main className="flex flex-col items-center justify-center">
      {isLoadingShow ? (
        <div className="grid grid-cols-4 gap-4 p-4">
          <Skeleton className="col-span-4 min-h-[70dvh] rounded-xl" />
          <Skeleton className="col-span-2 min-h-[30dvh] rounded-xl" />
          <Skeleton className="col-span-2 min-h-[30dvh] rounded-xl" />
        </div>
      ) : (
        <>
          <Section>
            <div className="relative flex w-full items-center justify-center after:absolute after:inset-0 after:bg-background after:opacity-50">
              <img
                src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`}
                alt={`Backdrop of the movie ${show.name}`}
                className="aspect-square h-96 w-full rounded-lg object-cover object-center md:aspect-video md:h-auto lg:max-w-2xl"
              />
              <div className="absolute bottom-2 z-10 flex flex-col gap-2 md:bottom-10">
                <h2 className="text-center text-xl font-semibold drop-shadow-xl">
                  {show.name}
                </h2>
                <p className="text-center font-light italic drop-shadow-xl">
                  {show.tagline}
                </p>
                <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
                  <Button
                    variant={"destructive"}
                    className="w-full gap-1 bg-red-600 hover:bg-red-700 md:w-auto"
                  >
                    <Play className="size-4" /> Play Now
                  </Button>
                  <div className="flex w-full flex-row gap-1 md:w-auto">
                    <Button variant={"secondary"} className="w-full">
                      <Plus />
                    </Button>
                    <Button variant={"secondary"} className="w-full">
                      <ThumbsUp />
                    </Button>
                    <Button variant={"secondary"} className="w-full">
                      <Volume2 />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section>
            <div className="flex flex-col gap-4 md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-muted-foreground">
                    Description
                  </CardTitle>
                </CardHeader>
                <CardContent>{show.overview}</CardContent>
              </Card>
            </div>

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
                          <CarouselItem key={`skeleton-${index}`}>
                            {" "}
                            // Alterado para usar um prefixo com o índice
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
                              className="basis-1/2 md:basis-1/4 lg:basis-1/4"
                            >
                              <a
                                href={`https://pt.wikipedia.org/wiki/${item.name.replace(" ", "_")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Card className="flex flex-col items-center">
                                  <CardHeader>
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                                      alt={`Picture of ${item.name}`} // Melhorar acessibilidade
                                      className="aspect-square size-20 rounded-lg object-cover object-center"
                                    />
                                  </CardHeader>
                                  <CardContent>
                                    <CardDescription className="text-nowrap text-center text-xs">
                                      {item.name}
                                    </CardDescription>
                                  </CardContent>
                                </Card>
                              </a>
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
                              href={`https://pt.wikipedia.org/wiki/${show.name.replace(" ", "_")}`}
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

            <div className="md:col-span-2">
              <Card>
                <CardHeader className="gap-6">
                  <div className="flex flex-col gap-4">
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      Release Year
                    </CardDescription>
                    <CardTitle>{show.first_air_date.slice(0, 4)}</CardTitle>
                  </div>

                  <div className="flex flex-col gap-4">
                    <CardDescription className="flex flex-row items-center gap-1">
                      <Languages className="size-4" />
                      Spoken Languages
                    </CardDescription>
                    <CardTitle>
                      {show.spoken_languages.map(
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
                    <CardTitle>{show.vote_average.toFixed(1)}</CardTitle>
                  </div>

                  <div className="flex flex-col gap-4">
                    <CardDescription className="flex items-center gap-1">
                      <Layers className="size-4" />
                      Genres
                    </CardDescription>
                    <CardTitle className="flex flex-row flex-wrap items-center gap-2">
                      {show.genres.map((item: { id: string; name: string }) => (
                        <span
                          key={item.id} // Certificando-se de que a chave única está aqui
                          className="text-nowrap rounded-lg px-2 py-1 ring-1 ring-zinc-800"
                        >
                          {item.name}
                        </span>
                      ))}
                    </CardTitle>
                  </div>

                  <div className="flex flex-col gap-4">
                    <CardDescription>Creator</CardDescription>
                    <Card className="flex flex-row items-center">
                      {isLoadingCredits ? (
                        <Skeleton className="h-32 w-full" />
                      ) : (
                        <>
                          {show.created_by.map(
                            (item: {
                              credit_id: string;
                              profile_path: string;
                              name: string;
                            }) => (
                              <a
                                key={item.credit_id}
                                href={`https://pt.wikipedia.org/wiki/${item.name.replace(" ", "_")}`}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <div className="flex flex-row">
                                  <CardHeader>
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                                      alt=""
                                      className="size-20 rounded-lg object-cover object-center"
                                    />
                                  </CardHeader>
                                  <div className="flex flex-col items-center justify-center">
                                    <CardTitle>{item.name}</CardTitle>
                                  </div>
                                </div>
                              </a>
                            ),
                          )}
                        </>
                      )}
                    </Card>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </Section>
        </>
      )}
      <CtaPlan />
    </main>
  );
}

export default Tv;
