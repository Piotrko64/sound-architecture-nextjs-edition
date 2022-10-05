import { PostHygraph } from "../../../@types/graphql/PostHygraph";
import classes from "./latestNews.module.css";

export function LatestNews({ dataPost }: PostHygraph) {
    return (
        <>
            <h2 className={classes.h2}> What&apos;s new</h2>
        </>
    );
}
