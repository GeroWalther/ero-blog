import Policy from "../components/policy/policy";
import Head from "next/head";
import { Fragment } from "react";

export default function () {
  return (
    <Fragment>
      <Head>
        <title>プライバシーポリシー</title>
        <meta
          name="description"
          content="艶っぽいブログのプライバシーポリシー。- 皆様の個人情報の重要性を認識し、その適正な収集、利用、保護をはかるとともに、安全管理を行うため、プライバシーポリシーを定め、次のとおり運用します。"
        />
      </Head>
      <Policy />
    </Fragment>
  );
}
