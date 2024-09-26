import { TbError404Off } from "react-icons/tb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      <Card className="flex max-w-xs md:max-w-sm flex-col items-center justify-center text-center">
        <CardHeader>
          <TbError404Off className="size-32 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <CardTitle>Page not found!</CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription className="text-balance">
            Oops! It seems like the page you're looking for doesn't exist. Try
            checking the URL or going back to the{" "}
            <Link
              to={"/"}
              className="text-cyan-500 underline underline-offset-2"
            >
              home page
            </Link>
            .
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
}

export default NotFound;
