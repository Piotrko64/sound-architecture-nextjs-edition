import { deburr } from "lodash";

const SENSITIVE_MIN = 4;
const SENSITIVE_MAX = 7;

export function getSimplifiedText(text: string) {
    return deburr(text)
        .trim()
        .toUpperCase()

        .replace(/[^a-zA-Z0-9 ]/g, "")
        .slice(text.length > SENSITIVE_MIN ? 1 : 0, text.length - (text.length > SENSITIVE_MAX ? 2 : 1));
}
