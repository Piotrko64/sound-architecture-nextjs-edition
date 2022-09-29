import { NextImage } from "../../../../ui/nextImage/NextImage";
import classes from "./aboveMainFooter.module.css";

export function AboveMainFooter() {
    return (
        <div className={classes.container}>
            <NextImage imgURL="/assets/arrows/arrowLeft.webp" additionalClass={classes.arrowImg} />
            <h2 className={classes.h2}> Check on Bandcamp and Youtube </h2>
            <NextImage imgURL="/assets/arrows/arrowRight.webp" additionalClass={classes.arrowImg} />
        </div>
    );
}
