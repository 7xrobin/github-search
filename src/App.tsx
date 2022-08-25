import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import styles from "./App.module.css";
import Search from "./components/search/search";
import "./styles/colors.css";

const getUser = async (username: string) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response;
};

function App() {
  const [username, setUserName] = useState<string>();
  const { data, isLoading, refetch } = useQuery(
    ["getUser", username],
    () => {
      username && getUser(username);
    },
    { enabled: false }
  );

  const handleSearch = () => {
    debugger;
    refetch();
  };

  return (
    <div className={styles.App}>
      <header>
        <h2>GitHub User Search</h2>
      </header>
      <Search onInputChange={setUserName} onSearch={handleSearch} />
    </div>
  );
}

export default App;
