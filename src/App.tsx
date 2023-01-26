import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { posts } from "./config/postData";
import styles from "./styles/app.module.css";

import "./styles/global.css";

export function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
