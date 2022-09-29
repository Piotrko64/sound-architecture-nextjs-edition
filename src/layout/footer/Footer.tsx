import classes from "./footer.module.css";
import cx from "classnames";
import { NextImage } from "../../ui/nextImage/NextImage";

export function Footer() {
    return (
        <footer className={cx(classes.footer, "globalPadding")}>
            <div className={classes.mainInfo}>
                <NextImage
                    imgURL="/assets/footer/yt.webp"
                    additionalClass={cx(classes.socialImg, classes.ytImg)}
                />
                <div className={classes.licenseEmail}>
                    <div className={classes.license}>License Agreement</div>
                    <div className={classes.email}>Email</div>
                </div>
                <NextImage
                    imgURL="/assets/footer/band.webp"
                    additionalClass={cx(classes.socialImg, classes.bcImg)}
                />
            </div>
            <div className={classes.rightReserved}>Sound Architecture © 2021 All rights reserved</div>
            <div className={classes.logoWhite}>
                <NextImage imgURL="/assets/whiteLogo.webp" additionalClass={classes.logoFooter} />
            </div>
        </footer>
    );
}
