import { useSelector, useDispatch } from "react-redux";
import { selectQueryFilter, changeFilter } from "../../redux/filters/slice";
import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectQueryFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        className={css.searchInput}
        id={searchId}
        onChange={handleFilterChange}
      />
    </form>
  );
};

export default SearchBox;
