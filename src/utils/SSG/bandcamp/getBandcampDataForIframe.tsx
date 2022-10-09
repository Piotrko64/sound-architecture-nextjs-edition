import { websitesUrl } from "../../../config/websitesUrl";
import { exampleBandcampData } from "../../../data/exampleBandcampData";

export async function getBandcampDataDataForIframe() {
    const iframes = await fetch(websitesUrl.urlToFetchDataToIframe)
        .then((data) => data.json())
        .catch((err) => console.log(err))
        .then((res) => res);
    return iframes;
}
