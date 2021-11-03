import "tailwindcss/tailwind.css";
import "./../styles/app_styles.css";
import Head from "next/head";
import { Fragment } from "react";
import Headercomp from './../components/Header'


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Bee-Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headercomp />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
