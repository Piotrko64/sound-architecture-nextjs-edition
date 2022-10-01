import classes from "./ulList.module.css";
import cx from "classnames";
import Link from "next/link";
import { useState } from "react";
import { NextImage } from "../../../ui/nextImage/NextImage";

export function UlList() {
    const [activeNav, setActiveNavbar] = useState<boolean>(false);

    const [widthStripe, setWidthStripe] = useState(50);
    const [leftMargin, setLeftMargin] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    function handleHoverLink(event: React.MouseEvent) {
        setWidthStripe(event.currentTarget.clientWidth);
        setLeftMargin((event.target as HTMLDivElement).getBoundingClientRect().left);
    }

    return (
        <>
            <button className={classes.navBtn} onClick={() => setActiveNavbar((prevState) => !prevState)}>
                <div className={cx(classes.line, classes.lineFirst, activeNav && classes.active)}></div>
                <div className={cx(classes.line, classes.lineSecond, activeNav && classes.active)}></div>
                <div className={cx(classes.line, classes.lineThird, activeNav && classes.active)}></div>
            </button>
            <div
                className={classes.stripe}
                style={{ width: `${widthStripe}px`, left: `${leftMargin}px`, opacity: isVisible ? "1" : "0" }}
            ></div>

            <ul
                className={cx(classes.ul, "centerFlex", classes.flexOne, activeNav && classes.active)}
                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
            >
                <Link href="/Sounds">
                    <li
                        className={cx(classes.li)}
                        onMouseEnter={handleHoverLink}
                        onClick={() => setActiveNavbar(false)}
                    >
                        Sound Effects
                    </li>
                </Link>

                <Link href="/Ambience">
                    <li
                        className={cx(classes.li)}
                        onClick={() => setActiveNavbar(false)}
                        onMouseEnter={handleHoverLink}
                    >
                        Ambience
                    </li>
                </Link>
                <div className={cx(classes.socialMobile)}>
                    <NextImage imgURL="/assets/socials/smallYT.webp" additionalClass={classes.imgSocial} />
                    <NextImage imgURL="/assets/socials/smallBC.webp" additionalClass={classes.imgSocial} />
                </div>
            </ul>
        </>
    );
}
