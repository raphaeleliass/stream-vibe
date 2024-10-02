import { TvApi } from "@/services/TvApi";
import { useQuery } from "@tanstack/react-query";

interface HookProps {
  key: string;
  category: string;
  language?: string;
}

function useTv({ key, category, language }: HookProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [key, category],
    queryFn: async () => {
      return await TvApi.get(category, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          language: language,
        },
      }).then((response) => response.data.results);
    },
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isError };
}

export default useTv;
