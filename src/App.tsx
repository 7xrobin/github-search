import styles from "./App.module.css";
import Search from "./components/search/search";
import "./styles/colors.css";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h2>GitHub User Search</h2>
      </header>
      <Search />
    </div>
  );
}

export default App;
