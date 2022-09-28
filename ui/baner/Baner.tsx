import { NextImage } from "../nextImage/NextImage";
import classes from "./baner.module.css";

export function Baner({ imgURL, title }: { imgURL: string; title: string }) {
    return (
        <div className={classes.container}>
            <NextImage imgURL={imgURL} additionalClass={classes.backgroundImage} coverMode />
            <h1 className={classes.h1}>{title}</h1>
        </div>
    );
}
