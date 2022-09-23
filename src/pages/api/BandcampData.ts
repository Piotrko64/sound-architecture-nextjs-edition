import chromium from "chrome-aws-lambda";
import type { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../config";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const iframes = [];

    const browser = await chromium.puppeteer.launch({
        args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: false,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    await page.goto(config.urlBandcamp);
    const allAlbums = await page.$$("#music-grid > li > a");

    for (let i = 0; i <= allAlbums.length - 1; i++) {
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

        const dataIframe = await page.evaluate((element) => element?.value, inputElement);

        await iframes.push(dataIframe);

        await page.goto(config.urlBandcamp);
    }

    await browser.close();
    console.log(iframes);

    res.status(200).json({ iframes });
}
