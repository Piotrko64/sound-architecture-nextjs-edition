import classes from "./latestNews.module.css";
import { PostSection } from "./postSection/PostSection";
import { YtSection } from "./ytSection/YtSection";
import cx from "classnames";
import { PropsHomepage } from "../../../@types/iframes/PropsHomepage";

export function LatestNews({ newYtIframeData, newBandcampIframe }: PropsHomepage) {
    return (
        <>
            <div className={cx(classes.contentNews, "globalPadding")}>
                <h2 className={classes.h2}> Newest Release </h2>
                <PostSection newBandcampIframe={newBandcampIframe} />
                <h2 className={classes.h2}> Youtube </h2>
                <YtSection newYtIframeData={newYtIframeData} />
            </div>
        </>
    );
}
