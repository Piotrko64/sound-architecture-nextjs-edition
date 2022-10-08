import classes from "./textHeader.module.css";
import cx from "classnames";
import { ScrollParallax } from "react-just-parallax";

export function TextHeader() {
    return (
        <div className={cx(classes.container, "globalPadding")}>
            <ScrollParallax strength={0.35} lerpEase={0.6}>
                <h1 className={classes.h1}>Sound Architecture</h1>
            </ScrollParallax>
        </div>
    );
}
