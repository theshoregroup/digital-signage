// Typescript _document file
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ReactElement } from "react";

// NOTES ON THIS FILE
// This page is a godsend: https://stackoverflow.com/questions/67087999/how-to-properly-type-the-document-tsx-file-from-next-js
// Currently NextJS' docs have shite explanations for how to write this file in TypeScript - you're just supposed to know what you're doing.
// Great.

class PageDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#e2e8f0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PageDocument;
