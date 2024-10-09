import { ChangeEvent, FC, useId } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeFilter } from "../../redux/filters/slice";
import { selectQueryFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

const SearchBox: FC = () => {
  const searchId = useId();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectQueryFilter);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.container}>
      <label htmlFor={searchId}>Find contact by name or number</label>
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
