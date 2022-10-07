import type { AppProps } from "next/app";
import { TheLayout } from "../layout/TheLayout";
import "../../styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Sound Architecture</title>
            </Head>
            <TheLayout>
                <>
                    <NextNProgress color="white" height={4} />
                    <Component {...pageProps} />
                </>
            </TheLayout>
        </>
    );
}

export default MyApp;
