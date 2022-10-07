import { puppeteerConfig } from "./../../config/puppeteerConfig";
import chromium from "chrome-aws-lambda";
import type { NextApiRequest, NextApiResponse } from "next";
import { websitesUrl } from "../../config/websitesUrl";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<any>) {
    const iframes = [];
    const { urlBandcamp } = websitesUrl;

    const browser = await chromium.puppeteer.launch(await puppeteerConfig());
    const page = await browser.newPage();

    await page.goto(urlBandcamp);

    const allAlbumsUser = await page.$$("#music-grid > li > a");

    for (let i = 0; i <= allAlbumsUser.length - 1; i++) {
        const allAlbums = await page.$$("#music-grid > li > a");
        await allAlbums[i].click();
        await page.waitForNavigation();

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

        await iframes.push(dataIframe);

        await page.goto(urlBandcamp);
    }

    await browser.close();

    res.status(200).json({ iframes });
}
