export function getFirstLineDescription(description: string) {
    const indexNewLine = description.indexOf("\n");
    if (indexNewLine === -1) {
        return "";
    }
    return description.slice(0, indexNewLine);
}
