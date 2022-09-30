import { iframeBandcampData } from "../../../@types/IframeBandcampDataInterface";
import { useSearchingStore } from "../../store/useSearchingStore";
import { filterByMusicTitle } from "../../utils/filterByMusicTitle";
import { ListIframes } from "./listIframes/ListIframes";
import { SearchSounds } from "./searchSounds/SearchSounds";
import classes from "./soundsPageMainComponent.module.css";

export function SoundsPageMainComponent({ iframesListData }: { iframesListData: Array<iframeBandcampData> }) {
    const { soundsTitleSearch } = useSearchingStore((state: any) => state);
    const filterList = filterByMusicTitle(iframesListData, soundsTitleSearch);

    return (
        <div className={classes.container}>
            <SearchSounds />
            <ListIframes listIframesData={filterList} />
        </div>
    );
}
