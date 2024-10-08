import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Heart } from "lucide-react";
import { ComponentProps } from "react";

interface MovieData {
  id: string;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface ButtonProps extends ComponentProps<"button"> {
  movieId: string;
  movieData: MovieData;
}

function ButtonFavorite({
  className,
  movieId,
  movieData,
  ...props
}: ButtonProps) {
  function handleAddFavorite() {
    const addedMovies = localStorage.getItem("favorite-movies");

    localStorage.setItem(
      `favorite-movies`,
      JSON.stringify(addedMovies + movieData),
    );
  }

  return (
    <Button
      {...props}
      variant={"secondary"}
      className={cn("", className)}
      onClick={handleAddFavorite}
    >
      <Heart />
    </Button>
  );
}

export default ButtonFavorite;
