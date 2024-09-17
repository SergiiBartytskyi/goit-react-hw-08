import BeatLoader from "react-spinners/BeatLoader";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color="orangered" />
    </div>
  );
};
export default Loader;
