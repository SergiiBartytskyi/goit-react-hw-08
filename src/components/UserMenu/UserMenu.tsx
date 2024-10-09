import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  if (!user) {
    return null;
  }

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span>{user.name}</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.btn}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
