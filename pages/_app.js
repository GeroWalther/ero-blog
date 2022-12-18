import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  const prevImage = `images/site/cherry.png`;

  //${window.location.origin}/

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Web小説, ネット小説,携帯小説,ケータイ小説,オンライン小説,縦書き小説,小説投稿,小説投稿サイト"
        ></meta>
        <meta property="og:image" content={prevImage} key="ogimage" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
