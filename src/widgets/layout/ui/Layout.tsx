import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/widgets/layout";

export function Layout() {
  useEffect(() => {
    const header = document.querySelector("header");
    const h = header ? header.getBoundingClientRect().height : 64;
    document.documentElement.style.setProperty("--header-h", `${h}px`);
  }, []);

  return (
    <div>
      <Header />

      <main
        className="tw:container tw:mx-0 tw:px-4 tw:py-4"
        style={{ minHeight: "calc(100dvh + 1px - var(--header-h, 64px))" }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
