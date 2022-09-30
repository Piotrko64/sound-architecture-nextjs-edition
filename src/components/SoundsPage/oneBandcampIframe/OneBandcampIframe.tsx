import { iframeBandcampData } from "../../../../@types/IframeBandcampDataInterface";
import classes from "./oneBandcampIframe.module.css";

export function OneBandcampIframe({ srcIframe, hrefAnchor, title }: iframeBandcampData) {
    return (
        <div className={classes.containerEntireIframe}>
            <div className={classes.subContainer}>
                <iframe src={srcIframe} seamless className={classes.iframe}>
                    <a href={hrefAnchor}>{title}</a>
                </iframe>
                <div className={classes.titleBack}>{title}</div>
            </div>
        </div>
    );
}
