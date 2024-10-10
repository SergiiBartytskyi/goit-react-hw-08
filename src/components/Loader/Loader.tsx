import { FC } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import css from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color="rgb(255 165 0)" />
    </div>
  );
};
export default Loader;
