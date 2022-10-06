import create, { StoreApi, UseBoundStore } from "zustand";
import { LicenseStore } from "../@types/store/LicenseStore";

export const useLicense: UseBoundStore<StoreApi<LicenseStore>> = create((set) => ({
    openLicense: false,
    toggleOpenLicense: (bool) => set(() => ({ openLicense: bool })),
}));
