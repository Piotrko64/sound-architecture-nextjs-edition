import Image from "next/image";
import cx from "classnames";
import classes from "./nextImage.module.css";

type Props = {
    imgURL: string;
    additionalClass: string;
    click?: () => void;
    title?: string;
    coverMode?: boolean;
    blurMode?: boolean;
    blurURL?: string;
};

export function NextImage({ imgURL, additionalClass, click, title, blurMode, coverMode, blurURL }: Props) {
    return (
        <div onClick={click} className={classes.flexOne}>
            <div className={cx(additionalClass, classes.relative)}>
                <Image
                    draggable="false"
                    src={imgURL}
                    alt={title}
                    layout="fill"
                    objectFit={coverMode ? "cover" : "contain"}
                    sizes="100vw"
                    placeholder={blurMode ? "blur" : "empty"}
                    blurDataURL={blurMode ? blurURL : "empty"}
                    title={title}
                />
            </div>
        </div>
    );
}
