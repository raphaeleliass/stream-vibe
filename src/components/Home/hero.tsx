import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { PlayCircle, PlayIcon } from "lucide-react";
import useMovie from "@/hooks/useMovie";
import { Section, SectionTitle } from "../Section/Section";
function Hero() {
  const { data, isLoading } = useMovie({
    key: "movies",
    category: "popular",
  });

  return (
    <section className="flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="container relative flex max-h-72 w-full flex-wrap items-center justify-around gap-1 overflow-clip after:absolute after:inset-0 after:bg-gradient-to-t after:from-background after:via-transparent after:to-background md:max-h-max">
          {Array.from({ length: 20 }, (_, index) => (
            <Skeleton
              key={index}
              className="aspect-video w-24 rounded-xl md:w-36 lg:w-56"
            />
          ))}
          <span className="absolute">
            <PlayCircle className="size-44 text-white opacity-30 md:size-56 lg:size-96" />
          </span>
        </div>
      ) : (
        <div className="container relative flex max-h-72 w-full flex-wrap items-center justify-around gap-1 overflow-clip after:absolute after:inset-0 after:bg-gradient-to-t after:from-background after:via-transparent after:to-background md:max-h-max">
          {data.results.map(
            (item: { id: string; title: string; backdrop_path: string }) => (
              <img
                key={item.id}
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt=""
                className="aspect-video w-24 rounded-xl object-cover object-center md:w-36 lg:w-56"
              />
            ),
          )}
          <span className="absolute">
            <PlayCircle className="size-44 text-white opacity-30 md:size-56 lg:size-96" />
          </span>
        </div>
      )}
      <Section className="my-0 -translate-y-8 items-center justify-center">
        <SectionTitle className="text-center font-Poppins text-3xl lg:text-5xl">
          The Best Streaming Experience
        </SectionTitle>
        <p className="text-balance text-center font-light opacity-50">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>

        <Button
          variant={"destructive"}
          className="flex flex-row gap-2 bg-red-600 hover:bg-red-700"
        >
          <PlayIcon className="size-4" /> Start Watching Now
        </Button>
      </Section>
    </section>
  );
}

export default Hero;
