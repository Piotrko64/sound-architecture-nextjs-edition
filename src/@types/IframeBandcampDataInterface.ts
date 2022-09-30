export type iframeBandcampData = Record<"srcIframe" | "hrefAnchor" | "title", string>;

export interface iframeBandcampDataInterface {
    iframeObjects: Array<iframeBandcampData>;
}
