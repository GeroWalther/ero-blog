import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function Contact(props) {
  return (
    <Fragment>
      <Head>
        <title>問い合わせ</title>
        <meta
          name="description"
          content="問い合わせ ご感想や改善点、提出こちらへ"
        />
      </Head>
      <ContactForm />
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

export default Contact;
