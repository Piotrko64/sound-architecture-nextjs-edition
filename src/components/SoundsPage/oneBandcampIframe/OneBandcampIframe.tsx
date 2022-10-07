import classes from "./oneBandcampIframe.module.css";
import { motion } from "framer-motion";
import { IframeBandcampData } from "../../../@types/iframes/IframeBandcampDataInterface";

type Props = Omit<IframeBandcampData, "mainTitle">;

export function OneBandcampIframe({ srcIframe, hrefAnchor, generalTitle }: Props) {
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
                    {generalTitle}
                </a>
            </div>
        </motion.div>
    );
}
