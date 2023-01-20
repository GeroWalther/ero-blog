import { Fragment } from "react";
import AboutMe from "../components/about/aboutMe";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

function About(props) {
  return (
    <Fragment>
      <Head>
        <title>僕について 艶っぽいブログ</title>
        <meta
          name="description"
          content="艶っぽいブログの目標
          誘惑や男女とのテンション、魅惑的な言動、女性の美しさ、虜になって我慢できなくなりそうな困っている男などについてこのブログで皆に僕なりに面白くて、ドキドキさせる官能小説っぽい作品を読んでいただいているついでに最近ネットで、盛り上がっている芸術家の傑作を紹介することで男女を問わず皆さんに楽しい読書時間ができたら、幸いです。"
        />
      </Head>
      <AboutMe />
      <FeaturedPosts posts={props.posts} />
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

export default About;
