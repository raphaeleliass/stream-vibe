import { ComponentProps } from "react";
import { Section, SectionDescription, SectionTitle } from "../Section/Section";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

function CtaPlan({ className, ...props }: ComponentProps<"div">) {
  return (
    <Section className={className} {...props}>
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
  );
}

export default CtaPlan;
