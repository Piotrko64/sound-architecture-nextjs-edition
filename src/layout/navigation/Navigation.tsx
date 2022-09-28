import classes from "./navigation.module.css";
import cx from "classnames";
import Link from "next/link";
import { NextImage } from "../../../ui/nextImage/NextImage";

export function Navigation() {
    return (
        <nav className={cx(classes.nav, "globalPadding")}>
            <ul className={cx(classes.ul, "centerFlex", classes.flexOne)}>
                <li className={cx(classes.li)}>
                    <Link href="/Sounds">Sound Effects</Link>
                </li>
                <li className={cx(classes.li)}>
                    <Link href="/Ambience">Ambience</Link>
                </li>
            </ul>
            <NextImage imgURL="/assets/whiteLogo.webp" additionalClass={cx(classes.img, classes.flexOne)} />
            <div className={cx(classes.socials, classes.flexOne)}>
                <NextImage imgURL="/assets/socials/smallYT.webp" additionalClass={classes.imgSocial} />
                <NextImage imgURL="/assets/socials/smallBC.webp" additionalClass={classes.imgSocial} />
            </div>
        </nav>
    );
}
