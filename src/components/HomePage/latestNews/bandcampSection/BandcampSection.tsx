import { OneBandcampIframData } from "../../../../@types/iframes/PropsHomepage";
import classes from "./bandcampSection.module.css";

export function BandcampSection({ newBandcampIframe }: { newBandcampIframe: OneBandcampIframData }) {
    const { srcIframe, generalTitle } = newBandcampIframe;

    return (
        <div className={classes.containerIframe}>
            <iframe style={{ border: 0 }} className={classes.iframe} src={srcIframe} seamless>
                {generalTitle}
            </iframe>
        </div>
    );
}
