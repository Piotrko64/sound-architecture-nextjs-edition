import { iframeBandcampData } from "../../../../@types/IframeBandcampDataInterface";
import { EmptyResult } from "../../../ui/emptyResult/emptyResult";
import { OneBandcampIframe } from "../oneBandcampIframe/OneBandcampIframe";

export function ListIframes({ listIframesData }: { listIframesData: Array<iframeBandcampData> }) {
    return (
        <>
            {listIframesData.map(({ srcIframe, hrefAnchor, title }) => (
                <OneBandcampIframe key={title} srcIframe={srcIframe} hrefAnchor={hrefAnchor} title={title} />
            ))}
            {!listIframesData.length && <EmptyResult />}
        </>
    );
}
