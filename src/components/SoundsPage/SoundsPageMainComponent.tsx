import { useSearchingStore } from "../../store/useSearchingStore";
import { filterByMusicTitle } from "../../helpers/bandcampTools/filterByMusicTitle";
import { ListIframes } from "./listIframes/ListIframes";
import { SearchSounds } from "./searchSounds/SearchSounds";
import classes from "./soundsPageMainComponent.module.css";
import cx from "classnames";
import { IframeBandcampDataArray } from "../../@types/iframes/IframeBandcampDataInterface";

export function SoundsPageMainComponent({ iframesListData }: { iframesListData: IframeBandcampDataArray }) {
    const { soundsTitleSearch } = useSearchingStore((state) => state);
    const filterList = filterByMusicTitle(iframesListData, soundsTitleSearch);

    return (
        <div className={cx(classes.container, "globalPadding")}>
            <SearchSounds />
            <ListIframes listIframesData={filterList} />
        </div>
    );
}
