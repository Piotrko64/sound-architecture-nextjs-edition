import {
    IframeBandcampData,
    IframeBandcampDataArray,
} from "../../@types/iframes/IframeBandcampDataInterface";

export function filterByMusicTitle(arrayMusic: IframeBandcampDataArray, titleFilter: string) {
    if (titleFilter.trim() === "") {
        return arrayMusic;
    }

    return arrayMusic.filter(
        (sound) =>
            sound.generalTitle.toUpperCase().includes(titleFilter.trim().toUpperCase()) ||
            sound.mainTitles.find((titleSounds) =>
                titleSounds.toUpperCase().includes(titleFilter.toUpperCase())
            )
    );
}
