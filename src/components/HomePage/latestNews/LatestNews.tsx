import { PostHygraph } from "../../../@types/graphql/PostHygraph";
import { BandcampSection } from "./bandcampSection/BandcampSection";
import classes from "./latestNews.module.css";
import { PostSection } from "./postSection/PostSection";
import { YtSection } from "./ytSection/YtSection";

export function LatestNews({ dataPost }: PostHygraph) {
    return (
        <>
            <h2 className={classes.h2}> What&apos;s new</h2>
            <div className={classes.contentNews}>
                <PostSection dataPost={dataPost} />
                <h2 className={classes.h2}> Youtube</h2>
                <YtSection />
                <h2 className={classes.h2}> Bandcamp </h2>
                <BandcampSection />
            </div>
        </>
    );
}
