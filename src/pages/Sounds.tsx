import type { NextPage } from "next";
import Head from "next/head";
import { iframeBandcampDataInterface } from "../../@types/IframeBandcampDataInterface";
import { Baner } from "../../ui/baner/Baner";
import { SoundsPageMainComponent } from "../components/SoundsPage/SoundsPageMainComponent";
import { iframesBandcampDataParser } from "../helpers/domParser/iframesBandcampDataParser";
import { getBandcampDataDataForIframe } from "../utils/SSG/bandcamp/getBandcampDataForIframe";

const Sounds: NextPage<iframeBandcampDataInterface> = ({ iframeObjects }) => {
    console.log(iframeObjects);
    return (
        <div>
            <Head>
                <title>Sound Effects</title>
            </Head>
            <Baner imgURL="/assets/baners/sounds.webp" title="Sound Libraries" />
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
