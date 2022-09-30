import { YTDataToIframe } from "../../../@types/iframes/IframeYTDataType";

export function OneYTIframe({ iframeData }: { iframeData: YTDataToIframe }) {
    const { title, videoId, description } = iframeData;

    return (
        <>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    );
}
