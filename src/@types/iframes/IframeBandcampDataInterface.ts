export type IframeBandcampData = Record<"srcIframe" | "hrefAnchor" | "generalTitle" | "mainTitle", string>;

export interface IframeBandcampDataInterface {
    iframeObjects: Array<IframeBandcampData>;
}
