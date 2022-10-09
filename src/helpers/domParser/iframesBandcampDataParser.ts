import parse from "node-html-parser";
import { ArrayIframesBandcamp } from "../../@types/SSG/ArrayIframesBandcamp";
import { sliceOnlyTitle } from "../../utils/SSG/youtube/sliceOnlyTitle";

export function iframesBandcampDataParser(iframesString: ArrayIframesBandcamp) {
    return iframesString.filter(Boolean).map((iframe) => {
        const elementHTML = parse(iframe.iframeLink);
        const iframeElement = elementHTML.querySelector("iframe");
        const anchorSelector = elementHTML?.querySelector("a");
        return {
            srcIframe: iframeElement?.getAttribute("src")!,
            hrefAnchor: anchorSelector?.getAttribute("href")!,
            generalTitle: sliceOnlyTitle(anchorSelector?.innerText!),
            mainTitles: iframe.mainTitles,
        };
    });
}
