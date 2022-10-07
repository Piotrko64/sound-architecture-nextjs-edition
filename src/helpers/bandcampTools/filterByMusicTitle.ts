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
            sound.mainTitles.forEach((titleSound) => {
                return titleSound.toUpperCase().includes(titleFilter.trim().toUpperCase());
            })
    );
}
