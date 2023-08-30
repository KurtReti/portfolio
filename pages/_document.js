import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Victor+Mono:wght@500&display=swap" rel="stylesheet" />
          
       </Head>
        <body className="bg-mountain">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
