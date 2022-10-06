import { PostHygraph } from "../../../@types/graphql/PostHygraph";
import { BandcampSection } from "./bandcampSection/BandcampSection";
import classes from "./latestNews.module.css";
import { PostSection } from "./postSection/PostSection";
import { YtSection } from "./ytSection/YtSection";

export function LatestNews({ dataPost }: PostHygraph) {
    return (
        <>
            <div className={classes.contentNews}>
                <PostSection dataPost={dataPost} />

                <YtSection />
            </div>
        </>
    );
}
