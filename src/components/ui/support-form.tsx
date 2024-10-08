import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CircleCheck } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters long"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(8, "Phone number must be at least 8 characters"),
  message: z.string().min(30, "Message must be at least 30 characters long"),
});

type FormSchema = z.infer<typeof formSchema>;

function SupportForm() {
  const [formSubmited, setFormSubmited] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmitForm(data: FormSchema) {
    console.log(data);
    setFormSubmited(true);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Card>
          <CardHeader className="grid grid-cols-1 gap-4 space-y-0 text-xs md:grid-cols-2">
            <label className="flex flex-col gap-1 text-muted-foreground">
              <p>First Name</p>
              <Input
                placeholder="Enter your first name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-xs text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-1 text-muted-foreground">
              <p>Last Name</p>
              <Input
                placeholder="Enter your last name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-xs text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-1 text-muted-foreground">
              <p>E-mail</p>
              <Input placeholder="Enter your e-mail" {...register("email")} />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </label>

            <label className="flex flex-col gap-1 text-muted-foreground">
              <p>Phone Number</p>
              <Input
                placeholder="Enter your phone number"
                {...register("phoneNumber")}
              />

              {errors.phoneNumber && (
                <p className="text-xs text-red-600">
                  {errors.phoneNumber.message}
                </p>
              )}
            </label>
          </CardHeader>

          <CardContent>
            <label className="flex flex-col gap-1 text-xs text-muted-foreground">
              <p>Message</p>
              <Textarea
                placeholder="Enter your message"
                className="h-32"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-red-600">{errors.message.message}</p>
              )}
            </label>
          </CardContent>

          <CardFooter className="flex-col items-center justify-between gap-6 md:flex-row">
            <Button
              variant={"destructive"}
              className="w-full bg-red-600 hover:bg-red-700 md:w-auto"
              type="submit"
            >
              Send Message
            </Button>
          </CardFooter>
        </Card>
      </form>
      {formSubmited && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <Card className="flex flex-col items-center justify-center">
            <CardHeader className="items-center justify-center">
              <CircleCheck className="size-10 text-green-500" />
              <CardTitle>Success!</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription>
                Your message has been sent successfully!
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button
                variant={"secondary"}
                onClick={() => setFormSubmited(false)}
              >
                Close
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}

export default SupportForm;
