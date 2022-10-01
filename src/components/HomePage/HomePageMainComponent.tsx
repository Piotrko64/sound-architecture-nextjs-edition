import { NextImage } from "../../ui/nextImage/NextImage";
import { AboveMainFooter } from "./aboveMainFooter/AboveMainFooterComponent";
import { RichText } from "@graphcms/rich-text-react-renderer";

export function HomePageMainComponent({ dataProject }: any) {
    return (
        <>
            <img src={dataProject.photoPost.url} />
            <RichText content={dataProject.textPost.raw} />
            <AboveMainFooter />
        </>
    );
}
