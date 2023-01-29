import { Fragment } from "react";
import Head from "next/head";

import HeroSlider from "../components/home-page/heroSlider";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import SupportSection from "../components/home-page/supportSection";
import Subscribe from "../components/subscribe/subscribe";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>艶っぽいブログ</title>
        <meta
          name="description"
          content="艶っぽいブログ。僕なりに面白く書いていた官能小説を皆に楽しく読書させていだけたら、幸いです。小説閲覧完全無料！"
        />
      </Head>
      <HeroSlider />
      <FeaturedPosts posts={props.posts} />
      <Subscribe />
      <SupportSection />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default HomePage;
