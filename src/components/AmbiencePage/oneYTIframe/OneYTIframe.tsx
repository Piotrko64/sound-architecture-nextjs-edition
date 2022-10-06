import { YTDataToIframe } from "../../../@types/iframes/IframeYTDataType";
import classes from "./oneYTIframe.module.css";

export function OneYTIframe({ iframeData }: { iframeData: YTDataToIframe }) {
    const { title, videoId, description } = iframeData;

    return (
        <div className={classes.containerIframe}>
            <iframe
                className={classes.iframe}
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h2 className={classes.h2}>{title}</h2>
            <p className={classes.p}>{description}</p>
        </div>
    );
}
