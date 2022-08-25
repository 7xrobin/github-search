import { ChangeEvent, HTMLProps, useState } from "react";
import { VoidExpression } from "typescript";
import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg";
import styles from "./search.module.css";

interface SearchProps extends HTMLProps<HTMLInputElement> {
  onSearch: () => void;
  onInputChange: (username: string) => void;
}

function Search({ onSearch, onInputChange }: SearchProps) {
  //   const [name, setName] = useState<string>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event?.target?.value);
  };

  const onSearchClick = () => {
    onSearch();
  };

  return (
    <div className={styles.container}>
      <SearchIcon className={styles.icon} />
      <input
        onChange={handleInputChange}
        className={styles.input}
        placeholder="Search Github Username"
      />
      <button className={styles.button} onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
}

export default Search;
