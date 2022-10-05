import classes from "./textHeader.module.css";
import cx from "classnames";

export function TextHeader() {
    return (
        <div className={cx(classes.container, "globalPadding")}>
            <h1 className={classes.h1}>
                Sound <br /> Architecture
            </h1>
        </div>
    );
}
