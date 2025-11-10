import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

function Layout() {
  return (
    <div className="tw:flex tw:min-h-dvh tw:flex-col">
      <Header />

      <main className="tw:container tw:mx-0 tw:flex-1 tw:px-4 tw:py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export { Layout };
