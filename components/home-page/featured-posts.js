import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>最近盛り上がる小説</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
export default FeaturedPosts;
