import BeatLoader from "react-spinners/BeatLoader";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color="rgb(0 255 55)" />
    </div>
  );
};
export default Loader;
