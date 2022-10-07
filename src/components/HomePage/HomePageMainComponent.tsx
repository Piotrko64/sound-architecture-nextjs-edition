import { AboveMainFooter } from "./aboveMainFooter/AboveMainFooterComponent";
import { TheHeader } from "./header/TheHeader";
import { LatestNews } from "./latestNews/LatestNews";
import { PostHygraph } from "../../@types/graphql/PostHygraph";
import { NextImage } from "../../ui/nextImage/NextImage";
import classes from "./homePage.module.css";
import { YoutubeVideoInterface } from "../../@types/SSG/YoutubeVideoInterface";
import { PropsHomepage } from "../../@types/iframes/PropsHomepage";

export function HomePageMainComponent({ newYtIframeData, newBandcampIframe }: PropsHomepage) {
    return (
        <>
            <TheHeader />

            <NextImage additionalClass={classes.imageBack} imgURL="/assets/home/background.JPG" coverMode />

            <article className={classes.underHeader}>
                <LatestNews newYtIframeData={newYtIframeData} newBandcampIframe={newBandcampIframe} />
                <AboveMainFooter />
            </article>
        </>
    );
}
