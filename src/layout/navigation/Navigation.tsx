import classes from "./navigation.module.css";
import cx from "classnames";
import Link from "next/link";

import { useState } from "react";
import { NextImage } from "../../ui/nextImage/NextImage";
import { UlList } from "./ulList/UlList";

export function Navigation() {
    return (
        <nav className={cx(classes.nav, "globalPadding")}>
            <UlList />
            <Link href="/">
                <a>
                    <NextImage
                        imgURL="/assets/whiteLogo.webp"
                        additionalClass={cx(classes.img, classes.flexOne)}
                    />
                </a>
            </Link>
            <div className={cx(classes.socials, classes.flexOne)}>
                <a
                    href="https://www.youtube.com/channel/UCseRS2xV0cIl4Mm44b4rqvw"
                    target="_blank"
                    rel="noreferrer"
                >
                    <NextImage imgURL="/assets/socials/smallYT.webp" additionalClass={classes.imgSocial} />
                </a>
                <a href="https://soundarchitecture.bandcamp.com" target="_blank" rel="noreferrer">
                    <NextImage imgURL="/assets/socials/smallBC.webp" additionalClass={classes.imgSocial} />
                </a>
            </div>
        </nav>
    );
}
