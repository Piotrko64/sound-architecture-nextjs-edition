import { YTDataToIframe } from "../../../../@types/iframes/IframeYTDataType";
import { PropsHomepage } from "../../../../@types/iframes/PropsHomepage";
import classes from "./ytSection.module.css";

export function YtSection({ newYtIframeData }: { newYtIframeData: YTDataToIframe }) {
    const { title, videoId } = newYtIframeData;
    return (
        <div>
            <iframe
                className={classes.iframe}
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
