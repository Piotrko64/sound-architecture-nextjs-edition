import chromium from "chrome-aws-lambda";
import { ArrayIframesBandcamp } from "../../../@types/SSG/ArrayIframesBandcamp";
import { puppeteerConfig } from "../../../config/puppeteerConfig";
import { websitesUrl } from "../../../config/websitesUrl";

export async function getBandcampDataDataForIframe() {
    const iframes: ArrayIframesBandcamp = [];
    const { urlBandcamp } = websitesUrl;

    const browser = await chromium.puppeteer.launch(await puppeteerConfig());
    const page = await browser.newPage();

    await page.goto(urlBandcamp);

    const allAlbumsUser = await page.$$("#music-grid > li > a");

    for (let i = 0; i <= 1; i++) {
        const allAlbums = await page.$$("#music-grid > li > a");
        await allAlbums[i].click();
        await page.waitForNavigation();

        const tracks = await page.$$("td > .title > a");
        const tracksLength = tracks.length;

        const titlesAllTracks: Array<string> = [];
        for (let i = 0; i <= tracksLength - 1; i++) {
            const tracks = await page.$$("td > .title > a > .track-title");
            tracks.forEach(async (track) => {
                const trackTitle = await page.evaluate((element) => {
                    return element?.innerText;
                }, track);
                titlesAllTracks.push(trackTitle);
            });
        }

        const shareButton = await page.$(".share-embed");
        await shareButton?.click();

        const buttonEmbed = await page.$(".embed-other-services.panel-section  > a");
        await buttonEmbed?.click();

        const bigSizeElement = await page.$(".sizechoice.large > .sizepreview");
        await bigSizeElement?.click();

        const inputElement = await page.$("input.embed_text");

        const dataIframe = await page.evaluate((element) => {
            return element?.value;
        }, inputElement);

        console.log(dataIframe);
        iframes.push({ iframeLink: dataIframe, mainTitles: titlesAllTracks });

        await page.goto(urlBandcamp);
    }

    await browser.close();

    return iframes;
}
