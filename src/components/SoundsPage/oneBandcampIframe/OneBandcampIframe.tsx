import { iframeBandcampData } from "../../../../@types/IframeBandcampDataInterface";

export function OneBandcampIframe({ srcIframe, hrefAnchor, title }: iframeBandcampData) {
    return (
        <>
            <iframe style={{ border: 0, width: "100%", height: "42px" }} src={srcIframe} seamless>
                <a href={hrefAnchor}>{title}</a>
            </iframe>
        </>
    );
}
