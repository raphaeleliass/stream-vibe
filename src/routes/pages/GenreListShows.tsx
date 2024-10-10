import CtaPlan from "@/components/CTA/CtaPlan";
import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/Section/Section";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import useTvDiscover from "@/hooks/useTvDiscover";
import { Star, User } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const genreVariants = {
  Action: "10759",
  Animation: "16",
  Comedy: "35",
  Crime: "80",
  Documentary: "99",
  Drama: "18",
  Family: "10751",
  Kids: "10762",
  Mystery: "9648",
  News: "10763",
  Reality: "10764",
  Sci_Fi_Fantasy: "10765",
  Soap: "10766",
  Talk: "10767",
  War_Politics: "10768",
  Western: "37",
};

function GenreListShows() {
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const { data: shows, isLoading } = useTvDiscover({
    key: `${id}_list_shows${count}`,
    genre: `${id}`,
    page: count,
  });

  function handleIncrementCount() {
    if (count > 499) {
      setCount(500);
    } else {
      setCount(count + 1);
      window.scrollTo(0, 0);
    }
  }

  function handleDecrementCount() {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center gap-6">
      {isLoading ? (
        <div className="container flex flex-wrap items-center justify-center gap-6">
          {Array.from({ length: 20 }, (_, index) => (
            <Skeleton key={index} className="h-56 w-44" />
          ))}
        </div>
      ) : (
        <Section className="relative w-full">
          <SectionTitle>Discover Our Shows</SectionTitle>
          <span className="absolute right-12 top-0 flex flex-row items-center justify-center rounded bg-red-600 px-2 py-1 text-xs font-semibold md:right-1/2 md:top-2 lg:left-[21rem] lg:right-auto">
            {Object.keys(genreVariants).find(
              (key) => genreVariants[key as keyof typeof genreVariants] === id,
            )}
          </span>
          <SectionDescription>
            Explore and discover our shows with a wide variety of genres and
            categories.
          </SectionDescription>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {shows.map(
              (show: {
                id: string;
                poster_path: string;
                name: string;
                vote_average: number;
                vote_count: number;
              }) => (
                <Card
                  key={show.id}
                  className="flex max-w-xs flex-col items-center justify-between transition-all hover:bg-zinc-900"
                >
                  <Link to={`/movie/${show.id}`}>
                    <CardHeader className="w-full">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                        alt={`${show.name}'s poster`}
                        className="w-full rounded-lg"
                      />
                    </CardHeader>
                  </Link>

                  <CardContent className="flex w-full flex-col gap-4">
                    <CardTitle className="text-center text-2xl md:text-base">
                      {show.name.length > 16
                        ? show.name.slice(0, 16).concat("...")
                        : show.name}
                    </CardTitle>

                    <div className="flex w-full flex-row justify-between">
                      <span className="flex flex-row items-center justify-center gap-1 rounded-full px-2 py-px ring-1 ring-zinc-700">
                        <Star className="size-3" />
                        <CardDescription className="text-xs">
                          {show.vote_average.toFixed(1)}
                        </CardDescription>
                      </span>

                      <span className="flex flex-row items-center justify-center gap-1 rounded-full px-2 py-px ring-1 ring-zinc-700">
                        <User className="size-3" />
                        <CardDescription className="text-xs">
                          {show.vote_count}
                        </CardDescription>
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
                    <ButtonTrailer
                      param={show.name}
                      className="w-full md:w-auto"
                    />
                    <ButtonFavoriteShow
                      itemData={show}
                      className="w-full md:w-auto"
                    />
                  </CardFooter>
                </Card>
              ),
            )}
          </div>
        </Section>
      )}

      <div className="py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={handleDecrementCount}
                className={`cursor-pointer ${count < 2 && "cursor-not-allowed opacity-40 hover:bg-transparent"}`}
              />
            </PaginationItem>
            <PaginationLink>{count}</PaginationLink>
            <PaginationItem>
              <PaginationNext
                onClick={handleIncrementCount}
                className={`cursor-pointer ${count > 499 && "cursor-not-allowed opacity-40 hover:bg-transparent"}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <CtaPlan />
    </main>
  );
}

export default GenreListShows;
