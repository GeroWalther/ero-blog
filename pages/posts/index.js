import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";

import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage({ allPosts }) {
  return (
    <Fragment>
      <Head>
        <title>全ての記事</title>
        <meta name="description" content="全ての記事 艶っぽい小説 官能小説" />
      </Head>
      <AllPosts posts={allPosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}

export default AllPostsPage;
