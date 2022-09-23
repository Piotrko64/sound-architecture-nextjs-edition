import chromium from "chrome-aws-lambda";
import type { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../config";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const browser = await chromium.puppeteer.launch({
        args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto(config.urlBandcamp);

    const allAlbums = await page.$$("#music-grid > li > a");

    await allAlbums[0].click();
    await page.waitForNavigation();
    console.log(allAlbums[0]);
    const shareButton = await page.$(".share-embed");
    await shareButton?.click();

    const buttonEmbed = await page.$(".embed-other-services.panel-section > a");
    // sizechoice small
    await buttonEmbed?.click();

    await browser.close();

    res.status(200).json({ name: "John Doe", e: allAlbums });
}
