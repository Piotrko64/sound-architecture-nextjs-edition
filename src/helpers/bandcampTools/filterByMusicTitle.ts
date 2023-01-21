import { IframeBandcampDataArray } from "../../@types/iframes/IframeBandcampDataInterface";
import { getSimplifiedText } from "../filtering/getSimplifiedTest";
import { moreTextToIncreaseChancesToSearch } from "../filtering/moreTextToIncreaseChanceToSearch";

export function filterByMusicTitle(arrayMusic: IframeBandcampDataArray, titleFilter: string) {
    if (titleFilter.trim() === "") {
        return arrayMusic;
    }

    return arrayMusic.filter(({ generalTitle, mainTitles }) => {
        const arrayFromTitleFilter = titleFilter.split(" ");

        const modifiedMainTitles = moreTextToIncreaseChancesToSearch(mainTitles.join(""));
        const modifiedGeneralTitle = moreTextToIncreaseChancesToSearch(generalTitle);

        return (
            moreTextToIncreaseChancesToSearch(generalTitle).includes(getSimplifiedText(titleFilter)) ||
            mainTitles.find((titleSounds) =>
                moreTextToIncreaseChancesToSearch(titleSounds).includes(getSimplifiedText(titleFilter))
            ) ||
            arrayFromTitleFilter.find(
                (word) => generalTitle.includes(word) || generalTitle.includes(getSimplifiedText(word))
            ) ||
            arrayFromTitleFilter.find(
                (word) =>
                    mainTitles.join(" ").includes(word) ||
                    mainTitles.join(" ").includes(getSimplifiedText(word))
            ) ||
            titleFilter

                .split(" ")
                .find(
                    (word) =>
                        modifiedMainTitles.includes(word) ||
                        modifiedMainTitles.includes(getSimplifiedText(word))
                ) ||
            titleFilter

                .split(" ")
                .find(
                    (word) =>
                        modifiedGeneralTitle.includes(word) ||
                        modifiedGeneralTitle.includes(getSimplifiedText(word))
                )
        );
    });
}
