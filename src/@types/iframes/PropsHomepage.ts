import { YTDataToIframe } from "./IframeYTDataType";

export type OneBandcampIframData = Record<"srcIframe" | "hrefAnchor" | "generalTitle" | "mainTitles", string>;

export interface PropsHomepage {
    newYtIframeData: YTDataToIframe;
    newBandcampIframe: OneBandcampIframData;
}
