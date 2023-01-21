import { getSimplifiedText } from "./getSimplifiedTest";

export function moreTextToIncreaseChancesToSearch(text: string) {
    return getSimplifiedText(text + text.split("").join(" ") + text.split("").reverse());
}
