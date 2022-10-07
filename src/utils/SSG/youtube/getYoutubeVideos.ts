import { YoutubeVideoInterface } from "../../../@types/SSG/YoutubeVideoInterface";
import { getFirstLineDescription } from "./getFirstLineDescription";
import { sliceOnlyTitle } from "./sliceOnlyTitle";

export async function getYoutubeVideos() {
    const fetchData: Array<YoutubeVideoInterface> = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=PLfVf1eElYE11Rf0xV7bZBUd9xZOhqhOJ9&key=${process.env.YOUTUBEAPIKEY}`
    )
        .then((e) => e.json())
        .then((data) => data.items.map((video: { snippet: YoutubeVideoInterface }) => video.snippet))
        .catch((err) => err);

    const objectsForIframe = fetchData.map((video) => ({
        videoId: video.resourceId.videoId,
        title: video.title,
        description: getFirstLineDescription(video.description),
    }));
    console.log(objectsForIframe);
    return objectsForIframe;
}
