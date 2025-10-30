import { lazy, Suspense } from "react";

const AppRouter = lazy(() => import("@/routing/AppRouter"));
const Loader = lazy(() => import("@/components/ui/Loader"));

export const App = () => (
  <Suspense fallback={<Loader fullscreen={true} />}>
    <AppRouter />
  </Suspense>
);

export default App;
