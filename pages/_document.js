import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="You don't believe in the commonplace, and neither do we. We strive for absolute greatness - and our watches are the living illustration of that ideology. Are you ready to make your mark?"
          />
          <meta name="application-name" content="PrimeAmbassador.com" />
          <meta
            property="og:title"
            content="Prime Ambassador - Superior Timepieces"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://primeambassador.com" />
          <meta
            property="og:image"
            content="https://primeambassador.com/assets/images/share/ambassador.jpg"
          />
          <meta
            property="og:description"
            content="You don't believe in the commonplace, and neither do we. We strive for absolute greatness - and our watches are the living illustration of that ideology. Are you ready to make your mark?"
          />
          <meta property="og:site_name" content="PrimeAmbassador.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
