import create from "zustand";

export const useSearchingStore = create((set) => ({
    soundsTitleSearch: "",
    changeSoundTitleSearch: (newTitle: string) => set(() => ({ soundsTitleSearch: newTitle })),
    ambienceTitleSearch: "",
    changeAmbienceTitleSearch: (newTitle: string) => set(() => ({ ambienceTitleSearch: newTitle })),
}));
