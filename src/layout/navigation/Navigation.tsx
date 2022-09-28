import classes from "./navigation.module.css";
import cx from "classnames";
import Link from "next/link";
import { NextImage } from "../../../ui/nextImage/NextImage";
import { useState } from "react";

export function Navigation() {
    const [activeNav, setActiveNavbar] = useState<boolean>(false);

    return (
        <nav className={cx(classes.nav, "globalPadding")}>
            <button className={classes.navBtn} onClick={() => setActiveNavbar((prevState) => !prevState)}>
                <div className={cx(classes.line, classes.lineFirst, activeNav && classes.active)}></div>
                <div className={cx(classes.line, classes.lineSecond, activeNav && classes.active)}></div>
                <div className={cx(classes.line, classes.lineThird, activeNav && classes.active)}></div>
            </button>
            <ul className={cx(classes.ul, "centerFlex", classes.flexOne, activeNav && classes.active)}>
                <li className={cx(classes.li)}>
                    <Link href="/Sounds">Sound Effects</Link>
                </li>

                <Link href="/Ambience">
                    <li className={cx(classes.li)}>Ambience</li>
                </Link>
                <div className={cx(classes.socialMobile)}>
                    <NextImage imgURL="/assets/socials/smallYT.webp" additionalClass={classes.imgSocial} />
                    <NextImage imgURL="/assets/socials/smallBC.webp" additionalClass={classes.imgSocial} />
                </div>
            </ul>
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
