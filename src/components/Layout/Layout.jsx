import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <main className={css.container}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </main>
  );
};

export default Layout;
