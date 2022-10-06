export interface LicenseStore {
    openLicense: boolean;
    toggleOpenLicense: (bool: boolean) => void;
}
