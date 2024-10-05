import useMovie from "@/hooks/useMovie";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function BgMovies({ className, ...props }: ComponentProps<"div">) {
  const { data, isLoading } = useMovie({
    key: "bg-popular-movies",
    category: "popular",
  });

  return (
    <div
      className={cn(
        "relative grid w-full grid-cols-10 after:absolute after:inset-0 after:bg-gradient-to-t after:from-background after:via-transparent after:to-background",
        className,
      )}
      //TODO CONSERTAR O AGRUPAMENTO DAS IMAGENS
      {...props}
    >
      {isLoading ? (
        ""
      ) : (
        <>
          {data.map(
            (movie: { id: string; title: string; backdrop_path: string }) => (
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`Picture of ${movie.title}`}
                className="aspect-video w-96 rounded-lg object-cover object-center"
                // TODO ARRUMAR O ASPECT DAS IMAGENS
              />
            ),
          )}
        </>
      )}
    </div>
  );
}

export default BgMovies;
