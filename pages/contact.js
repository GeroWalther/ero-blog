import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

function Contact() {
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
    </Fragment>
  );
}

export default Contact;
