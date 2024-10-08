import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoutesProvider from "./routes/RoutesProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesProvider />
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
