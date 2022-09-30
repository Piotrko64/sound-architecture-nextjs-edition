import type { NextPage } from "next";
import Head from "next/head";
import { AmbiencePageMainComponent } from "../components/AmbiencePage/AmbiencePageMainComponent";
import { Baner } from "../ui/baner/Baner";
import { getYoutubeVideos } from "../utils/SSG/youtube/getYoutubeVideos";

const Ambience: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Ambience</title>
            </Head>

            <AmbiencePageMainComponent
                iframesData={[
                    {
                        videoId: "y8EvClrhZVc",
                        title: "Ambience: Sea Waves, On Board, Waves, Water Splash, Island | 1 Hour",
                        description:
                            "Atmospheric ambience. Sound of sailing boat crashing water waves. Water splashes. Sailing near sandy island ",
                    },
                    {
                        videoId: "Zh3JGIMWdnE",
                        title: "Ambience: White Noise, Waterfall, Nature Sounds, Sleep Sound, Falling Water | 2 Hours",
                        description: "Waterfall ambience straight from Tirol.  Nature sleep sounds.",
                    },
                    {
                        videoId: "E5LclqEUKO0",
                        title: "Ambience: Cicadas, Light wind, Water waves, Nature sounds, Background sound | 1 Hour",
                        description:
                            "Cicadas ambience with light wind and waves in the background. Nature sleep sounds.",
                    },
                    {
                        videoId: "9Z9xrHg5Szw",
                        title: "Ambience: Small Town Rain, Street Rain, City Rain, Town Traffic | 1 Hour",
                        description:
                            "Atmospheric rain in a small town. Sound of passing cars and falling water.",
                    },
                    {
                        videoId: "j3sZCyT5ZnY",
                        title: "Dark Ruins Ambience: Dark Forest, Nighttime, Dark Ambient | 1 Hour",
                        description:
                            "Atmospheric dark ambience. Soundscape of fantasy ruins in dark forest. Good for some rpg, dnd session.",
                    },
                    {
                        videoId: "ZA6JNjAv2cs",
                        title: "Dark Space Ambience: Deep Space Ambience, Space Journey, Deep Drones Sound, Space Ambient",
                        description:
                            "Atmospheric dark space ambience. Soundscape for universe discovering. Deep drones sound.",
                    },
                    {
                        videoId: "TU6SVGMKgK8",
                        title: "Blizzard Ambience: Howling Wind Sound, Icy Canyon, Snowing, Background Winter Storm Sound | 1 Hour",
                        description:
                            "Atmospheric dark ambience. Sound of icy canyon with howling wind and falling snow. Winter ambient.",
                    },
                    {
                        videoId: "-nIWTWAoiGg",
                        title: "Tundra Ambience: Distant Thunder, Crickets, Storm Sounds, Thunder Sounds | Relaxing Nature Sounds",
                        description:
                            "Atmospheric dark ambience. Tundra landscape with distant storm. Sound of thunder, crickets and light wind to warm you up for coming Fall.",
                    },
                ]}
            />
        </div>
    );
};

export default Ambience;
// export async function getStaticProps() {
//     getYoutubeVideos();
//     return {
//         props: {},
//     };
// }
