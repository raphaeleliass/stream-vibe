import BgMovies from "@/components/Background/bgMovies";
import CtaPlan from "@/components/CTA/CtaPlan";
import Faq from "@/components/FAQ/FAQ";
import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

function Support() {
  return (
    <main className="relative grid grid-cols-1 justify-items-center md:grid-cols-5">
      <Section className="relative col-span-full md:col-span-2">
        <SectionTitle>Welcome to our support page!</SectionTitle>
        <SectionDescription>
          We're here to help you with any problems you may be having with our
          product.
        </SectionDescription>

        <BgMovies />
      </Section>

      <Section className="md:col-span-3">
        <form>
          <Card>
            <CardHeader className="grid grid-cols-1 gap-4 space-y-0 text-xs md:grid-cols-2">
              <label className="flex flex-col gap-1 text-muted-foreground">
                <p>First Name</p>
                <Input placeholder="Enter your first name" />
              </label>

              <label className="flex flex-col gap-1 text-muted-foreground">
                <p>Last Name</p>
                <Input placeholder="Enter your last name" />
              </label>

              <label className="flex flex-col gap-1 text-muted-foreground">
                <p>E-mail</p>
                <Input placeholder="Enter your e-mail" />
              </label>

              <label className="flex flex-col gap-1 text-muted-foreground">
                <p>Phone Number</p>
                <Input placeholder="Enter your phone number" />
              </label>
            </CardHeader>

            <CardContent>
              <label className="flex flex-col gap-1 text-xs text-muted-foreground">
                <p>Message</p>
                <Textarea placeholder="Enter your message" className="h-32" />
              </label>
            </CardContent>

            <CardFooter className="flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center justify-center gap-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-light text-muted-foreground"
                >
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>

              <Button
                variant={"destructive"}
                className="w-full bg-red-600 hover:bg-red-700 md:w-auto"
              >
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </form>
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
