
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";


import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>
          
        </title>
        <meta
          name="description"
          content="Learniverse is a platform to learn Computer Science concepts interactively."
        />
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#199edd" />
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <Component {...pageProps} />
     
    </>
  );
};

export default MyApp;