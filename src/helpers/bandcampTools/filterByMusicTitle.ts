import { IframeBandcampData } from "../../@types/iframes/IframeBandcampDataInterface";

export function filterByMusicTitle(arrayMusic: Array<IframeBandcampData>, titleFilter: string) {
    if (titleFilter.trim() === "") {
        return arrayMusic;
    }

    return arrayMusic.filter(
        (sound) =>
            sound.generalTitle.toUpperCase().includes(titleFilter.trim().toUpperCase()) ||
            sound.mainTitle.toUpperCase().includes(titleFilter.trim().toUpperCase())
    );
}
