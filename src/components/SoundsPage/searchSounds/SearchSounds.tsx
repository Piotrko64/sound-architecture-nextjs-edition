import { useSearchingStore } from "../../../store/useSearchingStore";
import { SearchBar } from "../../../../ui/searchBar/SearchBar";

export function SearchSounds() {
    const { soundsTitleSearch, changeSoundTitleSearch } = useSearchingStore((state: any) => state);

    return <SearchBar valueInput={soundsTitleSearch} change={changeSoundTitleSearch} />;
}