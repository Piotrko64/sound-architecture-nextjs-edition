import { ArrayYTDataIframe } from "../../../@types/iframes/IframeYTDataType";
import { EmptyResult } from "../../../ui/emptyResult/EmptyResult";
import { OneYTIframe } from "../oneYTIframe/OneYTIframe";

export function ListYTIframes({ listIframes }: { listIframes: ArrayYTDataIframe }) {
    return (
        <>
            {listIframes.map((iframe) => (
                <OneYTIframe key={iframe.title} iframeData={iframe} />
            ))}
            <EmptyResult isActive={!listIframes.length} />
        </>
    );
}
