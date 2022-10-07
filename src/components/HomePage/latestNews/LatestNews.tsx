import { PostHygraph } from "../../../@types/graphql/PostHygraph";
import classes from "./latestNews.module.css";
import { PostSection } from "./postSection/PostSection";
import { YtSection } from "./ytSection/YtSection";
import cx from "classnames";

export function LatestNews() {
    return (
        <>
            <div className={cx(classes.contentNews, "globalPadding")}>
                <h2 className={classes.h2}> Newest Release </h2>
                <PostSection />
                <h2 className={classes.h2}> Youtube </h2>
                <YtSection />
            </div>
        </>
    );
}
