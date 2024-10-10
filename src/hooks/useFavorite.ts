import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ItemData {
  id?: string;
  poster_path?: string;
  title?: string;
  name?: string;
}

export function useFavorite(itemData: ItemData, mediaType: "Movies" | "Shows") {
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

  function toggleFavorite() {
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
        description: `${itemData.title || itemData.name} removed from your list.`,
        duration: 2600,
      });
    } else {
      updatedFavorites = [...favorites, itemData];
      toast({
        title: `Success!`,
        description: `${itemData.title || itemData.name} added to your list!`,
        duration: 2600,
      });
    }

    localStorage.setItem(
      `favorite-${mediaType}`,
      JSON.stringify(updatedFavorites),
    );
    setIsFavorite(!isFavorite);
  }

  return { isFavorite, toggleFavorite };
}
