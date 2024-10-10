import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/Section/Section";
import ButtonFavoriteMovie from "@/components/ui/button-favorite-movie";
import ButtonFavoriteShow from "@/components/ui/button-favorite-show";
import ButtonTrailer from "@/components/ui/button-trailer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { HeartCrack, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

function Favorites() {
  const { data: favoriteMovies, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["favorite-movies"],
    queryFn: () => {
      const response = JSON.parse(
        localStorage.getItem("favorite-Movies") || "[]",
      );
      return response;
    },
    refetchInterval: 1000,
  });

  const { data: favoriteShows, isLoading: isLoadingShows } = useQuery({
    queryKey: ["favorite-shows"],
    queryFn: () => {
      const response = JSON.parse(
        localStorage.getItem("favorite-Shows") || "[]",
      );
      return response;
    },
    refetchInterval: 1000,
  });

  return (
    <main className="flex flex-col items-center justify-center">
      {favoriteMovies?.length === 0 && favoriteShows?.length === 0 ? (
        <div className="flex min-h-[80dvh] items-center justify-center">
          <Section className="flex flex-col items-center justify-center">
            <HeartCrack className="size-10" />
            <SectionTitle>Your favorite list is empty.</SectionTitle>
            <SectionDescription className="text-center">
              Go back to{" "}
              <Link to={"/"} className="text-cyan-500 hover:underline">
                home
              </Link>{" "}
              and save some items to your list.
            </SectionDescription>
          </Section>
        </div>
      ) : (
        <>
          {isLoadingMovies ? (
            <div className="flex min-h-[60dvh] flex-col items-center justify-center">
              <Loader2 className="size-12 animate-spin" />
            </div>
          ) : (
            <Section>
              <SectionTitle>Your Favorite Movies</SectionTitle>
              <SectionDescription>
                Here is a list of your favorite movies. You can watch the
                trailers and add them to your list.
              </SectionDescription>
              <div className="container grid grid-cols-1 place-items-start gap-4 md:grid-cols-3 lg:grid-cols-4">
                {favoriteMovies.length === 0 ? (
                  <Card className="flex flex-col items-center justify-center text-center">
                    <CardHeader>
                      <HeartCrack className="size-8" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Your list movies is empty!</CardTitle>
                    </CardContent>
                    <CardFooter>
                      <CardDescription>
                        Go back to{" "}
                        <Link
                          to={"/"}
                          className="text-cyan-600 hover:underline"
                        >
                          Home
                        </Link>{" "}
                        and add some itens to your list.
                      </CardDescription>
                    </CardFooter>
                  </Card>
                ) : (
                  favoriteMovies.map(
                    (movie: {
                      id: string;
                      title: string;
                      poster_path: string;
                    }) => (
                      <Card
                        key={movie.id}
                        className="flex flex-col items-center justify-between"
                      >
                        <Link to={`/movie/${movie.id}`}>
                          <CardHeader>
                            <img
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              alt={`Poster of ${movie.title} movie`}
                              className="rounded-lg"
                            />
                          </CardHeader>
                          <CardContent>
                            <CardTitle>
                              {movie.title?.length > 10
                                ? movie.title.slice(0, 12).concat("...")
                                : movie.title}
                            </CardTitle>
                          </CardContent>
                        </Link>

                        <CardFooter className="flex w-full flex-col gap-2 md:flex-row">
                          <ButtonTrailer
                            param={movie.title}
                            className="w-full"
                          />
                          <ButtonFavoriteMovie
                            itemData={movie}
                            className="w-full"
                          />
                        </CardFooter>
                      </Card>
                    ),
                  )
                )}
              </div>
            </Section>
          )}

          {isLoadingShows ? (
            <div className="flex min-h-[60dvh] flex-col items-center justify-center">
              <Loader2 className="size-12 animate-spin" />
            </div>
          ) : (
            <Section>
              <SectionTitle>Your Favorite Shows</SectionTitle>
              <SectionDescription>
                Here is a list of your favorite movies. You can watch the
                trailers and add them to your list.
              </SectionDescription>
              <div className="container grid grid-cols-1 place-items-start gap-4 md:grid-cols-3 lg:grid-cols-4">
                {favoriteShows?.length === 0 ? (
                  <Card className="flex flex-col items-center justify-center text-center">
                    <CardHeader>
                      <HeartCrack className="size-8" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Your list movies is empty!</CardTitle>
                    </CardContent>
                    <CardFooter>
                      <CardDescription>
                        Go back to{" "}
                        <Link
                          to={"/"}
                          className="text-cyan-600 hover:underline"
                        >
                          Home
                        </Link>{" "}
                        and add some itens to your list.
                      </CardDescription>
                    </CardFooter>
                  </Card>
                ) : (
                  favoriteShows.map(
                    (show: {
                      id: string;
                      name: string;
                      poster_path: string;
                    }) => (
                      <Card
                        key={show.id}
                        className="flex flex-col items-center justify-between"
                      >
                        <Link to={`/show/${show.id}`}>
                          <CardHeader>
                            <img
                              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                              alt={`Poster of ${show.name} movie`}
                              className="rounded-lg"
                            />
                          </CardHeader>
                          <CardContent>
                            <CardTitle>
                              {show?.name.length > 10
                                ? show.name.slice(0, 12).concat("...")
                                : show.name}
                            </CardTitle>
                          </CardContent>
                        </Link>

                        <CardFooter className="flex w-full flex-col gap-2 md:flex-row">
                          <ButtonTrailer param={show.name} className="w-full" />
                          <ButtonFavoriteShow
                            itemData={show}
                            className="w-full"
                          />
                        </CardFooter>
                      </Card>
                    ),
                  )
                )}
              </div>
            </Section>
          )}
        </>
      )}
    </main>
  );
}

export default Favorites;
