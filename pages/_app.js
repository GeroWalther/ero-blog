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
        <meta property="og:image" content={prevImage} key="ogimage" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
