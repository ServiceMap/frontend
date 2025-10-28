import { lazy, Suspense } from "react";
import Loader from "@/components/ui/Loader.tsx";

const AppRouter = lazy(() => import("@/routing/AppRouter"));

export const App = () => (
  <Suspense fallback={<Loader fullscreen={true} />}>
    <AppRouter />
  </Suspense>
);

export default App;
