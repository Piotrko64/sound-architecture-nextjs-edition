import { deburr } from "lodash";
import { getSimplifiedText } from "./getSimplifiedTest";

export function moreTextToIncreaseChancesToSearch(text: string) {
    return getSimplifiedText(text + text.split("").join(" ") + text.split(" ").join() + deburr(text));
}
