import { ArrayYTDataIframe } from "../../@types/iframes/IframeYTDataType";
import { getSimplifiedText } from "../filtering/getSimplifiedTest";
import { moreTextToIncreaseChancesToSearch } from "../filtering/moreTextToIncreaseChanceToSearch";

export function filterByTitleAndDescription(arrayIframes: ArrayYTDataIframe, titleFilter: string) {
    const correctArrayIframes = arrayIframes.filter((iframe) => iframe.description).reverse();

    if (titleFilter.trim() === "") {
        return correctArrayIframes;
    }

    return correctArrayIframes.filter(
        ({ title, description }) =>
            moreTextToIncreaseChancesToSearch(title).includes(getSimplifiedText(titleFilter)) ||
            moreTextToIncreaseChancesToSearch(description).includes(getSimplifiedText(titleFilter))
    );
}
