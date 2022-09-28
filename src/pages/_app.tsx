import type { AppProps } from "next/app";
import { TheLayout } from "../layout/TheLayout";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <TheLayout>
            <Component {...pageProps} />
        </TheLayout>
    );
}

export default MyApp;
