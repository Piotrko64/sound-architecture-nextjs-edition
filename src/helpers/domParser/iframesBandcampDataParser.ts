import parse from "node-html-parser";

export function iframesBandcampDataParser(iframesString: Array<string>) {
    return iframesString.filter(Boolean).map((iframe) => {
        const elementHTML = parse(iframe);
        const iframeElement = elementHTML.querySelector("iframe");
        const anchorSelector = elementHTML?.querySelector("a");
        return {
            srcIframe: iframeElement?.getAttribute("src"),
            hrefAnchor: anchorSelector?.getAttribute("href"),
            title: anchorSelector?.innerText,
        };
    });
}
