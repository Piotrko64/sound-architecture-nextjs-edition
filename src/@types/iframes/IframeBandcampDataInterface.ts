export type IframeBandcampData = Record<"srcIframe" | "hrefAnchor" | "generalTitle", string>;
export interface MainTitles {
    mainTitles: Array<string>;
}
interface WholeIframeDataBandcamp extends IframeBandcampData, MainTitles {}

export type IframeBandcampDataArray = Array<WholeIframeDataBandcamp>;
export interface IframeBandcampDataInterface {
    iframeObjects: IframeBandcampDataArray;
}
