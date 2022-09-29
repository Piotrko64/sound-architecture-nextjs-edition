import { iframeBandcampData } from "./../../@types/IframeBandcampDataInterface";
export function filterByMusicTitle(arrayMusic: Array<iframeBandcampData>, titleFilter: string) {
    if (titleFilter.trim() === "") {
        return arrayMusic;
    }

    return arrayMusic.filter((sound) => sound.title.toUpperCase().includes(titleFilter.trim().toUpperCase()));
}
