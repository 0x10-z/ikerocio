import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import ReactGA from "react-ga4";

export default function App({ Component, pageProps }: AppProps) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // 0 = enero, 1 = febrero, ...
  const isWinter = () => {
    return currentMonth === 11 || currentMonth === 0 || currentMonth === 1;
  };

  ReactGA.initialize("G-5DWQZQ9EZD");

  return (
    <>
      <Head>
        <title>Iker Ocio | CV</title>
        {isWinter() && (
          <Script
            defer
            src="https://app.embed.im/snow.js?{{ current_month }}"
          />
        )}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
