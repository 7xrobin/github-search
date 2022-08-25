import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import styles from "./App.module.css";
import Search from "./components/search/search";
import User from "./components/user/user";
import { UserInterface } from "./interfaces/user";
import "./styles/colors.css";

const getUser = async (username: string): Promise<UserInterface> => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => response.data);
};

function App() {
  const [username, setUserName] = useState<string>("Octocat");

  const { data, isLoading, refetch } = useQuery(["getUser", username], () => {
    return getUser(username);
  });

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className={styles.App}>
      <header>
        <h2>GitHub User Search</h2>
      </header>
      <Search onInputChange={setUserName} onSearch={handleSearch} />
      <div className={styles.results}>
        {isLoading ? <p>Loading...</p> : data && <User user={data} />}
      </div>
    </div>
  );
}

export default App;
