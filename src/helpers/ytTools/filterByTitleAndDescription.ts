import { ArrayYTDataIframe } from "../../@types/iframes/IframeYTDataType";
import { getSimplifiedText } from "../filtering/getSimplifiedTest";
import { moreTextToIncreaseChancesToSearch } from "../filtering/moreTextToIncreaseChanceToSearch";

export function filterByTitleAndDescription(arrayIframes: ArrayYTDataIframe, titleFilter: string) {
    const correctArrayIframes = arrayIframes.filter((iframe) => iframe.description).reverse();

    if (titleFilter.trim() === "") {
        return correctArrayIframes;
    }

    return correctArrayIframes.filter(({ title, description }) => {
        return (
            moreTextToIncreaseChancesToSearch(title).includes(getSimplifiedText(titleFilter)) ||
            moreTextToIncreaseChancesToSearch(description).includes(getSimplifiedText(titleFilter)) ||
            titleFilter
                .split(" ")
                .find(
                    (word) => description.includes(word) || description.includes(getSimplifiedText(word))
                ) ||
            titleFilter
                .split(" ")
                .find((word) => title.includes(word) || title.includes(getSimplifiedText(word)))
        );
    });
}
