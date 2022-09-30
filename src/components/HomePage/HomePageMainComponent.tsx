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
            <img src="https://instagram.fayt2-2.fna.fbcdn.net/v/t51.2885-15/307123753_768801907530258_8830761708666285905_n.webp?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fayt2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Hx9ReI6_HmcAX-edbjp&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9EZ7Y8GlQ-WKJSyN4tSwEkF2IKt8l8SVYz2Ceqt38dIA&oe=633D8DF3&_nc_sid=8fd12b" />
            {/* <NextImage imgURL={instagramImagesUrl} additionalClass=""/> */}
        </>
    );
}
