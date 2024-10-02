import GenreCarousel from "@/components/Carousel/movieGenreCarousel";
import CtaPlan from "@/components/CTA/CtaPlan";
import Faq from "@/components/FAQ/FAQ";
import Benefits from "@/components/Home/benefits";
import Hero from "@/components/Home/hero";
import PlanCard from "@/components/Home/planCard";
import {
  Section,
  SectionDescription,
  SectionTitle,
  SectionHeader,
} from "@/components/Section/Section";

function Home() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center">
      <Hero />

      <Section className="items-start">
        <SectionHeader>
          <SectionTitle>Explore our wide variety of categories</SectionTitle>
          <SectionDescription>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </SectionDescription>
        </SectionHeader>

        <GenreCarousel />
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

      <CtaPlan />
    </main>
  );
}

export default Home;
