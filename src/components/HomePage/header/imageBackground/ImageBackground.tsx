import classes from "./imageBackground.module.css";
import { NextImage } from "../../../../ui/nextImage/NextImage";

export function ImageBackground() {
    return (
        <>
            <NextImage
                coverMode
                additionalClass={classes.imageBackground}
                imgURL={"/assets/home/main.JPG"}
                blurMode
                blurURL="data:image/jpeg;base64,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"
            />
        </>
    );
}