import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="kr">
        <Head>
          <meta
            name="Description"
            content="Author: Hankang, AROM Store: Buying Luxury Goods"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
            rel="stylesheet"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <style>{`body { background-color: #EFF2F5!important}`}</style>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="black" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
