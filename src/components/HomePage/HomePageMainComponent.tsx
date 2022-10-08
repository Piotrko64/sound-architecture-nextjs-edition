import { AboveMainFooter } from "./aboveMainFooter/AboveMainFooterComponent";
import { TheHeader } from "./header/TheHeader";
import { LatestNews } from "./latestNews/LatestNews";
import { NextImage } from "../../ui/nextImage/NextImage";
import classes from "./homePage.module.css";
import { PropsHomepage } from "../../@types/iframes/PropsHomepage";
import { useState, useEffect } from "react";

export function HomePageMainComponent({ newYtIframeData, newBandcampIframe }: PropsHomepage) {
    const [opacity, setOpacity] = useState(0);

    function calculateOpacity() {
        const screenHeight = screen.height;
        const topScroll = window.scrollY;

        setOpacity(topScroll / (screenHeight * 1.5));
    }

    useEffect(() => {
        document.addEventListener("scroll", calculateOpacity);
        document.addEventListener("resize", calculateOpacity);
    }, []);
    return (
        <>
            <TheHeader />

            <NextImage
                additionalClass={classes.imageBack}
                imgURL="/assets/home/background.JPG"
                coverMode
                opacity={opacity}
            />

            <article className={classes.underHeader}>
                <LatestNews newYtIframeData={newYtIframeData} newBandcampIframe={newBandcampIframe} />
                <AboveMainFooter />
            </article>
        </>
    );
}
