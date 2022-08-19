import "../styles/globals.css";
import "../components/Post/post.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
