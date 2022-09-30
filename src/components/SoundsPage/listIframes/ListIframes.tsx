import { iframeBandcampData } from "../../../../@types/IframeBandcampDataInterface";
import { EmptyResult } from "../../../ui/emptyResult/emptyResult";
import { OneBandcampIframe } from "../oneBandcampIframe/OneBandcampIframe";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./listIframes.module.css";

export function ListIframes({ listIframesData }: { listIframesData: Array<iframeBandcampData> }) {
    return (
        <div className={classes.listIframes}>
            <AnimatePresence>
                <motion.div layout>
                    {listIframesData.map(({ srcIframe, hrefAnchor, title }) => (
                        <OneBandcampIframe
                            key={title}
                            srcIframe={srcIframe}
                            hrefAnchor={hrefAnchor}
                            title={title}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
            {!listIframesData.length && <EmptyResult />}
        </div>
    );
}
