import { ArrayYTDataIframe } from "../../@types/iframes/IframeYTDataType";

export function filterByTitleAndDescription(arrayIframes: ArrayYTDataIframe, titleFilter: string) {
    const correctArrayIframes = arrayIframes.filter((iframe) => iframe.description).reverse();

    if (titleFilter.trim() === "") {
        return correctArrayIframes;
    }

    return correctArrayIframes.filter(
        (iframe) =>
            iframe.title.toUpperCase().includes(titleFilter.trim().toUpperCase()) ||
            iframe.description.toUpperCase().includes(titleFilter.trim().toUpperCase())
    );
}
