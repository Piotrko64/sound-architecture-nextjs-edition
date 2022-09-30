import { ArrayYTDataIframe } from "../../../@types/IframeYTDataType";
import { OneYTIframe } from "../oneYTIframe/OneYTIframe";

export function ListYTIframes({ listIframes }: { listIframes: ArrayYTDataIframe }) {
    return (
        <>
            {listIframes.map((iframe) => (
                <OneYTIframe key={iframe.title} iframeData={iframe} />
            ))}
        </>
    );
}
