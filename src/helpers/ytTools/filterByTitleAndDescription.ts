import { ArrayYTDataIframe } from "../../@types/iframes/IframeYTDataType";

export function filterByTitleAndDescription(arrayIframes: ArrayYTDataIframe, titleFilter: string) {
    if (titleFilter.trim() === "") {
        return arrayIframes;
    }

    return arrayIframes.filter(
        (iframe) =>
            iframe.title.toUpperCase().includes(titleFilter.trim().toUpperCase()) ||
            iframe.description.toUpperCase().includes(titleFilter.trim().toUpperCase())
    );
}
