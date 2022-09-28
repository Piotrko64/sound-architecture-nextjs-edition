import classes from "./navigation.module.css";
import cx from "classnames";
import Link from "next/link";
import { NextImage } from "../../../ui/nextImage/NextImage";

export function Navigation() {
    return (
        <nav className={cx(classes.nav, "globalPadding")}>
            <ul className={cx(classes.ul, "centerFlex")}>
                <li>
                    <Link href="/Sounds">Sound Effects</Link>
                </li>
                <li>
                    <Link href="/Ambience">Ambience</Link>
                </li>
            </ul>
            <NextImage imgURL="/whiteLogo.webp" additionalClass="" />
            <div className={classes.socials}>
                <NextImage imgURL="/socials/smallBC.webp" additionalClass="" />
                <NextImage imgURL="/socials/smallYT.webp" additionalClass="" />
            </div>
        </nav>
    );
}
