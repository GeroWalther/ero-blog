import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const prevImage = `images/site/flower-red.png`;

  //${window.location.origin}/

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="艶っぽいブログ,艶っぽい,ブログ,ero-blog,ero,blog,japanese,novel,日常,冒険,私小説,騎士,エロい,びしょびしょ,濡れる,濡らす,ロマンチック,物語,小説,色っぽい,官能小説,えちえち,エッチ,Web小説,ネット小説,携帯小説,ケータイ小説,オンライン小説,縦書き小説,小説投稿,小説投稿サイト"
        ></meta>
        <meta property="og:image" content={prevImage} key="ogimage" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
