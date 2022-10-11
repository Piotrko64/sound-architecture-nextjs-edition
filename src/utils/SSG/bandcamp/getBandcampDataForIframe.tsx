import { websitesUrl } from "../../../config/websitesUrl";
import { exampleBandcampData } from "../../../data/exampleBandcampData";

export async function getBandcampDataDataForIframe() {
    const iframes = await fetch(websitesUrl.urlToFetchDataToIframe)
        .then((data) => data.json())
        .then((res) => res)

        .catch((err) => console.log(err));

    return iframes || exampleBandcampData;
}
