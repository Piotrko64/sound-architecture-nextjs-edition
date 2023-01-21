import { useEffect } from "react";
import { useSearchingStore } from "../../../store/useSearchingStore";
import { SearchBar } from "../../../ui/searchBar/SearchBar";

export function SearchAmbience() {
    const { ambienceTitleSearch, changeAmbienceTitleSearch } = useSearchingStore((state) => state);

    return <SearchBar valueInput={ambienceTitleSearch} changeValue={changeAmbienceTitleSearch} />;
}
