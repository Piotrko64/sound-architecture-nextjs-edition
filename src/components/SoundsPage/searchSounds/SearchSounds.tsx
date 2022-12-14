import { useSearchingStore } from "../../../store/useSearchingStore";
import { SearchBar } from "../../../ui/searchBar/SearchBar";

export function SearchSounds() {
    const { soundsTitleSearch, changeSoundTitleSearch } = useSearchingStore();

    return <SearchBar valueInput={soundsTitleSearch} changeValue={changeSoundTitleSearch} />;
}
