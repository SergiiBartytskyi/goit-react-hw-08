import { FC, Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import { ILayoutProps } from "./Layout.types";
import css from "./Layout.module.css";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
