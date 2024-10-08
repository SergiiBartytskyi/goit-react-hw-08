import { FC } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { ILinkProps } from "./AuthNav.types";
import css from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }: ILinkProps) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav: FC = () => {
  return (
    <div>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
