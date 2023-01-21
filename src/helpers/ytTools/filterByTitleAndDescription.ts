import { ArrayYTDataIframe } from "../../@types/iframes/IframeYTDataType";
import { getSimplifiedText } from "../filtering/getSimplifiedTest";
import { moreTextToIncreaseChancesToSearch } from "../filtering/moreTextToIncreaseChanceToSearch";

export function filterByTitleAndDescription(arrayIframes: ArrayYTDataIframe, titleFilter: string) {
    const correctArrayIframes = arrayIframes.filter((iframe) => iframe.description).reverse();

    if (titleFilter.trim() === "") {
        return correctArrayIframes;
    }

    return correctArrayIframes.filter(({ title, description }) => {
        const modifiedTitle = moreTextToIncreaseChancesToSearch(title);
        const modifiedDecription = moreTextToIncreaseChancesToSearch(description);

        return (
            modifiedTitle.includes(getSimplifiedText(titleFilter)) ||
            modifiedDecription.includes(getSimplifiedText(titleFilter)) ||
            titleFilter
                .trim()
                .split(" ")
                .find(
                    (word) =>
                        modifiedDecription.includes(word) ||
                        modifiedDecription.includes(getSimplifiedText(word))
                ) ||
            titleFilter
                .trim()
                .split(" ")
                .find(
                    (word) => modifiedTitle.includes(word) || modifiedTitle.includes(getSimplifiedText(word))
                )
        );
    });
}
