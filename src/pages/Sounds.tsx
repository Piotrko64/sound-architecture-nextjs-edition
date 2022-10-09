import type { NextPage } from "next";
import Head from "next/head";
import { IframeBandcampDataInterface } from "../@types/iframes/IframeBandcampDataInterface";
import { SoundsPageMainComponent } from "../components/SoundsPage/SoundsPageMainComponent";
import { iframesBandcampDataParser } from "../helpers/domParser/iframesBandcampDataParser";
import { getBandcampDataDataForIframe } from "../utils/SSG/bandcamp/getBandcampDataForIframe";

const Sounds: NextPage<any> = ({ iframeObjects }) => {
    return (
        <div>
            <Head>
                <title>Sound Effects</title>
            </Head>
            <SoundsPageMainComponent iframesListData={iframesBandcampDataParser(iframeObjects)} />
        </div>
    );
};

export default Sounds;
export async function getStaticProps() {
    const iframeData = await getBandcampDataDataForIframe();

    return {
        props: { iframeObjects: iframeData },
        revalidate: 86_400,
    };
}
