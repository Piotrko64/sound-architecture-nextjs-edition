import { IframeBandcampDataArray } from "../../@types/iframes/IframeBandcampDataInterface";
import { getSimplifiedText } from "../filtering/getSimplifiedTest";
import { moreTextToIncreaseChancesToSearch } from "../filtering/moreTextToIncreaseChanceToSearch";

export function filterByMusicTitle(arrayMusic: IframeBandcampDataArray, titleFilter: string) {
    if (titleFilter.trim() === "") {
        return arrayMusic;
    }

    return arrayMusic.filter(
        ({ generalTitle, mainTitles }) =>
            moreTextToIncreaseChancesToSearch(generalTitle).includes(getSimplifiedText(titleFilter)) ||
            mainTitles.find((titleSounds) =>
                moreTextToIncreaseChancesToSearch(titleSounds).includes(getSimplifiedText(titleFilter))
            ) ||
            titleFilter
                .split(" ")
                .find(
                    (word) => generalTitle.includes(word) || generalTitle.includes(getSimplifiedText(word))
                ) ||
            titleFilter
                .split(" ")
                .find(
                    (word) =>
                        mainTitles.join(" ").includes(word) ||
                        mainTitles.join(" ").includes(getSimplifiedText(word))
                )
    );
}
