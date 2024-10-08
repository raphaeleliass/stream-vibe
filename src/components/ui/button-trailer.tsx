import { PlayIcon } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  className?: string;
  param: string;
}

function ButtonTrailer({ className, param }: ButtonProps) {
  return (
    <Button
      className={cn("gap-1 bg-red-600 hover:bg-red-700", className)}
      variant={"destructive"}
    >
      <PlayIcon className="size-4" />
      <a
        href={`https://youtube.com/results?search_query=${param}%20trailer`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Watch Trailer
      </a>
    </Button>
  );
}

export default ButtonTrailer;
