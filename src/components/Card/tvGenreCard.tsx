import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import useTvDiscover from "@/hooks/useTvDiscover";
import { Link } from "react-router-dom";

interface GenreCardProps {
  genre:
    | "Action_Adventure"
    | "Animation"
    | "Comedy"
    | "Crime"
    | "Documentary"
    | "Drama"
    | "Family"
    | "Kids"
    | "Mystery"
    | "News"
    | "Reality"
    | "Sci_Fi_Fantasy"
    | "Soap"
    | "Talk"
    | "War_Politics"
    | "Western";
}

const genreVariants = {
  Action_Adventure: "10759",
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

function TvGenreCard({ genre }: GenreCardProps) {
  const { data, isLoading } = useTvDiscover({
    key: "categories",
    genre: genreVariants[genre] || "Action",
  });

  return (
    <Link to={`/shows/${genreVariants[genre]}`}>
      <Card>
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
            <div className="relative flex flex-wrap items-center justify-center gap-2 after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-t after:from-background after:via-transparent after:to-transparent">
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
          <CardTitle>{genre.replace("_", " ")}</CardTitle>
          <ArrowRight className="size-4" />
        </CardContent>
      </Card>
    </Link>
  );
}

export default memo(TvGenreCard);
