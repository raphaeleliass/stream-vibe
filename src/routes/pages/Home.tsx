import Faq from "@/components/FAQ/FAQ";
import GenreCard from "@/components/GenreCard/genreCard";
import Benefits from "@/components/Home/benefits";
import Hero from "@/components/Home/hero";
import PlanCard from "@/components/Home/planCard";
import {
  Section,
  SectionDescription,
  SectionTitle,
  SectionHeader,
} from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Home() {
  const genres: Array<
    "Action" | "Animation" | "Comedy" | "War" | "Fantasy" | "Horror" | "Romance"
  > = ["Action", "Animation", "Comedy", "War", "Fantasy", "Horror"];

  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Section className="items-start">
        <SectionHeader>
          <SectionTitle>Explore our wide variety of categories</SectionTitle>
          <SectionDescription>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </SectionDescription>
        </SectionHeader>
        <Carousel className="mx-auto w-full max-w-xs md:max-w-2xl lg:max-w-6xl">
          <CarouselContent>
            {genres.map((genre) => (
              <CarouselItem
                key={genre}
                className="basis-2/3 md:basis-2/5 lg:basis-1/5"
              >
                <GenreCard genre={genre} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden md:flex" />
          <CarouselPrevious className="hidden md:flex" />
        </Carousel>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>
            We Provide you streaming experience across various devices.
          </SectionTitle>
          <SectionDescription>
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </SectionDescription>
        </SectionHeader>
        <Benefits />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionDescription>
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </SectionDescription>
        </SectionHeader>

        <Faq />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Choose the plan that's right for you</SectionTitle>
          <SectionDescription>
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </SectionDescription>
        </SectionHeader>

        <PlanCard />
      </Section>

      <Section>
        <Card className="flex flex-col items-center justify-around bg-gradient-to-r from-black via-transparent to-red-900 md:flex-row">
          <div>
            <CardHeader>
              <SectionTitle>Start your free trial today!</SectionTitle>
            </CardHeader>
            <CardContent>
              <SectionDescription>
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </SectionDescription>
            </CardContent>
          </div>

          <CardFooter className="flex w-full md:w-auto md:py-0">
            <Button
              variant={"destructive"}
              className="w-full bg-red-600 drop-shadow-2xl hover:bg-red-700"
            >
              Start a free trial
            </Button>
          </CardFooter>
        </Card>
      </Section>
    </main>
  );
}

export default Home;
