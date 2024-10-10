import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/Section/Section";
import ButtonFavorite from "@/components/ui/button-favorite";
import ButtonTrailer from "@/components/ui/button-trailer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { HeartCrack, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

function Liked() {
  const { data: favoriteMovies, isLoading } = useQuery({
    queryKey: ["liked-content"],
    queryFn: () => {
      const response = JSON.parse(
        localStorage.getItem("favorite-Movies") || "[]",
      );
      return response;
    },
    refetchInterval: 1000,
  });

  return (
    <main className="flex flex-col items-center justify-center">
      {favoriteMovies?.length === 0 ? (
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
          {isLoading ? (
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
              <div className="container grid min-h-dvh grid-cols-1 place-items-start gap-4 md:grid-cols-3 lg:grid-cols-5">
                {favoriteMovies.map(
                  (movie: {
                    id: string;
                    title: string;
                    poster_path: string;
                  }) => (
                    <Card
                      key={movie.id}
                      className="flex flex-col items-center justify-between"
                    >
                      <CardHeader>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={`Poster of ${movie.title} movie`}
                          className="rounded-lg"
                        />
                      </CardHeader>
                      <CardContent>
                        <CardTitle>
                          {movie.title.length > 10 &&
                            movie.title.slice(0, 12).concat("...")}
                        </CardTitle>
                      </CardContent>

                      <CardFooter className="flex w-full flex-col gap-2 md:flex-row">
                        <ButtonTrailer param={movie.title} className="w-full" />
                        <ButtonFavorite
                          itemData={movie}
                          mediaType="Movies"
                          className="w-full"
                        />
                      </CardFooter>
                    </Card>
                  ),
                )}
              </div>
            </Section>
          )}
        </>
      )}
    </main>
  );
}

export default Liked;
