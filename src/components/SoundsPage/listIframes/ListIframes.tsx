import { iframeBandcampData } from "../../../../@types/IframeBandcampDataInterface";
import { OneBandcampIframe } from "../oneBandcampIframe/OneBandcampIframe";

export function ListIframes({ listIframesData }: { listIframesData: Array<iframeBandcampData> }) {
    return (
        <>
            {listIframesData.map(({ srcIframe, hrefAnchor, title }) => (
                <OneBandcampIframe key={title} srcIframe={srcIframe} hrefAnchor={hrefAnchor} title={title} />
            ))}
        </>
    );
}
