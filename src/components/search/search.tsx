import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg";
import styles from "./search.module.css";

interface SearchProps {}

function Search({}: SearchProps) {
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.icon} />
      <input className={styles.input} placeholder="Search Github Username" />
      <button className={styles.button}>Search</button>
    </div>
  );
}

export default Search;
