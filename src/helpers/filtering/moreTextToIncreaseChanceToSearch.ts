import { deburr } from "lodash";
import { getSimplifiedText } from "./getSimplifiedTest";

export function moreTextToIncreaseChancesToSearch(text: string) {
    return getSimplifiedText(text + deburr(text));
}
