import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { GeistSans } from "geist/font/sans";

import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={GeistSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
