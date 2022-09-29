import { iframeBandcampData } from "../../../@types/IframeBandcampDataInterface";
import { useSearchingStore } from "../../store/useSearchingStore";
import { filterByMusicTitle } from "../../utils/filterByMusicTitle";
import { ListIframes } from "./listIframes/ListIframes";
import { SearchSounds } from "./searchSounds/SearchSounds";

export function SoundsPageMainComponent({ iframesListData }: { iframesListData: Array<iframeBandcampData> }) {
    const { soundsTitleSearch } = useSearchingStore((state: any) => state);
    const filterList = filterByMusicTitle(iframesListData, soundsTitleSearch);
    console.log(filterList);
    return (
        <>
            <SearchSounds />
            <ListIframes listIframesData={filterList} />
        </>
    );
}
