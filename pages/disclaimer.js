import Disclaimer from "../components/policy/disclaimer";
import Head from "next/head";
import { Fragment } from "react";

export default function () {
  return (
    <Fragment>
      <Head>
        <title>利用規約と免責事項</title>
        <meta
          name="description"
          content="艶っぽいブログの利用規約と免責事項。艶っぽいブログは責任を一切負いません。"
        />
      </Head>
      <Disclaimer />
    </Fragment>
  );
}
