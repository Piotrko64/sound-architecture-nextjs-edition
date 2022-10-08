import type { NextPage } from "next";
import { PropsHomepage } from "../@types/iframes/PropsHomepage";
import { HomePageMainComponent } from "../components/HomePage/HomePageMainComponent";
import { iframesBandcampDataParser } from "../helpers/domParser/iframesBandcampDataParser";
import { getBandcampDataDataForIframe } from "../utils/SSG/bandcamp/getBandcampDataForIframe";
import { getYoutubeVideos } from "../utils/SSG/youtube/getYoutubeVideos";

const Home: NextPage<PropsHomepage> = ({ newYtIframeData, newBandcampIframe }) => {
    return <HomePageMainComponent newYtIframeData={newYtIframeData} newBandcampIframe={newBandcampIframe} />;
};

export default Home;
export async function getStaticProps() {
    const newYtIframeData = await (await getYoutubeVideos()).at(-1);
    const newBandcampIframe = iframesBandcampDataParser(await getBandcampDataDataForIframe())[0];

    return {
        props: {
            newYtIframeData,
            newBandcampIframe,
        },
        revalidate: 86_400,
    };
}
