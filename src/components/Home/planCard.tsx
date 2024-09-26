import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const plans = [
  {
    title: "Basic Plan",
    desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: "9.99",
  },
  {
    title: "Standard Plan",
    desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    price: "12.99",
  },
  {
    title: "Premium Plan",
    desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    price: "14.99",
  },
];

function PlanCard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {plans.map((item) => (
        <Card key={item.title} className="space-y-6">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="flex flex-row items-center gap-2">
              <CardTitle className="text-3xl">${item.price}</CardTitle>
              <p className="text-muted-foreground">/ month</p>
            </span>
          </CardContent>
          <CardFooter className="w-full items-center justify-center gap-2 md:flex-col lg:flex-row">
            <Button variant={"outline"} className="md:w-full lg:w-auto">
              Start Free Trial
            </Button>
            <Button
              variant={"destructive"}
              className="bg-red-600 hover:bg-red-700 md:w-full lg:w-auto"
            >
              Choose Plan
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default PlanCard;
