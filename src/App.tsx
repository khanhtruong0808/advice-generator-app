import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdviceGenerator from "./components/AdviceGenerator";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-neutral-200 h-screen flex flex-col justify-center items-center">
        <AdviceGenerator />
      </div>
    </QueryClientProvider>
  );
};

export default App;
