import { OneBandcampIframe } from "../oneBandcampIframe/OneBandcampIframe";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./listIframes.module.css";
import { EmptyResult } from "../../../ui/emptyResult/EmptyResult";
import { IframeBandcampData } from "../../../@types/iframes/IframeBandcampDataInterface";

export function ListIframes({ listIframesData }: { listIframesData: Array<IframeBandcampData> }) {
    return (
        <div className={classes.listIframes}>
            <AnimatePresence>
                <motion.div layout>
                    {listIframesData.map(({ srcIframe, hrefAnchor, generalTitle }) => (
                        <OneBandcampIframe
                            key={generalTitle}
                            srcIframe={srcIframe}
                            hrefAnchor={hrefAnchor}
                            generalTitle={generalTitle}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
            <EmptyResult isActive={!listIframesData.length} />
        </div>
    );
}
