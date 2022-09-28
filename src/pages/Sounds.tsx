import type { NextPage } from "next";
import Head from "next/head";
import { Baner } from "../../ui/baner/Baner";
import { iframesBandcampDataParser } from "../helpers/domParser/iframesBandcampDataParser";

const Sounds: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Sound Effects</title>
            </Head>
            <Baner imgURL="/assets/baners/sounds.webp" title="Sound Libraries" />
            <div></div>
        </div>
    );
};

export default Sounds;
// export async function getStaticProps() {

// }
