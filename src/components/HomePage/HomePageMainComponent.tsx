import { NextImage } from "../../ui/nextImage/NextImage";
import { AboveMainFooter } from "./aboveMainFooter/AboveMainFooterComponent";

export function HomePageMainComponent({ instagramImagesUrl }: any) {
    return (
        <>
            <AboveMainFooter />
            {JSON.stringify(instagramImagesUrl)}
            {instagramImagesUrl.map((e: any) => (
                // <NextImage key={e} imgURL={e} additionalClass="" />
                <img src={e} key={e} height="50" width="100" />
            ))}
            {/* <NextImage imgURL={instagramImagesUrl} additionalClass=""/> */}
        </>
    );
}
