import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import DrawerContextProvider from "./Store/drawer-context";
import MaterialThemeProvider from "./Components/Layout/MaterialThemeProvider";
import { CssBaseline } from "@mui/material";
const AppWrapper: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 60000,
      },
    },
  });
  return (
    <MaterialThemeProvider>
      <DrawerContextProvider>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <App />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </DrawerContextProvider>
    </MaterialThemeProvider>
  );
};
export default AppWrapper;
