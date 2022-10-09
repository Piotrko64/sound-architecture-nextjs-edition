import type { NextPage } from "next";
import Head from "next/head";
import { ArrayYTDataIframe } from "../@types/iframes/IframeYTDataType";
import { AmbiencePageMainComponent } from "../components/AmbiencePage/AmbiencePageMainComponent";
import { revalidateTime } from "../config/revalidate";
import { getYoutubeVideos } from "../utils/SSG/youtube/getYoutubeVideos";

const Ambience: NextPage<{ dataYTVideos: ArrayYTDataIframe }> = ({ dataYTVideos }) => {
    return (
        <div>
            <Head>
                <title>Ambience</title>
            </Head>

            <AmbiencePageMainComponent iframesData={dataYTVideos} />
        </div>
    );
};

export default Ambience;
export async function getStaticProps() {
    const dataYTVideos: ArrayYTDataIframe = await getYoutubeVideos();

    return {
        props: {
            dataYTVideos,
        },
        revalidate: revalidateTime,
    };
}
