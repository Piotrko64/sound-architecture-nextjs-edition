import { NextImage } from "../nextImage/NextImage";
import classes from "./baner.module.css";

export function Baner({ imgURL, title, blurURL }: { imgURL: string; title: string; blurURL: string }) {
    return (
        <div className={classes.container}>
            <NextImage
                imgURL={imgURL}
                additionalClass={classes.backgroundImage}
                coverMode
                blurMode
                blurURL={blurURL}
            />
            <h1 className={classes.h1}>{title}</h1>
        </div>
    );
}
