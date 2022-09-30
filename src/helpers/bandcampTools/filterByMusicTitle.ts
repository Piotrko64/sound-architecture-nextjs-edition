import { IframeBandcampData } from "../../@types/iframes/IframeBandcampDataInterface";

export function filterByMusicTitle(arrayMusic: Array<IframeBandcampData>, titleFilter: string) {
    if (titleFilter.trim() === "") {
        return arrayMusic;
    }

    return arrayMusic.filter((sound) => sound.title.toUpperCase().includes(titleFilter.trim().toUpperCase()));
}
