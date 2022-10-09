import { websitesUrl } from "../../../config/websitesUrl";

export async function getBandcampDataDataForIframe() {
    const iframes = await fetch(websitesUrl.urlToFetchDataToIframe)
        .then((data) => data.json())
        .catch((err) => console.log(err));

    return iframes;
}
