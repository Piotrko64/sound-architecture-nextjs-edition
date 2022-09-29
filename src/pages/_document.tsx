import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap"
                    rel="stylesheet"
                ></link>
                <link rel="shortcut icon" href="./assets/favicon.png"></link>

                <meta
                    name="description"
                    content="Welcome I share here my own sound libraries which you can check out on bandcamp: https://soundarchitecture.bandcamp.com
I would like to upload more complex ambiance videos in the future which would consist of greater number of different tracks and sound effects to design true ambience."
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
