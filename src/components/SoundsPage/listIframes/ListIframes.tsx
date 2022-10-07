import { OneBandcampIframe } from "../oneBandcampIframe/OneBandcampIframe";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./listIframes.module.css";
import { EmptyResult } from "../../../ui/emptyResult/EmptyResult";
import { IframeBandcampData } from "../../../@types/iframes/IframeBandcampDataInterface";

type Props = { listIframesData: Array<IframeBandcampData> };

export function ListIframes({ listIframesData }: Props) {
    return (
        <div>
            <AnimatePresence>
                <motion.div layout className={classes.listIframes}>
                    {listIframesData.map(({ srcIframe, hrefAnchor, generalTitle }, index) => (
                        <OneBandcampIframe
                            key={generalTitle}
                            srcIframe={srcIframe}
                            hrefAnchor={hrefAnchor}
                            generalTitle={generalTitle}
                            loading={index < 3 ? "eager" : "lazy"}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
            <EmptyResult isActive={!listIframesData.length} />
        </div>
    );
}
