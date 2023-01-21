import { deburr } from "lodash";

export function getSimplifiedText(text: string) {
    return deburr(text)
        .trim()
        .toUpperCase()

        .replace(/\s/g, "")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .slice(text.length > 3 ? 1 : 0, text.length - (text.length >= 6 ? 2 : 1));
}
