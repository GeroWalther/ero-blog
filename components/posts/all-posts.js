import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>全ての記事</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
export default AllPosts;
