import { PostHygraph } from "../../../@types/graphql/PostHygraph";
import classes from "./latestNews.module.css";
import { PostSection } from "./postSection/PostSection";
import { YtSection } from "./ytSection/YtSection";

export function LatestNews({ dataPost }: PostHygraph) {
    return (
        <>
            <div className={classes.contentNews}>
                <h2 className={classes.h2}> Newest Release </h2>
                <PostSection dataPost={dataPost} />
                <h2 className={classes.h2}> Youtube </h2>
                <YtSection />
            </div>
        </>
    );
}
