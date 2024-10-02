import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { ArrowRight } from "lucide-react";
import useTv from "@/hooks/useTv";
interface CategoryCardProps {
  category: string;
}

function TvCategoryCard({ category }: CategoryCardProps) {
  const { data, isLoading } = useTv({
    key: `${category}-tv`,
    category: category,
  });
  return (
    <Card>
      <CardHeader>
        {isLoading ? (
          <div className="relative flex flex-wrap items-center justify-center gap-2 after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-t after:from-background after:via-transparent after:to-transparent">
            {Array.from({ length: 4 }, (_, index) => (
              <Skeleton
                key={index}
                className="aspect-square size-16 rounded-lg object-cover object-center"
              />
            ))}
          </div>
        ) : (
          <div className="relative flex flex-wrap items-center justify-center gap-2 after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-t after:from-background after:via-transparent after:to-transparent">
            {data

              .map(
                (item: {
                  id: string;
                  backdrop_path: string;
                  title: string;
                }) => (
                  <img
                    loading="lazy"
                    key={item.id}
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    alt={`image from movie ${item.title}`}
                    className="aspect-square size-14 rounded-lg object-cover object-center md:size-20 lg:size-16"
                  />
                ),
              )
              .slice(0, 4)}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-between">
        <CardTitle>{category}</CardTitle>
        <ArrowRight className="size-4" />
      </CardContent>
    </Card>
  );
}

export default memo(TvCategoryCard);
