import { YTDataToIframe } from "../../../@types/iframes/IframeYTDataType";
import classes from "./oneYTIframe.module.css";
import { motion } from "framer-motion";

type Props = { iframeData: YTDataToIframe } & { loading: "lazy" | "eager" };

export function OneYTIframe({ iframeData, loading }: Props) {
    const { title, videoId, description } = iframeData;

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={classes.containerIframe}
        >
            <iframe
                className={classes.iframe}
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading={loading}
            ></iframe>

            <h2 className={classes.h2}>{title}</h2>
            <p className={classes.p}>{description}</p>
        </motion.div>
    );
}
