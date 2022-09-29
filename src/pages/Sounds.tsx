import type { NextPage } from "next";
import Head from "next/head";
import { iframeBandcampDataInterface } from "../../@types/IframeBandcampDataInterface";

import { SoundsPageMainComponent } from "../components/SoundsPage/SoundsPageMainComponent";
import { iframesBandcampDataParser } from "../helpers/domParser/iframesBandcampDataParser";
import { Baner } from "../ui/baner/Baner";
import { getBandcampDataDataForIframe } from "../utils/SSG/bandcamp/getBandcampDataForIframe";

const Sounds: NextPage<iframeBandcampDataInterface> = ({ iframeObjects }) => {
    console.log(iframeObjects);
    return (
        <div>
            <Head>
                <title>Sound Effects</title>
            </Head>
            <Baner
                imgURL="/assets/baners/sounds.webp"
                title="Sound Libraries"
                blurURL=" data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAEAsMDgwKEA4NDhIREBMYKBoYFhYYMSMlHSg6Mz08OTM4N0BIXE5ARFdFNzhQbVFXX2JnaGc+TXF5cGR4XGVnY//bAEMBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIAZIDJQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAACooAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAACooAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAACKgAAAAAAAAAAAAAAAACoAoAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAACoAoigAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAICiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKgAAAAAAAAAAAAAAAAAAAAAAAAKIAoAAAAAAAAAAAAAAAAAKIAogCiAKIAogCiAKIAogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAogCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogCiAKIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKIAoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAoigAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAoAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCKAAAAAAAAAAAAAAAAACKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoCCgIKAigAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="
            />
            <SoundsPageMainComponent
                iframesListData={[
                    {
                        srcIframe:
                            "https://bandcamp.com/EmbeddedPlayer/album=3918256789/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                        hrefAnchor: "https://soundarchitecture.bandcamp.com/album/sailing-ambience",
                        title: "Sailing Ambience by Sound Architecture",
                    },
                    {
                        srcIframe:
                            "https://bandcamp.com/EmbeddedPlayer/album=2587588493/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                        hrefAnchor: "https://soundarchitecture.bandcamp.com/album/porto-katsiki-ambience",
                        title: "Porto Katsiki Ambience by Sound Architecture",
                    },
                    {
                        srcIframe:
                            "https://bandcamp.com/EmbeddedPlayer/album=1551662299/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                        hrefAnchor: "https://soundarchitecture.bandcamp.com/album/krka-waterfall",
                        title: "Krka Waterfall by Sound Architecture",
                    },
                    {
                        srcIframe:
                            "https://bandcamp.com/EmbeddedPlayer/album=2502325091/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                        hrefAnchor: "https://soundarchitecture.bandcamp.com/album/swish-sound-effects",
                        title: "Swish - Sound Effects by Sound Architecture",
                    },
                    {
                        srcIframe:
                            "https://bandcamp.com/EmbeddedPlayer/album=714654310/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                        hrefAnchor: "https://soundarchitecture.bandcamp.com/album/air-conditioner",
                        title: "Air Conditioner by Sound Architecture",
                    },
                    {
                        srcIframe:
                            "https://bandcamp.com/EmbeddedPlayer/album=1887217169/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                        hrefAnchor: "https://soundarchitecture.bandcamp.com/album/countryside-ambience",
                        title: "Countryside Ambience by Sound Architecture",
                    },
                    {
                        srcIframe:
                            "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                        hrefAnchor: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                        title: "Windy Marina Ambience by Sound Architecture",
                    },
                ]}
            />
        </div>
    );
};

export default Sounds;
// export async function getStaticProps() {
// const iframeData = await getBandcampDataDataForIframe();
// const iframeObjects = iframesBandcampDataParser(iframeData);
// return {
//     props: { iframeObjects },
// };
// }
