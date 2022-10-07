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

    for (let i = 0; i <= 0; i++) {
        const allAlbums = await page.$$("#music-grid > li > a");
        await allAlbums[i].click();
        await page.waitForNavigation();

        const actualUrl = await page.url();
        const tracks = await page.$$("td > .title > a");
        const tracksLength = tracks.length;

        for (let i = 0; i <= tracksLength - 1; i++) {
            const tracks = await page.$$("td > .title > a");
            await tracks[i].click();
            await page.waitForNavigation();

            const trackTitleElement = await page.$(".trackTitle");
            const trackTitle = await page.evaluate((element) => {
                return element?.innerText;
            }, trackTitleElement);

            const shareButton = await page.$(".share-embed");
            await shareButton?.click();

            const buttonEmbed = await page.$(".embed-other-services.panel-section > a");
            await buttonEmbed?.click();

            const smallSizeElement = await page.$(".sizechoice.small > .sizepreview");
            await smallSizeElement?.click();

            const inputElement = await page.$("input.embed_text");
            const dataIframe = await page.evaluate((element) => {
                return element?.value;
            }, inputElement);

            iframes.push({ iframeLink: dataIframe, mainTitle: trackTitle });
            await page.goto(actualUrl);
        }

        await page.goto(urlBandcamp);
    }

    console.log(iframes.length);

    await browser.close();

    return iframes;
}
