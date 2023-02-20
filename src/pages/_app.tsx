import "../styles/globals.scss";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Layout } from "../components/";

type AppPropsWithLayout = AppProps & {
  Component: NextPage;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
