import { motion, AnimatePresence } from "framer-motion";
import { ArrayYTDataIframe } from "../../../@types/iframes/IframeYTDataType";
import { EmptyResult } from "../../../ui/emptyResult/EmptyResult";
import { OneYTIframe } from "../oneYTIframe/OneYTIframe";
import classes from "./listYTIframes.module.css";

export function ListYTIframes({ listIframes }: { listIframes: ArrayYTDataIframe }) {
    return (
        <>
            <div>
                <AnimatePresence>
                    <motion.div layout className={classes.listContainer}>
                        {listIframes.map((iframe) => (
                            <OneYTIframe key={iframe.title} iframeData={iframe} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <EmptyResult isActive={!listIframes.length} />
        </>
    );
}
