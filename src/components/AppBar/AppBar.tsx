import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

const AppBar: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      <div className={css.wrapper}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
