import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title>Mroki-shop</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta name="website" content="https://shreethemes.in" />
          <meta name="Version" content="v3.8.0" />

          <Link rel="shortcut icon" href="asset/images/favicon.ico" />

          <Link href="asset/css/bootstrap.min.css" rel="stylesheet" type="text/css" />

          <Link href="asset/css/tobii.min.css" rel="stylesheet" type="text/css" />

          <Link href="asset/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
          <Link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />

          <Link rel="stylesheet" href="asset/css/tiny-slider.css" />

          <Link href="asset/css/style.css" rel="stylesheet" type="text/css" id="theme-opt" />

          <Link href="asset/css/colors/default.css" rel="stylesheet" id="color-opt" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <Script src="asset/js/bootstrap.bundle.min.js" />

          <Script src="asset/js/tiny-slider.js "></Script>

          <Script src="asset/js/tobii.min.js "></Script>

          <Script src="asset/js/feather.min.js"></Script>

          <Script src="asset/js/switcher.js"></Script>

          <Script src="asset/js/plugins.init.js"></Script>

          <Script src="asset/js/app.js"></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
