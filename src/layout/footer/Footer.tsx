import classes from "./footer.module.css";
import cx from "classnames";
import { NextImage } from "../../ui/nextImage/NextImage";
import { useLicense } from "../../store/useLicense";

export function Footer() {
    const { toggleOpenLicense } = useLicense();

    return (
        <footer className={cx(classes.footer, "globalPadding")}>
            <div className={classes.mainInfo}>
                <NextImage
                    imgURL="/assets/footer/yt.webp"
                    additionalClass={cx(classes.socialImg, classes.ytImg)}
                    href="https://www.instagram.com/soundarchitecture_sa/?next=%2F"
                />
                <div className={classes.licenseEmail}>
                    <div className={classes.license} onClick={() => toggleOpenLicense(true)}>
                        License Agreement
                    </div>
                    <div className={classes.email}>
                        <a href="mailto: soundarchitecture@outlook.com">Email</a>
                    </div>
                </div>
                <NextImage
                    imgURL="/assets/footer/band.webp"
                    additionalClass={cx(classes.socialImg, classes.bcImg)}
                    href="https://soundarchitecture.bandcamp.com"
                />
            </div>
            <div className={classes.rightReserved}>Sound Architecture © 2021 All rights reserved</div>
            <div className={classes.logoWhite}>
                <NextImage imgURL="/assets/whiteLogo.webp" additionalClass={classes.logoFooter} />
            </div>
        </footer>
    );
}
