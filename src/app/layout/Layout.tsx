import { ScrollRestoration } from "react-router";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Footer, Header } from "@/widgets/layout";

export function Layout() {
  return (
    <div>
      <Header />

      <main
        className="tw:container tw:mx-0 tw:p-4"
        style={{ minHeight: "calc(100dvh + 1px - var(--header-h))" }}
      >
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Layout;
