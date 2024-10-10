import useMovieDiscovery from "@/hooks/useMovieDiscover";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

interface GenreCardProps {
  genre:
    | "Action"
    | "Adventure"
    | "Animation"
    | "Comedy"
    | "Crime"
    | "Documentary"
    | "Drama"
    | "Family"
    | "Fantasy"
    | "History"
    | "Horror"
    | "Music"
    | "Mystery"
    | "Romance"
    | "Science_Fiction"
    | "TV_Movie"
    | "Thriller"
    | "War"
    | "Western";
}

const genreVariants = {
  Action: "28",
  Adventure: "12",
  Animation: "16",
  Comedy: "35",
  Crime: "80",
  Documentary: "99",
  Drama: "18",
  Family: "10751",
  Fantasy: "14",
  History: "36",
  Horror: "27",
  Music: "10402",
  Mystery: "9648",
  Romance: "10749",
  Science_Fiction: "878",
  TV_Movie: "10770",
  Thriller: "53",
  War: "10752",
  Western: "37",
};

function MovieGenreCard({ genre }: GenreCardProps) {
  const { data, isLoading } = useMovieDiscovery({
    key: "categories",
    genre: genreVariants[genre] || "Action",
  });

  return (
    <Link to={`/movies/${genreVariants[genre]}`}>
      <Card className="transition-all hover:bg-zinc-900">
        <CardHeader>
          {isLoading ? (
            <div className="relative flex flex-wrap items-center justify-center gap-2 after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-t after:from-background after:via-transparent after:to-transparent">
              {Array.from({ length: 4 }, (_, index) => (
                <Skeleton
                  key={index}
                  className="aspect-square size-16 rounded-lg object-cover object-center"
                />
              ))}
            </div>
          ) : (
            <div className="relative grid grid-cols-2 items-center justify-center justify-items-center gap-2 after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-t after:from-background after:via-transparent after:to-transparent">
              {data
                .map(
                  (item: {
                    id: string;
                    backdrop_path: string;
                    title: string;
                  }) => (
                    <img
                      loading="lazy"
                      key={item.id}
                      src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                      alt={`image from movie ${item.title}`}
                      className="aspect-square size-14 rounded-lg object-cover object-center md:size-20 lg:size-16"
                    />
                  ),
                )
                .slice(0, 4)}
            </div>
          )}
        </CardHeader>
        <CardContent className="flex flex-row items-center justify-between">
          <CardTitle>{genre}</CardTitle>
          <ArrowRight className="size-4" />
        </CardContent>
      </Card>
    </Link>
  );
}

export default memo(MovieGenreCard);
