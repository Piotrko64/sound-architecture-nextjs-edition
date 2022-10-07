import type { NextPage } from "next";
import Head from "next/head";
import { IframeBandcampDataInterface } from "../@types/iframes/IframeBandcampDataInterface";
import { SoundsPageMainComponent } from "../components/SoundsPage/SoundsPageMainComponent";
import { iframesBandcampDataParser } from "../helpers/domParser/iframesBandcampDataParser";
import { getBandcampDataDataForIframe } from "../utils/SSG/bandcamp/getBandcampDataForIframe";

const Sounds: NextPage<IframeBandcampDataInterface> = ({ iframeObjects }) => {
    return (
        <div>
            <Head>
                <title>Sound Effects</title>
            </Head>
            <SoundsPageMainComponent iframesListData={iframeObjects} />
        </div>
    );
};

export default Sounds;
export async function getStaticProps() {
    const iframeData = await getBandcampDataDataForIframe();
    const iframeObjects = iframesBandcampDataParser(iframeData);

    return {
        props: { iframeObjects },
    };
}
