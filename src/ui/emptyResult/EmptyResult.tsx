import classes from "./emptyResult.module.css";
import { motion } from "framer-motion";

export function EmptyResult({ isActive }: { isActive: boolean }) {
    return isActive ? (
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} exit={{ opacity: 0 }}>
            <h1 className={classes.h1}>lack of results</h1>
        </motion.div>
    ) : null;
}
