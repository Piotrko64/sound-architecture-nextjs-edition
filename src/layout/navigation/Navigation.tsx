import classes from "./navigation.module.css";
import cx from "classnames";
import Link from "next/link";
import { NextImage } from "../../ui/nextImage/NextImage";
import { UlList } from "./ulList/UlList";
import { SocialList } from "./socialList/SocialList";

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
                <SocialList />
            </div>
        </nav>
    );
}
