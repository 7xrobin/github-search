import { UserInterface } from "../../interfaces/user";
import styles from "./user.module.css";

interface UserProps {
  user: UserInterface;
}

function NotAvailable() {
  return <span className={styles.unavailable}>Not Available</span>;
}

function User({ user }: UserProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={user.avatar_url} alt="Avatar" className={styles.avatar} />
        <div className={styles.info}>
          <span className={styles.name}>{user.name || user.login}</span>
          <a href={user.html_url} className={styles.username}>
            @{user.login}
          </a>
          <span>Email : {user.email || <NotAvailable />}</span>
        </div>
      </div>

      <div className={styles.links}>
        <span>Location : {user.location || <NotAvailable />}</span>
        <span>Company : {user.company || <NotAvailable />}</span>
      </div>
      <div className={styles.links}>
        <span>Blog : {user.blog || <NotAvailable />}</span>
        <span>Twitter : {user.twitter_username || <NotAvailable />}</span>
      </div>
      <div className={styles.links}>
        <span>Public Repos : {user.public_repos || <NotAvailable />}</span>
        <span>Followers : {user.followers || <NotAvailable />}</span>
      </div>
      <p>Bio: {user.bio || <NotAvailable />}</p>
    </div>
  );
}

export default User;
