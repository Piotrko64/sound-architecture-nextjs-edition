import { AboveMainFooter } from "./aboveMainFooter/AboveMainFooterComponent";
import { TheHeader } from "./header/TheHeader";
import { LatestNews } from "./latestNews/LatestNews";
import { PostHygraph } from "../../@types/graphql/PostHygraph";
import { NextImage } from "../../ui/nextImage/NextImage";
import classes from "./homePage.module.css";

export function HomePageMainComponent({ dataPost }: PostHygraph) {
    return (
        <>
            {/* <img src={dataProject.photoPost.url} />
            <RichText content={dataProject.textPost.raw} /> */}
            <TheHeader />

            <NextImage additionalClass={classes.imageBack} imgURL="/assets/home/background.JPG" coverMode />

            <article className={classes.underHeader}>
                <LatestNews dataPost={dataPost} />
                <AboveMainFooter />
            </article>
        </>
    );
}
