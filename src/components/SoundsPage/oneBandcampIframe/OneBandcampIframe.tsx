import classes from "./oneBandcampIframe.module.css";
import { motion } from "framer-motion";
import { IframeBandcampData } from "../../../@types/iframes/IframeBandcampDataInterface";

type Props = Omit<IframeBandcampData, "mainTitle"> & { loading: "lazy" | "eager" };

export function OneBandcampIframe({ srcIframe, hrefAnchor, generalTitle, loading }: Props) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={classes.containerEntireIframe}
        >
            <div className={classes.subContainer}>
                <iframe src={srcIframe} seamless className={classes.iframe} loading={loading}></iframe>
                <a className={classes.titleBack} href={hrefAnchor}>
                    {generalTitle}
                </a>
            </div>
        </motion.div>
    );
}
