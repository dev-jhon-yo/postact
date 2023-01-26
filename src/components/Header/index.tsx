import styles from "./index.module.css";

import reactIcon from "../../assets/icon-react-80.svg";
import { Sidebar } from "../AccountMenu";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={reactIcon} alt="React Icon" />
        <span>Postact</span>
      </div>
      <Sidebar />
    </header>
  );
}
