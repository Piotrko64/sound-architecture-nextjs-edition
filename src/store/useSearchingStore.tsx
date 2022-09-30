import create, { StoreApi, UseBoundStore } from "zustand";
import { SearchingStoreInterface } from "../@types/store/SearchingStoreInterface";

export const useSearchingStore: UseBoundStore<StoreApi<SearchingStoreInterface>> = create((set) => ({
    soundsTitleSearch: "",
    changeSoundTitleSearch: (newTitle: string) => set(() => ({ soundsTitleSearch: newTitle })),
    ambienceTitleSearch: "",
    changeAmbienceTitleSearch: (newTitle: string) => set(() => ({ ambienceTitleSearch: newTitle })),
}));
