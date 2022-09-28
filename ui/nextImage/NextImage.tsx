import Image from "next/image";
import cx from "classnames";
import classes from "./nextImage.module.css";

export function NextImage({
    imgURL,
    additionalClass,
    click,
    title,

    coverMode,
}: {
    imgURL: string;
    additionalClass: string;
    click?: () => void;
    title?: string;
    coverMode?: boolean;
}) {
    return (
        <div onClick={click} className={classes.flexOne}>
            <div className={cx(additionalClass, classes.relative)}>
                <Image
                    src={imgURL}
                    alt={title}
                    layout="fill"
                    objectFit={coverMode ? "cover" : "contain"}
                    sizes="100vw"
                />
            </div>
        </div>
    );
}
