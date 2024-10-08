import BgMovies from "@/components/Background/bgMovies";
import CtaPlan from "@/components/CTA/CtaPlan";
import Faq from "@/components/FAQ/FAQ";
import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import SupportForm from "@/components/ui/support-form";

function Support() {
  return (
    <main className="relative grid grid-cols-1 justify-items-center md:grid-cols-5">
      <Section className="relative col-span-full md:col-span-2">
        <SectionTitle>Welcome to our support page!</SectionTitle>
        <SectionDescription>
          We're here to help you with any problems you may be having with our
          product.
        </SectionDescription>

        <BgMovies
          classIcon="size-32"
          className="justify-center gap-2 md:max-h-[18vh] lg:max-h-[35vh]"
          classImage="w-16 md:w-20 lg:w-32"
        />
      </Section>

      <Section className="md:col-span-3">
        <SupportForm />
      </Section>

      <Section className="col-span-full grid grid-cols-3 md:grid-cols-5">
        <SectionTitle className="col-span-full md:col-span-4">
          Frequently Asked Questions
        </SectionTitle>
        <SectionDescription className="col-span-full text-balance md:col-span-4">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about StreamVibe.
        </SectionDescription>
        <Button
          variant={"destructive"}
          className="md:tra col-span-1 place-items-center justify-self-start bg-red-600 hover:bg-red-700 md:-translate-y-8 md:justify-self-end lg:-translate-y-10"
        >
          Ask a Question
        </Button>

        <Faq className="col-span-full" />
      </Section>

      <CtaPlan className="col-span-full" />
    </main>
  );
}

export default Support;
