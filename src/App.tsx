import { useState } from "react";
import { useQuery } from "react-query";
import { getUser } from "./requests/user";
import Results from "./components/results/results";
import Search from "./components/search/search";
import "./styles/colors.css";
import styles from "./App.module.css";

function App() {
  const [username, setUserName] = useState<string>("Octocat");
  const [enableSearch, setEnableSearch] = useState(true);

  const { data, isLoading, isError } = useQuery(
    ["getUser", username],
    () => getUser(username),
    { enabled: enableSearch }
  );

  const handleInputChange = (name: string) => {
    setEnableSearch(false);
    setUserName(name);
  };

  const handleSearch = () => {
    setEnableSearch(true);
  };

  return (
    <div className={styles.App}>
      <header>
        <h2>GitHub User Search</h2>
      </header>
      <main className={styles.main}>
        <Search onInputChange={handleInputChange} onSearch={handleSearch} />
        <Results isLoading={isLoading} isError={isError} data={data} />
      </main>
    </div>
  );
}

export default App;
