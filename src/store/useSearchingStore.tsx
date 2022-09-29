import create from "zustand";

export const useSearchingStore = create((set) => ({
    soundsTitleSearch: "aa",
    changeSoundTitleSearch: (newTitle: string) => set(() => ({ soundsTitleSearch: newTitle })),
}));
