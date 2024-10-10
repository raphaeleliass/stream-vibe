import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ComponentProps, useEffect, useState } from "react";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { toast } from "@/hooks/use-toast";

interface ItemData {
  id: string;
  poster_path: string;
  title: string;
}

interface ButtonProps extends ComponentProps<"button"> {
  itemData: ItemData;
  mediaType: "Movies" | "Show";
}

function ButtonFavorite({
  mediaType,
  itemData,
  className,
  ...props
}: ButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem(`favorite-${mediaType}`) || "[]",
    );

    const isItemFavorited = favorites.some(
      (favoriteItem: ItemData) => favoriteItem.id === itemData.id,
    );

    setIsFavorite(isItemFavorited);
  }, [itemData.id, mediaType]);

  function handleFavoriteToggle() {
    const favorites = JSON.parse(
      localStorage.getItem(`favorite-${mediaType}`) || "[]",
    );

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter(
        (favoriteItem: ItemData) => favoriteItem.id !== itemData.id,
      );
      toast({
        title: `Removed!`,
        description: `${itemData.title} removed from your list.`,
        duration: 2600,
      });
    } else {
      updatedFavorites = [...favorites, itemData];
      toast({
        title: `Success!`,
        description: `${itemData.title} added to your list!`,
        duration: 2600,
      });
    }

    localStorage.setItem(
      `favorite-${mediaType}`,
      JSON.stringify(updatedFavorites),
    );

    setIsFavorite(!isFavorite);
  }

  return (
    <Button
      variant={"secondary"}
      className={cn("gap-1", className)}
      onClick={handleFavoriteToggle}
      {...props}
    >
      {isFavorite ? (
        <>
          <TbHeartFilled className="size-5" />
          <p className="md:hidden">Remove from Favorites</p>
        </>
      ) : (
        <>
          <TbHeart className="size-5" />
          <p className="md:hidden">Add to Favorites</p>
        </>
      )}
    </Button>
  );
}

export default ButtonFavorite;
