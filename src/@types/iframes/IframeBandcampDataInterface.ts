export type IframeBandcampData = Record<"srcIframe" | "hrefAnchor" | "title", string>;

export interface IframeBandcampDataInterface {
    iframeObjects: Array<IframeBandcampData>;
}
