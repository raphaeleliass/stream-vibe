import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/Section/Section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

function Support() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-5">
      <Section className="md:col-span-2">
        <SectionTitle>Welcome to our support page!</SectionTitle>
        <SectionDescription>
          We're here to help you with any problems you may be having with our
          product.
        </SectionDescription>

        <div className="flex h-full bg-red-500"></div>
      </Section>
      <Section className="md:col-span-3">
        <form>
          <Card></Card>
          <CardHeader className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label>
              <p>First Name</p>
              <Input placeholder="Enter your first name" />
            </label>

            <label>
              <p>Last Name</p>
              <Input placeholder="Enter your last name" />
            </label>

            <label>
              <p>E-mail</p>
              <Input placeholder="Enter your e-mail" />
            </label>

            <label>
              <p>Phone Number</p>
              <Input placeholder="Enter your phone number" />
            </label>
          </CardHeader>

          <CardContent>
            <label>
              <p>Message</p>
              <Textarea placeholder="Enter your message" />
            </label>
          </CardContent>

          <CardFooter>
            <RadioGroup defaultValue="teste">
              <label htmlFor="">
               {/* TODO TERMINAR O LAYOUT DO FORM */}
                Default
                <RadioGroupItem value="default"></RadioGroupItem>
              </label>
            </RadioGroup>
          </CardFooter>
        </form>
      </Section>
    </main>
  );
}

export default Support;
