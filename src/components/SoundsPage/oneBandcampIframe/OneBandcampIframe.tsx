import { iframeBandcampData } from "../../../../@types/IframeBandcampDataInterface";
import classes from "./oneBandcampIframe.module.css";
import { motion } from "framer-motion";

export function OneBandcampIframe({ srcIframe, hrefAnchor, title }: iframeBandcampData) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={classes.containerEntireIframe}
        >
            <div className={classes.subContainer}>
                <iframe src={srcIframe} seamless className={classes.iframe}></iframe>
                <a className={classes.titleBack} href={hrefAnchor}>
                    {title}
                </a>
            </div>
        </motion.div>
    );
}
