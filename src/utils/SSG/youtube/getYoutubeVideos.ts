import { YoutubeVideoInterface } from "../../../@types/SSG/YoutubeVideoInterface";
import { getFirstLineDescription } from "./getFirstLineDescription";

import { ArrayYTDataIframe } from "../../../@types/iframes/IframeYTDataType";

export async function getYoutubeVideos() {
    const fetchData: Array<YoutubeVideoInterface> = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=PLfVf1eElYE11Rf0xV7bZBUd9xZOhqhOJ9&key=${process.env.YOUTUBEAPIKEY}`
    )
        .then((e) => e.json())
        .then((data) => data.items.map((video: { snippet: YoutubeVideoInterface }) => video.snippet))
        .catch((err) => err);

    const objectsForIframe: ArrayYTDataIframe = fetchData.map((video) => ({
        videoId: video.resourceId.videoId,
        title: video.title,
        description: getFirstLineDescription(video.description),
    }));

    return objectsForIframe;
}
