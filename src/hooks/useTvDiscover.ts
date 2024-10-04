import { tvDiscover } from "@/services/tvDiscover";
import { useQuery } from "@tanstack/react-query";

interface HookProps {
  key: string;
  genre: string;
  language?: string;
}

function useTvDiscover({ key, genre, language }: HookProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [key, genre],
    queryFn: async () => {
      return await tvDiscover
        .get("", {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            language: language,
            with_genres: genre,
          },
        })
        .then((response) => response.data.results);
    },
  });

  return { data, isLoading, isError };
}

export default useTvDiscover;
