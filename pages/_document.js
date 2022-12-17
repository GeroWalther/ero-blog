import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="jp">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
          <div id="portal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
