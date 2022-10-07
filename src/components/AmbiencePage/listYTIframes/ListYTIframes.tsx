import { motion, AnimatePresence } from "framer-motion";
import { ArrayYTDataIframe } from "../../../@types/iframes/IframeYTDataType";
import { EmptyResult } from "../../../ui/emptyResult/EmptyResult";
import { OneYTIframe } from "../oneYTIframe/OneYTIframe";
import classes from "./listYTIframes.module.css";

type Props = { listIframes: ArrayYTDataIframe };

export function ListYTIframes({ listIframes }: Props) {
    return (
        <>
            <div>
                <AnimatePresence>
                    <motion.div layout className={classes.listContainer}>
                        {listIframes.map((iframe, index) => (
                            <OneYTIframe
                                key={iframe.title}
                                iframeData={iframe}
                                loading={index < 3 ? "eager" : "lazy"}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <EmptyResult isActive={!listIframes.length} />
        </>
    );
}
