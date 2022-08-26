import { UserInterface } from "../../interfaces/user";
import User from "../user/user";
import styles from "./results.module.css";

interface ResultsProps {
  isLoading: boolean;
  isError: boolean;
  data?: UserInterface;
}

function Results({ isLoading, isError, data }: ResultsProps) {
  return (
    <div className={styles.results}>
      {isLoading ? <p>Loading...</p> : data && <User user={data} />}
      {isError && (
        <p>The user was not found. Try to search again or refresh the page.</p>
      )}
    </div>
  );
}

export default Results;
