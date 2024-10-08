import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";

import { Section, SectionTitle } from "../Section/Section";
import { memo } from "react";
import BgMovies from "../Background/bgMovies";
function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <BgMovies className="max-h-[30dvh] gap-4 md:max-h-[23dvh] md:gap-2 lg:max-h-[40dvh] lg:gap-3" />

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

export default memo(Hero);
