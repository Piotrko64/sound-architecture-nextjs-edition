import { NextImage } from "../../ui/nextImage/NextImage";
import { AboveMainFooter } from "./aboveMainFooter/AboveMainFooterComponent";

export function HomePageMainComponent({ instagramImagesUrl }: any) {
    return (
        <>
            <AboveMainFooter />
            {JSON.stringify(instagramImagesUrl)}
        </>
    );
}
