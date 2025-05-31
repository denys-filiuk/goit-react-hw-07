import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  const onFilter = (newValue) => {
    dispatch(changeFilter(newValue));
  };

  return (
    <div className={css.searchContainer}>
      <label htmlFor="text"> Find contacts by name </label>
      <input
        type="text"
        id="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
