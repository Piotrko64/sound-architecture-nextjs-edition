const noNeededText = "by Sound Architecture";

export function sliceOnlyTitle(title: string) {
    const indexNoNeededText = title.indexOf(noNeededText);
    if (indexNoNeededText === -1) return title;

    return title.slice(0, indexNoNeededText);
}
