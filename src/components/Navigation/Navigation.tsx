import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import { INavigationProps } from "./Navigation.types";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }: INavigationProps) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <nav className={css.container}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
