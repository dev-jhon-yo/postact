import { avatarURL } from "../../config/avatarData";
import { Avatar } from "../Avatar";

import styles from "./index.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <div className={styles.account}>
          <strong>User Name</strong>
          <span>UI/UX Designer</span>
        </div>
        <Avatar src={avatarURL.frogOne} />
      </nav>
    </aside>
  );
}
