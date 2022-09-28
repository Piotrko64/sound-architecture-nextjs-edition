import type { AppProps } from "next/app";
import { TheLayout } from "../layout/TheLayout";
import "../../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Sound Architecture</title>
            </Head>
            <TheLayout>
                <Component {...pageProps} />
            </TheLayout>
        </>
    );
}

export default MyApp;
