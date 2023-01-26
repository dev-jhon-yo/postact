import { useState } from "react";
import styles from "./index.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { avatarURL } from "../../config/avatarData";
import { Avatar } from "../Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={avatarURL.frogOne} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>User Name</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                About 1h ago
                <span>{likeCount} Likes</span>
              </time>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.likeButton}
                onClick={handleDeleteComment}
                title="Delete Comment"
              >
                <Trash size={24} />
              </button>
              <button
                className={styles.deleteButton}
                onClick={handleLikeComment}
              >
                <ThumbsUp size={24} />
              </button>
            </div>
          </header>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
