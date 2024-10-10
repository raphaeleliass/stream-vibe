import { cn } from "@/lib/utils";
import { Button } from "./button";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { useFavorite } from "@/hooks/useFavorite";

interface ItemData {
  id?: string;
  poster_path?: string;
  name?: string;
}

interface ButtonProps {
  itemData: ItemData;
  className?: string;
}

function ButtonFavoriteShow({ itemData, className, ...props }: ButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorite(itemData, "Shows");

  return (
    <Button
      variant={"secondary"}
      className={cn("gap-1", className)}
      onClick={toggleFavorite}
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

export default ButtonFavoriteShow;
