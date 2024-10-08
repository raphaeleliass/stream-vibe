import useMovie from "@/hooks/useMovie";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";
import { ComponentProps } from "react";
import { Skeleton } from "../ui/skeleton";

interface BgMoviesProps extends ComponentProps<"div"> {
  className?: string;
  classImage?: string;
  classIcon?: string;
}

function BgMovies({
  classImage,
  classIcon,
  className,
  ...props
}: BgMoviesProps) {
  const { data, isLoading } = useMovie({
    key: "bg-popular-movies",
    category: "popular",
  });

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center grid-cols-10 flex-wrap overflow-clip after:absolute after:inset-0 after:bg-gradient-to-t after:from-background after:via-transparent after:to-background",
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <>
          {Array.from({ length: 20 }, (_, index) => (
            <Skeleton
              key={index}
              className="aspect-video w-20 rounded-lg md:w-32 lg:w-44"
            />
          ))}
        </>
      ) : (
        <>
          {data.map(
            (movie: { id: string; title: string; backdrop_path: string }) => (
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`Picture of ${movie.title}`}
                className={cn(
                  "aspect-video w-20 rounded-lg md:w-32 lg:w-44",
                  classImage,
                )}
              />
            ),
          )}
        </>
      )}
      <PlayCircle className={cn("absolute size-56 opacity-40", classIcon)} />
    </div>
  );
}

export default BgMovies;
